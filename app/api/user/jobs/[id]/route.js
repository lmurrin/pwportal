import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return new NextResponse("Unauthorised", { status: 401 });
  }

  const userId = session.user.id;

  try {
    const job = await prisma.job.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        properties: {
          include: {
            notices: {
              include: {
                documents: true,
                templateS1: true,
                templateS3: true,
                templateS6: true,
              },
            },
            surveyorAppointments: {
              include: {
                surveyor: true,
              },
            },
          },
        },
        company: true,
        namedSurveyor: true,
      },
    });

    if (!job) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(job);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
