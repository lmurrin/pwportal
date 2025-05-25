import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.companyId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { templateId, type, noticeSubtype, isDefault } = req.body;
  const companyId = session.user.companyId;

  try {
    // Step 1: Determine group criteria
    const whereClause = {
      companyId,
      type,
    };

    if (type === "NOTICE") {
      whereClause.noticeSubtype = noticeSubtype;
    }

    // Step 2: Count how many templates are in this group
    const count = await prisma.documentTemplate.count({
      where: whereClause,
    });

    // Step 3: If it's the only one, force it to default
    if (count === 1) {
      await prisma.documentTemplate.update({
        where: { id: templateId },
        data: { isDefault: true },
      });
    } else {
      if (isDefault) {
        // Unset other defaults in the group
        await prisma.documentTemplate.updateMany({
          where: { ...whereClause, isDefault: true },
          data: { isDefault: false },
        });

        await prisma.documentTemplate.update({
          where: { id: templateId },
          data: { isDefault: true },
        });
      } else {
        // Just turn off default for this one
        await prisma.documentTemplate.update({
          where: { id: templateId },
          data: { isDefault: false },
        });
      }
    }

    // Return updated list
    const updatedTemplates = await prisma.documentTemplate.findMany({
      where: { companyId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(updatedTemplates);
  } catch (error) {
    console.error("Set default error:", error);
    res.status(500).json({ error: "Failed to update default template" });
  }
}
