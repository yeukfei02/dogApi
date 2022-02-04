-- CreateIndex
CREATE INDEX "index_dog_on_bred_for" ON "dog"("bred_for");

-- CreateIndex
CREATE INDEX "index_dog_on_breed_group" ON "dog"("breed_group");

-- CreateIndex
CREATE INDEX "index_dog_on_height" ON "dog"("height");

-- CreateIndex
CREATE INDEX "index_dog_on_life_span" ON "dog"("life_span");

-- CreateIndex
CREATE INDEX "index_dog_on_name" ON "dog"("name");

-- CreateIndex
CREATE INDEX "index_dog_on_origin" ON "dog"("origin");

-- CreateIndex
CREATE INDEX "index_dog_on_temperament" ON "dog"("temperament");

-- CreateIndex
CREATE INDEX "index_dog_on_weight" ON "dog"("weight");

-- CreateIndex
CREATE INDEX "index_dog_on_dog_user_id" ON "dog"("dog_user_id");

-- CreateIndex
CREATE INDEX "index_dog_on_created_at" ON "dog"("created_at");

-- CreateIndex
CREATE INDEX "index_dog_on_updated_at" ON "dog"("updated_at");

-- CreateIndex
CREATE INDEX "index_dog_images_on_url" ON "dog_images"("url");

-- CreateIndex
CREATE INDEX "index_dog_images_on_width" ON "dog_images"("width");

-- CreateIndex
CREATE INDEX "index_dog_images_on_height" ON "dog_images"("height");

-- CreateIndex
CREATE INDEX "index_dog_images_on_dog_user_id" ON "dog_images"("dog_user_id");

-- CreateIndex
CREATE INDEX "index_dog_images_on_created_at" ON "dog_images"("created_at");

-- CreateIndex
CREATE INDEX "index_dog_images_on_updated_at" ON "dog_images"("updated_at");

-- CreateIndex
CREATE INDEX "index_dog_user_on_email" ON "dog_user"("email");

-- CreateIndex
CREATE INDEX "index_dog_user_on_password" ON "dog_user"("password");

-- CreateIndex
CREATE INDEX "index_dog_user_on_created_at" ON "dog_user"("created_at");

-- CreateIndex
CREATE INDEX "index_dog_user_on_updated_at" ON "dog_user"("updated_at");
