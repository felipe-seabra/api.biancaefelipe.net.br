-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "service" TEXT NOT NULL,
    "contractedValue" INTEGER NOT NULL,
    "amountPaid" INTEGER NOT NULL,
    "observation" TEXT[],
    "opened" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parentage" TEXT NOT NULL,
    "paying" BOOLEAN NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "giftId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_email_key" ON "Supplier"("email");

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gifts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
