// CommonJS version — no ESM issues
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "surveyor@example.com",
      name: "Test Surveyor",
      role: "USER",
      profile: {
        create: {
          companyName: "Party Wall Pros Ltd",
          addressLine1: "123 Main Street",
          city: "London",
          postcode: "SW1A 1AA",
          phone: "0123456789",
          website: "https://partywallpros.example.com",
        },
      },
    },
  });

  await prisma.job.create({
    data: {
      userId: user.id,
      title: "Job 1: Extension",
      reference: "PW-001",
      description: "Side extension at 123 Main St.",
      status: "ACTIVE",
      properties: {
        create: [
          {
            addressLine1: "125 Main Street",
            postcode: "SW1A 1AA",
            owners: {
              create: [
                {
                  fullName: "Jane Owner",
                  email: "jane@example.com",
                  ownershipType: "FREEHOLDER",
                },
              ],
            },
          },
        ],
      },
    },
  });

  await prisma.documentTemplate.create({
    data: {
      userId: user.id,
      name: "Standard Notice Template",
      description: "Basic Party Wall Notice with merge tags",
      fileUrl: "/docs/templates/notice-template.docx",
      tagsUsed: ["{{owner_name}}", "{{property_address}}"],
    },
  });

  console.log("✅ Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
