/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Gifts` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imageUrl]` on the table `Gifts` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Gifts_name_key" ON "Gifts"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Gifts_imageUrl_key" ON "Gifts"("imageUrl");
