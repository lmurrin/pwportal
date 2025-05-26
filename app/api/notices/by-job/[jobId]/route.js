// app/api/notices/by-job/[jobId]/route.js
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { jobId } = params;

  try {
    const notices = await prisma.generatedNotice.findMany({
      where: { jobId },
      include: {
        adjoiningProperty: true,
        templateS1: true,
        templateS3: true,
        templateS6: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(notices);
  } catch (error) {
    console.error("Failed to fetch notices:", error);
    return NextResponse.json(
      { error: "Failed to fetch notices" },
      { status: 500 }
    );
  }
}
