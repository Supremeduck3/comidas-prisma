-- CreateTable
CREATE TABLE "comidas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comidas_pkey" PRIMARY KEY ("id")
);
