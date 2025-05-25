import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

/*=================================================================================
  Get all jobs associated with the current user, or all jobs if user role is admin
=================================================================================*/

export async function GET() {
  const session = await auth();

  if (!session || !session.user?.id) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const userId = session.user.id;
  const userRole = session.user.role;

  if (userRole === "ADMIN") {
    const allJobs = await prisma.job.findMany({
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(allJobs);
  }

  const companyUser = await prisma.companyUser.findFirst({
    where: { userId },
    select: { companyId: true },
  });

  if (!companyUser?.companyId) return NextResponse.json([]);

  const companyJobs = await prisma.job.findMany({
    where: { companyId: companyUser.companyId },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(companyJobs);
}

/*=================================================================================
  Create New Job
=================================================================================*/

export async function POST(req) {
  const session = await auth(req);
  if (!session || !session.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const userId = session.user.id;

  try {
    const {
      jobRef,
      jobName,
      worksDescription,
      namedSurveyor,
      managingSurveyor,
      worksAddress,
      ownerAddress,
      boName,
      boCorrName,
      boPlurality,
      boTenure,
      adjoiningOwners,
    } = await req.json();

    // Fetch companyId if user is part of a company
    const companyUser = await prisma.companyUser.findFirst({
      where: { userId },
      select: { companyId: true },
    });

    const newJob = await prisma.job.create({
      data: {
        user: { connect: { id: userId } },
        company: companyUser?.companyId
          ? { connect: { id: companyUser.companyId } }
          : undefined,
        title: jobName,
        reference: jobRef,
        description: worksDescription,
        bo_name: boName,
        bo_name_corr: boCorrName,
        work_address1: worksAddress.address1,
        work_address2: worksAddress.address2,
        work_town: worksAddress.town,
        work_county: worksAddress.county,
        work_postcode: worksAddress.postcode,
        work_country: worksAddress.country,
        bo_address1: ownerAddress.address1,
        bo_address2: ownerAddress.address2,
        bo_town: ownerAddress.town,
        bo_county: ownerAddress.county,
        bo_postcode: ownerAddress.postcode,
        bo_country: ownerAddress.country,
        status: "ACTIVE",
        properties: {
          create: (adjoiningOwners || []).map((owner) => ({
            owner_name: owner.name,
            owner_corr_name: owner.correspondenceName,
            ownership_type: owner.tenure || "FREEHOLDER",
            addressLine1: owner.propertyAddress.address1,
            addressLine2: owner.propertyAddress.address2,
            town: owner.propertyAddress.town,
            county: owner.propertyAddress.county,
            postcode: owner.propertyAddress.postcode,
            country: owner.propertyAddress.country,
            owner_address1: owner.ownerAddress.address1,
            owner_address2: owner.ownerAddress.address2,
            owner_town: owner.ownerAddress.town,
            owner_county: owner.ownerAddress.county,
            owner_postcode: owner.ownerAddress.postcode,
            owner_country: owner.ownerAddress.country,
          })),
        },
      },
    });

    return NextResponse.json(newJob);
  } catch (error) {
    console.error("Error creating job:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
