-- CreateEnum
CREATE TYPE "NoticeStatus" AS ENUM ('DRAFT', 'SENT', 'RESPONDED');

-- AlterTable
ALTER TABLE "GeneratedNotice" ADD COLUMN     "status" "NoticeStatus" NOT NULL DEFAULT 'DRAFT';
