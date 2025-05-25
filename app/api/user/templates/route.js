import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    // Get the user's company (via CompanyUser join)
    const companyUser = await prisma.companyUser.findFirst({
      where: { userId: session.user.id },
      include: { company: true },
    });

    if (!companyUser?.companyId) {
      return NextResponse.json(
        { error: "User not part of a company" },
        { status: 403 }
      );
    }

    // Fetch templates for the company
    const templates = await prisma.documentTemplate.findMany({
      where: { companyId: companyUser.companyId },
      select: {
        id: true,
        name: true,
        description: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(templates);
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}
