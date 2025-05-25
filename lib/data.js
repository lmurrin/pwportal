import { prisma } from "./prisma";

export async function getJobData(jobId) {
  const job = await prisma.job.findUnique({
    where: { id: jobId },
    include: {
      properties: true,
    },
  });

  if (!job) throw new Error("Job not found");

  const firstAO = job.properties[0];

  return {
    AO_Name: firstAO?.owner_name,
    AO_Address: formatAddress(
      firstAO?.owner_address1,
      firstAO?.owner_address2,
      firstAO?.owner_town,
      firstAO?.owner_postcode
    ),
    BO_Name: job.bo_name,
    BO_Address: formatAddress(
      job.bo_address1,
      job.bo_address2,
      job.bo_town,
      job.bo_postcode
    ),
    Works_Address: formatAddress(
      job.work_address1,
      job.work_address2,
      job.work_town,
      job.work_postcode
    ),
    AP_Address: formatAddress(
      firstAO?.addressLine1,
      firstAO?.addressLine2,
      firstAO?.town,
      firstAO?.postcode
    ),
    wall_type: "party wall", // hardcoded or pulled from a future field
    Works_Description: job.description || "Not provided",
    Surveyor_Name: "TBD", // not yet linked
    Surveyor_Company: "TBD",
    Notice_Date: new Date().toLocaleDateString("en-GB"),

    astride_boundary: true, // you can make these dynamic later
    wholly_on_your_land: false,
    Projecting_Foundations: false,
  };
}

function formatAddress(line1, line2, postcode) {
  return [line1, line2, postcode].filter(Boolean).join(", ");
}
