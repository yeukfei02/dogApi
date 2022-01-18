/*
  Warnings:

  - The `width` column on the `dog_images` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `height` column on the `dog_images` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "dog_images" DROP COLUMN "width",
ADD COLUMN     "width" JSONB,
DROP COLUMN "height",
ADD COLUMN     "height" JSONB;
