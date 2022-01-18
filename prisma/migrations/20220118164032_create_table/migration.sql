-- CreateTable
CREATE TABLE "dog" (
    "id" SERIAL NOT NULL,
    "bred_for" VARCHAR,
    "breed_group" VARCHAR,
    "height" JSONB,
    "life_span" VARCHAR,
    "name" VARCHAR,
    "origin" VARCHAR,
    "temperament" VARCHAR,
    "weight" JSONB,
    "dog_user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog_images" (
    "id" SERIAL NOT NULL,
    "width" VARCHAR,
    "height" VARCHAR,
    "url" VARCHAR,
    "dog_user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dog_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dog_user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dog_user_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dog" ADD CONSTRAINT "dog_dog_user_id_fkey" FOREIGN KEY ("dog_user_id") REFERENCES "dog_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dog_images" ADD CONSTRAINT "dog_images_dog_user_id_fkey" FOREIGN KEY ("dog_user_id") REFERENCES "dog_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
