import { PrismaClient, dog } from '@prisma/client';

const prisma = new PrismaClient();

export const createDog = async (item: any, dogUserId: number): Promise<void> => {
  await prisma.dog.create({
    data: {
      bred_for: item.bredFor,
      breed_group: item.breed_group,
      height: item.height,
      life_span: item.life_span,
      name: item.name,
      origin: item.origin,
      temperament: item.temperament,
      weight: item.weight,
      dog_user_id: dogUserId,
    },
  });
};

export const getBreedsByName = async (name: string): Promise<dog> => {
  const dog = await prisma.dog.findFirst({
    where: {
      name: name,
    },
  });
  return dog;
};

export const createDogImages = async (item: any, dogUserId: number): Promise<void> => {
  await prisma.dog_images.create({
    data: {
      width: item.width.toString(),
      height: item.height.toString(),
      url: item.url,
      dog_user_id: dogUserId,
    },
  });
};
