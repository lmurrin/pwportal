import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const userRole = session?.user?.role;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const jobId = params.id;

    // Get the job to verify access
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      select: {
        id: true,
        companyId: true,
      },
    });

    if (!job) {
      return new NextResponse("Job not found", { status: 404 });
    }

    // Admins can access all jobs
    if (userRole !== "ADMIN") {
      const userCompany = await prisma.companyUser.findFirst({
        where: { userId },
        select: { companyId: true },
      });

      if (!userCompany || userCompany.companyId !== job.companyId) {
        return new NextResponse("Forbidden", { status: 403 });
      }
    }

    // Fetch adjoining properties
    const adjoiningProperties = await prisma.adjoiningProperty.findMany({
      where: { jobId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(adjoiningProperties);
  } catch (error) {
    console.error("Error fetching adjoining properties:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
