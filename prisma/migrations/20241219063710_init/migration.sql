-- CreateTable
CREATE TABLE "Rockbands" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "yearoffoundation" TEXT NOT NULL,
    "bestsellingalbum" TEXT NOT NULL,
    "members" TEXT NOT NULL,
    "cityoffoundation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rockbands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Rockbands_name_key" ON "Rockbands"("name");
