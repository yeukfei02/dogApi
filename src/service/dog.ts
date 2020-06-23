import { getDogRepository } from '../repository/dogRepository';
import { getDogImagesRepository } from '../repository/dogImagesRepository';

import { Dog } from '../entity/dog';
import { DogImages } from '../entity/dogImages';

const dogRepository = getDogRepository();
const dogImagesRepository = getDogImagesRepository();

export const createDog = async (item: any, dogUserId: number) => {
  const dog = new Dog();
  dog.bredFor = item.bred_for;
  dog.breedGroup = item.breed_group;
  dog.height = item.height;
  dog.lifeSpan = item.life_span;
  dog.name = item.name;
  dog.origin = item.origin;
  dog.temperament = item.temperament;
  dog.weight = item.weight;
  dog.dogUserId = dogUserId;
  await dogRepository.save(dog);
};

export const getBreedsByName = async (name: string) => {
  const dog = dogRepository.find({ name: name });
  return dog;
};

export const createDogImages = async (item: any, dogUserId: number) => {
  const dogImages = new DogImages();
  dogImages.width = item.width;
  dogImages.height = item.height;
  dogImages.url = item.url;
  dogImages.dogUserId = dogUserId;
  await dogImagesRepository.save(dogImages);
};
