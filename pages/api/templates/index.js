import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user?.companyId) {
    return res
      .status(401)
      .json({ error: "Not authenticated or missing companyId" });
  }

  const templates = await prisma.documentTemplate.findMany({
    where: {
      companyId: session.user.companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json(templates);
}
