-- CreateEnum
CREATE TYPE "Plurality" AS ENUM ('SINGLE', 'MULTIPLE');

-- AlterTable
ALTER TABLE "AdjoiningProperty" ADD COLUMN     "owner_plurality" "Plurality" NOT NULL DEFAULT 'SINGLE';

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "owner_plurality" "Plurality" NOT NULL DEFAULT 'SINGLE';
