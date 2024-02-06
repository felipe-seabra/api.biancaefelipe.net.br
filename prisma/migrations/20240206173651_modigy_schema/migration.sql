/*
  Warnings:

  - Added the required column `paymentMethod` to the `Gifts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gifts" ADD COLUMN     "paymentMethod" TEXT NOT NULL;
