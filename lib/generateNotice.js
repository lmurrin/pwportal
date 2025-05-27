import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
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

export async function generateNoticeDoc({
  job,
  adjoiningProperty,
  template,
  notice,
}) {
  if (!job || !adjoiningProperty || !template || !notice) {
    throw new Error("Missing required data for document generation.");
  }

  // Map and prepare conditional flags
  const is3m = notice.s6DistanceType?.toLowerCase().includes("3m");
  const is6m = notice.s6DistanceType?.toLowerCase().includes("6m");
  const shouldSafeguard = notice.s6Safeguard?.toLowerCase().includes("intend");

  // Prepare docxtemplater-compatible data
  const data = {
    AO_Name: adjoiningProperty.owner_name,
    AO_Address: formatAddress([
      adjoiningProperty.owner_address1,
      adjoiningProperty.owner_address2,
      adjoiningProperty.owner_town,
      adjoiningProperty.owner_county,
      adjoiningProperty.owner_postcode,
      adjoiningProperty.owner_country,
    ]),
    BO_Name: job.bo_name_corr || job.bo_name,
    BO_Address: formatAddress([
      job.bo_address1,
      job.bo_address2,
      job.bo_town,
      job.bo_county,
      job.bo_postcode,
      job.bo_country,
    ]),
    Works_Address: formatAddress([
      job.work_address1,
      job.work_address2,
      job.work_town,
      job.work_county,
      job.work_postcode,
    ]),
    AP_Address: formatAddress([
      adjoiningProperty.addressLine1,
      adjoiningProperty.addressLine2,
      adjoiningProperty.town,
      adjoiningProperty.county,
      adjoiningProperty.postcode,
    ]),
    Works_Description: job.description,
    Notice_Date: new Date(notice.startDate).toLocaleDateString("en-GB"),
    Response_Date: new Date(notice.responseDate).toLocaleDateString("en-GB"),

    // Section 1
    S1_Wall_Position: notice.s1WallPosition || "",
    S1_Footings: notice.s1Footings || "",
    S1_Description: notice.s1Description || "",

    // Section 3
    s2_Paragraphs: (notice.s3Paragraphs || []).join(", "),
    s3_Works_Description: notice.s3Description || "",

    // Section 6
    "3m": is3m,
    "6m": is6m,
    safeguard: !shouldSafeguard, // docxtemplater `{#safeguard}` means "not safeguarding"
    s6_Works_Description: notice.s6Description || "",

    // Shared
    Surveyor_Name: "Michael Sharp",
    Surveyor_Company: "Sharp Surveyors",
  };

  // Fetch template buffer using signed URL
  const getCommand = new GetObjectCommand({
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: template.key,
  });

  const signedUrl = await getSignedUrl(s3, getCommand, { expiresIn: 60 });

  const templateBuffer = await fetch(signedUrl).then((res) =>
    res.arrayBuffer()
  );

  const zip = new PizZip(templateBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.setData(data);
  doc.render();

  const buffer = doc.getZip().generate({ type: "nodebuffer" });

  // === Filename Construction ===

  const filename =
    `${notice.sections[0]} - ${adjoiningProperty.addressLine1} - ${adjoiningProperty.owner_name}.docx`
      .replace(/[^a-z0-9\- ]/gi, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  return { buffer, filename };
}

// Sanitize to ensure valid filename
function sanitizeFilename(name) {
  return name.replace(/[\/\\?%*:|"<>]/g, "").trim();
}

function formatAddress(parts = []) {
  return parts.filter(Boolean).join(", ");
}
