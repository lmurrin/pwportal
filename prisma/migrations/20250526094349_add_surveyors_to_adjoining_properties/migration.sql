/*
  Warnings:

  - Added the required column `section` to the `GeneratedNotice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GeneratedNotice" ADD COLUMN     "section" "NoticeSubtype" NOT NULL;
