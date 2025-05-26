import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      jobId,
      adjoiningPropertyId,
      ownerName,
      startDate,
      responseDate,
      sections,
      templates = {},
      s1Details = {},
      s3Details = {},
      s6Details = {},
    } = body;

    // Ensure s3Paragraphs are strings
    const cleanedS3Paragraphs = (s3Details.paragraphs || []).map((p) =>
      p.toString()
    );

    // Map templates
    const templateS1Id = templates["S1"] || null;
    const templateS3Id = templates["S3"] || null;
    const templateS6Id = templates["S6"] || null;

    const newNotice = await prisma.generatedNotice.create({
      data: {
        jobId,
        adjoiningPropertyId,
        ownerName,
        startDate: new Date(startDate),
        responseDate: new Date(responseDate),
        sections,

        // Section 1
        s1WallPosition: s1Details.wallPosition || null,
        s1Footings: s1Details.projectingFootings || null,
        s1Description: s1Details.description || null,

        // Section 3
        s3Paragraphs: cleanedS3Paragraphs,
        s3Description: s3Details.description || null,

        // Section 6
        s6DistanceType: s6Details.distanceType || null,
        s6Safeguard: s6Details.safeguard || null,
        s6Description: s6Details.description || null,

        // Template IDs
        templateS1Id,
        templateS3Id,
        templateS6Id,
      },
    });

    return NextResponse.json({ success: true, notice: newNotice });
  } catch (error) {
    console.error("Error creating notice:", error);
    return NextResponse.json(
      { error: "Failed to create notice" },
      { status: 500 }
    );
  }
}
