/*
  Warnings:

  - The `noticeSubtype` column on the `DocumentTemplate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `key` to the `DocumentTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentTemplate" ADD COLUMN     "key" TEXT NOT NULL,
DROP COLUMN "noticeSubtype",
ADD COLUMN     "noticeSubtype" TEXT;
