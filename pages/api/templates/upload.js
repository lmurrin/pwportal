// pages/api/templates/upload.js
import { IncomingForm } from "formidable";
import { readFile } from "fs/promises";
import path from "path"; // ✅ required for path.extname
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto"; // ✅ also needed for filename uniqueness
import { prisma } from "@/lib/prisma"; // ✅ if you're using Prisma

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new S3Client({
  region: process.env.DO_SPACES_REGION,
  endpoint: process.env.DO_SPACES_ENDPOINT,
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const form = new IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: err.message });

    try {
      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      if (!file || !file.filepath) {
        return res
          .status(400)
          .json({ error: "Missing file or invalid upload." });
      }

      // ✅ Safely extract variables from fields
      const userId = Array.isArray(fields.userId)
        ? fields.userId[0]
        : fields.userId;
      const rawType = Array.isArray(fields.type) ? fields.type[0] : fields.type;
      const rawSubtype = Array.isArray(fields.subtype)
        ? fields.subtype[0]
        : fields.subtype;
      const isDefault = Array.isArray(fields.isDefault)
        ? fields.isDefault[0]
        : fields.isDefault;
      const name = Array.isArray(fields.name)
        ? fields.name[0]
        : fields.name || "Untitled Template";
      const ext = path.extname(file.originalFilename || file.newFilename);
      const safeName = name.replace(/[^a-z0-9]/gi, "-").toLowerCase();

      const type = rawType?.toUpperCase(); // NOTICE, LETTER, AWARD
      const subtype = rawSubtype?.toUpperCase(); // S1, S3, S6

      // ✅ FETCH companyId securely
      const companyUser = await prisma.companyUser.findFirst({
        where: { userId },
        select: { companyId: true },
      });

      const companyId = companyUser?.companyId;

      if (!companyId) {
        return res.status(400).json({ error: "No company found for user." });
      }

      const fileBuffer = await readFile(file.filepath);

      const key = `user-templates/${userId}/${type}/${
        subtype || "general"
      }/${safeName}-${randomUUID()}${ext}`;

      const command = new PutObjectCommand({
        Bucket: process.env.DO_SPACES_BUCKET,
        Key: key,
        Body: fileBuffer,
        ACL: "private",
        ContentType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      await s3.send(command);

      const fileUrl = `https://${process.env.DO_SPACES_BUCKET}.${process.env.DO_SPACES_REGION}.digitaloceanspaces.com/${key}`;

      const created = await prisma.documentTemplate.create({
        data: {
          name,
          type,
          noticeSubtype: subtype || null,
          isDefault: isDefault === "true",
          fileUrl,
          key,
          companyId,
          tagsUsed: [],
        },
      });

      res.status(200).json({ success: true, template: created });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Upload failed." });
    }
  });
}
