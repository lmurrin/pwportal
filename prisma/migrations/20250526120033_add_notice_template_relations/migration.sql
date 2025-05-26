/*
  Warnings:

  - You are about to drop the column `documentTemplateId` on the `GeneratedNotice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "GeneratedNotice" DROP CONSTRAINT "GeneratedNotice_documentTemplateId_fkey";

-- AlterTable
ALTER TABLE "GeneratedNotice" DROP COLUMN "documentTemplateId";

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_templateS1Id_fkey" FOREIGN KEY ("templateS1Id") REFERENCES "DocumentTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_templateS3Id_fkey" FOREIGN KEY ("templateS3Id") REFERENCES "DocumentTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_templateS6Id_fkey" FOREIGN KEY ("templateS6Id") REFERENCES "DocumentTemplate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
