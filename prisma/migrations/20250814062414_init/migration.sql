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
    "NAMA1" TEXT,
    "NAMA2" TEXT,
    "NAMA3" TEXT,
    "KDPKT" TEXT,
    "PANGKAT" TEXT,
    "KORPS" TEXT,
    "HAR" TEXT,
    "NRP" TEXT,
    "KELAHIRAN" TEXT,
    "JAB1" TEXT,
    "JAB2" TEXT,
    "JAB3" TEXT,
    "JAB4" TEXT,
    "JAB5" TEXT,
    "TMTTNI" TEXT,
    "TGAB" TEXT,
    "BLAB" TEXT,
    "THAB" TEXT,
    "KDSAH" TEXT,
    "TMTMPP" TEXT,
    "TGMPP" TEXT,
    "BLMPP" TEXT,
    "THMPP" TEXT,
    "SDTG" TEXT,
    "SDBL" TEXT,
    "SDTH" TEXT,
    "TMTHENTI" TEXT,
    "TGHT" TEXT,
    "BLHT" TEXT,
    "THHT" TEXT,
    "KET1" TEXT,
    "KET2" TEXT,
    "KET3" TEXT,
    "KET4" TEXT,
    "KET5" TEXT,
    "KET6" TEXT,
    "USUL" TEXT,
    "FLR" TEXT,
    "NOSKEP" TEXT,
    "TGSKEP" TEXT,
    "KEPPRES" TEXT,
    "TGKEPP" TEXT,
    "A" TEXT,
    "BL" TEXT,
    "TH" TEXT,
    "KDM" TEXT,
    "KEPPANG" TEXT,
    "TGKEPPANG" TEXT,
    "TGGAL" TEXT,
    "BLGAL" TEXT,
    "BLGAL1" TEXT,
    "THGAL" TEXT,
    "sumberData" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Personil_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");
