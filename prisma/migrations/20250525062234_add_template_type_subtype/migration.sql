/*
  Warnings:

  - Added the required column `type` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.
  - Made the column `companyId` on table `DocumentTemplate` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TemplateType" AS ENUM ('NOTICE', 'LETTER', 'AWARD');

-- CreateEnum
CREATE TYPE "NoticeSubtype" AS ENUM ('S1', 'S3', 'S6');

-- AlterTable
ALTER TABLE "DocumentTemplate" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "noticeSubtype" "NoticeSubtype",
ADD COLUMN     "type" "TemplateType" NOT NULL,
ALTER COLUMN "companyId" SET NOT NULL;
