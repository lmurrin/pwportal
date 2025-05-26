/*
  Warnings:

  - You are about to drop the column `s1WallLocation` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `s1WorksDescription` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `s3WorksDescription` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `s6NoticeType` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `s6SafeguardStatement` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `s6WorksDescription` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `serviceDate` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `GeneratedNotice` table. All the data in the column will be lost.
  - Added the required column `ownerName` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GeneratedNotice" DROP CONSTRAINT "GeneratedNotice_templateId_fkey";

-- AlterTable
ALTER TABLE "GeneratedNotice" DROP COLUMN "s1WallLocation",
DROP COLUMN "s1WorksDescription",
DROP COLUMN "s3WorksDescription",
DROP COLUMN "s6NoticeType",
DROP COLUMN "s6SafeguardStatement",
DROP COLUMN "s6WorksDescription",
DROP COLUMN "serviceDate",
DROP COLUMN "templateId",
ADD COLUMN     "documentTemplateId" TEXT,
ADD COLUMN     "ownerName" TEXT NOT NULL,
ADD COLUMN     "s1Description" TEXT,
ADD COLUMN     "s1WallPosition" TEXT,
ADD COLUMN     "s3Description" TEXT,
ADD COLUMN     "s6Description" TEXT,
ADD COLUMN     "s6DistanceType" TEXT,
ADD COLUMN     "s6Safeguard" TEXT,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "templateS1Id" TEXT,
ADD COLUMN     "templateS3Id" TEXT,
ADD COLUMN     "templateS6Id" TEXT,
ALTER COLUMN "s1Footings" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_documentTemplateId_fkey" FOREIGN KEY ("documentTemplateId") REFERENCES "DocumentTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
