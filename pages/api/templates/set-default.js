import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.companyId)
    return res.status(401).json({ error: "Unauthorized" });

  const { templateId, type, noticeSubtype, isDefault } = req.body;

  try {
    if (isDefault) {
      // ✅ Set this one to default and clear others
      await prisma.documentTemplate.updateMany({
        where: {
          companyId: session.user.companyId,
          type,
          noticeSubtype,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });

      await prisma.documentTemplate.update({
        where: { id: templateId },
        data: { isDefault: true },
      });
    } else {
      // ✅ Simply unset this template if it's currently default
      await prisma.documentTemplate.update({
        where: { id: templateId },
        data: { isDefault: false },
      });
    }

    // Return updated list
    const updatedTemplates = await prisma.documentTemplate.findMany({
      where: { companyId: session.user.companyId },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json(updatedTemplates);
  } catch (error) {
    console.error("Set default error:", error);
    res.status(500).json({ error: "Failed to update default" });
  }
}
