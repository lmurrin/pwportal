-- CreateEnum
CREATE TYPE "NoticeResponseType" AS ENUM ('CONSENT', 'CONSENT_SOC', 'DISSENT_TWO_SURVEYORS', 'DISSENT_AGREED_SURVEYOR', 'NO_RESPONSE');

-- CreateEnum
CREATE TYPE "PartyRole" AS ENUM ('BUILDING_OWNER', 'ADJOINING_OWNER', 'AGREED_SURVEYOR');

-- CreateTable
CREATE TABLE "GeneratedNotice" (
    "id" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "adjoiningOwnerId" TEXT NOT NULL,
    "servedDate" TIMESTAMP(3) NOT NULL,
    "responseType" "NoticeResponseType" NOT NULL,
    "responseDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedNotice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SurveyorAppointment" (
    "id" TEXT NOT NULL,
    "noticeId" TEXT NOT NULL,
    "surveyorId" TEXT NOT NULL,
    "role" "PartyRole" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SurveyorAppointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Surveyor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,

    CONSTRAINT "Surveyor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GeneratedNotice_documentId_key" ON "GeneratedNotice"("documentId");

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "GeneratedDocument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedNotice" ADD CONSTRAINT "GeneratedNotice_adjoiningOwnerId_fkey" FOREIGN KEY ("adjoiningOwnerId") REFERENCES "AdjoiningProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyorAppointment" ADD CONSTRAINT "SurveyorAppointment_noticeId_fkey" FOREIGN KEY ("noticeId") REFERENCES "GeneratedNotice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SurveyorAppointment" ADD CONSTRAINT "SurveyorAppointment_surveyorId_fkey" FOREIGN KEY ("surveyorId") REFERENCES "Surveyor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
