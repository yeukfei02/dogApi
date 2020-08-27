import { PrismaClient, dog } from '@prisma/client';

const prisma = new PrismaClient();

export const createDog = async (item: any, dogUserId: number): Promise<void> => {
  await prisma.dog.create({
    data: {
      bredFor: item.bredFor,
      breedGroup: item.breed_group,
      height: item.height,
      lifeSpan: item.life_span,
      name: item.name,
      origin: item.origin,
      temperament: item.temperament,
      weight: item.weight,
      dogUserId: dogUserId,
    },
  });
};

export const getBreedsByName = async (name: string): Promise<dog> => {
  const dog = await prisma.dog.findMany({
    where: {
      name: name,
    },
    take: 1,
  });
  return dog[0];
};

export const createDogImages = async (item: any, dogUserId: number): Promise<void> => {
  await prisma.dog_images.create({
    data: {
      width: item.width.toString(),
      height: item.height.toString(),
      url: item.url,
      dogUserId: dogUserId,
    },
  });
};
