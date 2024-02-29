/*
  Warnings:

  - The `message` column on the `MessageForTheCouple` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "MessageForTheCouple" DROP COLUMN "message",
ADD COLUMN     "message" TEXT[];
