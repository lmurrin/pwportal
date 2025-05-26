/*
  Warnings:

  - You are about to drop the column `noticeId` on the `SurveyorAppointment` table. All the data in the column will be lost.
  - Added the required column `adjoiningOwnerId` to the `SurveyorAppointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SurveyorAppointment" DROP CONSTRAINT "SurveyorAppointment_noticeId_fkey";

-- AlterTable
ALTER TABLE "SurveyorAppointment" DROP COLUMN "noticeId",
ADD COLUMN     "adjoiningOwnerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SurveyorAppointment" ADD CONSTRAINT "SurveyorAppointment_adjoiningOwnerId_fkey" FOREIGN KEY ("adjoiningOwnerId") REFERENCES "AdjoiningProperty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
