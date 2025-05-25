/*
  Warnings:

  - You are about to drop the `Owner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_propertyId_fkey";

-- AlterTable
ALTER TABLE "AdjoiningProperty" ADD COLUMN     "country" TEXT,
ADD COLUMN     "county" TEXT,
ADD COLUMN     "owner_address1" TEXT,
ADD COLUMN     "owner_address2" TEXT,
ADD COLUMN     "owner_corr_name" TEXT,
ADD COLUMN     "owner_country" TEXT,
ADD COLUMN     "owner_county" TEXT,
ADD COLUMN     "owner_name" TEXT,
ADD COLUMN     "owner_postcode" TEXT,
ADD COLUMN     "owner_town" TEXT,
ADD COLUMN     "ownership_type" "OwnershipType" NOT NULL DEFAULT 'FREEHOLDER',
ADD COLUMN     "town" TEXT,
ALTER COLUMN "addressLine1" DROP NOT NULL,
ALTER COLUMN "postcode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "bo_address1" TEXT,
ADD COLUMN     "bo_address2" TEXT,
ADD COLUMN     "bo_country" TEXT,
ADD COLUMN     "bo_county" TEXT,
ADD COLUMN     "bo_email" TEXT,
ADD COLUMN     "bo_name" TEXT,
ADD COLUMN     "bo_name_corr" TEXT,
ADD COLUMN     "bo_phone" TEXT,
ADD COLUMN     "bo_postcode" TEXT,
ADD COLUMN     "bo_town" TEXT,
ADD COLUMN     "work_address1" TEXT,
ADD COLUMN     "work_address2" TEXT,
ADD COLUMN     "work_country" TEXT,
ADD COLUMN     "work_county" TEXT,
ADD COLUMN     "work_postcode" TEXT,
ADD COLUMN     "work_town" TEXT;

-- DropTable
DROP TABLE "Owner";
