// app/api/notices/[id]/generate/route.js
import { prisma } from "@/lib/prisma";
import { generateNoticeDoc } from "@/lib/generateNotice";

export async function GET(req, { params }) {
  const id = params.id;

  if (!id) return new Response("Missing notice ID", { status: 400 });

  // Get the notice
  const notice = await prisma.generatedNotice.findUnique({
    where: { id },
    include: {
      job: true,
      adjoiningProperty: true,
    },
  });

  if (!notice) return new Response("Notice not found", { status: 404 });

  // Decide which templateId to use
  const primarySection = notice.sections[0]; // e.g. "S1"
  const templateFieldMap = {
    S1: "templateS1Id",
    S3: "templateS3Id",
    S6: "templateS6Id",
  };
  const templateId = notice[templateFieldMap[primarySection]];

  if (!templateId)
    return new Response("Template not assigned for this notice", {
      status: 400,
    });

  const template = await prisma.documentTemplate.findUnique({
    where: { id: templateId },
  });

  if (!template)
    return new Response("Template file not found", { status: 404 });

  // Generate document
  const { buffer, filename } = await generateNoticeDoc({
    job: notice.job,
    adjoiningProperty: notice.adjoiningProperty,
    template,
    notice,
  });

  return new Response(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(
        filename
      )}`,
    },
  });
}
