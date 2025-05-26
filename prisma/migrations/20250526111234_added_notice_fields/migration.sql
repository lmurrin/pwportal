/*
  Warnings:

  - You are about to drop the column `adjoiningOwnerId` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `documentId` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `responseType` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `section` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `servedDate` on the `GeneratedNotice` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `GeneratedNotice` table. All the data in the column will be lost.
  - Added the required column `adjoiningPropertyId` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jobId` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serviceDate` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.
  - Made the column `responseDate` on table `GeneratedNotice` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "GeneratedNotice" DROP CONSTRAINT "GeneratedNotice_adjoiningOwnerId_fkey";

-- DropForeignKey
ALTER TABLE "GeneratedNotice" DROP CONSTRAINT "GeneratedNotice_documentId_fkey";

-- DropIndex
DROP INDEX "GeneratedNotice_documentId_key";

-- AlterTable
ALTER TABLE "GeneratedDocument" ADD COLUMN     "generatedNoticeId" TEXT;

-- AlterTable
ALTER TABLE "GeneratedNotice" DROP COLUMN "adjoiningOwnerId",
DROP COLUMN "documentId",
DROP COLUMN "responseType",
DROP COLUMN "section",
DROP COLUMN "servedDate",
DROP COLUMN "status",
ADD COLUMN     "adjoiningPropertyId" TEXT NOT NULL,
ADD COLUMN     "jobId" TEXT NOT NULL,
ADD COLUMN     "s1Footings" BOOLEAN,
ADD COLUMN     "s1WallLocation" TEXT,
ADD COLUMN     "s1WorksDescription" TEXT,
ADD COLUMN     "s3Paragraphs" TEXT[],
ADD COLUMN     "s3WorksDescription" TEXT,
ADD COLUMN     "s6NoticeType" TEXT,
ADD COLUMN     "s6SafeguardStatement" TEXT,
ADD COLUMN     "s6WorksDescription" TEXT,
ADD COLUMN     "sections" TEXT[],
ADD COLUMN     "serviceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "templateId" TEXT,
ALTER COLUMN "responseDate" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "GeneratedDocument" ADD CONSTRAINT "GeneratedDocument_generatedNoticeId_fkey" FOREIGN KEY ("generatedNoticeId") REFERENCES "GeneratedNotice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_adjoiningPropertyId_fkey" FOREIGN KEY ("adjoiningPropertyId") REFERENCES "AdjoiningProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "DocumentTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
