-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'USER',
    "otp" TEXT,
    "otpExpires" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Personil" (
    "id" SERIAL NOT NULL,
    "NAMA" TEXT NOT NULL,
    "PANGKAT" TEXT,
    "NRP" TEXT NOT NULL,
    "KESATUAN" TEXT,
    "TTL" TIMESTAMP(3) NOT NULL,
    "TMT_TNI" TEXT,
    "NKTPA" TEXT,
    "NPWP" TEXT,
    "AUTENTIK" TEXT,
    "MDK" INTEGER,
    "MKG" INTEGER,
    "GPT" INTEGER,
    "NO_SKEP" TEXT,
    "TGL_SKEP" TIMESTAMP(3),
    "TMT_SKEP" TIMESTAMP(3),
    "TMT_MULAI" TEXT,
    "PENSIUN" TIMESTAMP(3) NOT NULL,
    "PENSPOK" INTEGER,
    "SELAMA" TEXT,
    "PASANGAN" TEXT,
    "TTL_PASANGAN" TIMESTAMP(3),
    "ANAK_1" TEXT,
    "TTL_ANAK_1" TIMESTAMP(3),
    "STS_ANAK_1" TEXT,
    "ANAK_2" TEXT,
    "TTL_ANAK_2" TIMESTAMP(3),
    "STS_ANAK_2" TEXT,
    "ANAK_3" TEXT,
    "TTL_ANAK_3" TIMESTAMP(3),
    "STS_ANAK_3" TEXT,
    "ANAK_4" TEXT,
    "TTL_ANAK_4" TIMESTAMP(3),
    "STS_ANAK_4" TEXT,
    "PENSPOK_WARI" INTEGER,
    "RP1" INTEGER,
    "BRP1" INTEGER,
    "RP2" INTEGER,
    "BRP2" INTEGER,
    "TMB_PN" TEXT,
    "ALAMAT" TEXT,
    "ALAMAT_ASABRI" TEXT,
    "UTAMA" TEXT,
    "NO_SERI" TEXT,
    "NO_SKEP2" TEXT,
    "TGL_SKEP2" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Personil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."History" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "personilId" INTEGER,
    "action" TEXT NOT NULL,
    "detail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Personil_NRP_key" ON "public"."Personil"("NRP");

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."History" ADD CONSTRAINT "History_personilId_fkey" FOREIGN KEY ("personilId") REFERENCES "public"."Personil"("id") ON DELETE SET NULL ON UPDATE CASCADE;
