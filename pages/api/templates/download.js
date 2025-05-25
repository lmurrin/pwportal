import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.DO_SPACES_REGION,
  endpoint: process.env.DO_SPACES_ENDPOINT,
  credentials: {
    accessKeyId: process.env.DO_SPACES_KEY,
    secretAccessKey: process.env.DO_SPACES_SECRET,
  },
});

export default async function handler(req, res) {
  const { key } = req.query;

  if (!key) return res.status(400).json({ error: "Missing key" });

  const command = new GetObjectCommand({
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: key,
  });

  try {
    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 }); // 60 seconds
    return res.status(200).json({ url: signedUrl });
  } catch (err) {
    console.error("Signed URL error:", err);
    return res.status(500).json({ error: "Failed to generate signed URL" });
  }
}
