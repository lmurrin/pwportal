/*============================================================
    Generate Document API Route
    This route generates a DOCX document based on a template
    and dynamic data provided in the request.

    EXAMPLE CALL:

    const res = await fetch("/api/generate-doc", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        userId, // Enter user id
        templateId: "tmpl_123", // Enter template id
        jobId,  // Enter job id
        propertyId, // Enter adjoining property id
        extraData: {
        astride_boundary: true,
        wall_type: "block wall",
        },
    }),
    });

============================================================*/

import { NextResponse } from "next/server";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs/promises";
import path from "path";
import { prisma } from "@/lib/prisma";
import { buildDocxData } from "@/lib/docData";

export async function POST(req) {
  const {
    userId,
    templateId,
    jobId,
    propertyId,
    extraData = {},
  } = await req.json();

  try {
    // Fetch template info
    const template = await prisma.documentTemplate.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    const filePath = path.join(
      process.cwd(),
      "uploads",
      "templates",
      userId,
      template.fileUrl
    );

    // Load template file
    const content = await fs.readFile(filePath, "binary");

    // Load dynamic data
    const docData = await buildDocxData({ jobId, propertyId, extraData });

    // Generate document
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: "nodebuffer" });

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename=${
          template.name || "document"
        }.docx`,
      },
    });
  } catch (err) {
    console.error("Document generation failed:", err);
    return NextResponse.json(
      { error: "Failed to generate document" },
      { status: 500 }
    );
  }
}
