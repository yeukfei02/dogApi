import { getRepository } from 'typeorm';

import { Dog } from '../entity/dog';
import { DogImages } from '../entity/dogImages';

export const createDog = async (item: any) => {
  const dogRepository = getRepository(Dog);

  const dog = new Dog();
  dog.bredFor = item.bred_for;
  dog.breedGroup = item.breed_group;
  dog.height = item.height;
  dog.lifeSpan = item.life_span;
  dog.name = item.name;
  dog.origin = item.origin;
  dog.temperament = item.temperament;
  dog.weight = item.weight;
  await dogRepository.save(dog);
};

export const getBreedsByName = async (name: string) => {
  const dogRepository = getRepository(Dog);

  const dog = dogRepository.find({ name: name });
  return dog;
}

export const createDogImages = async (item: any) => {
  const dogImagesRepository = getRepository(DogImages);

  const dogImages = new DogImages();
  dogImages.width = item.width;
  dogImages.height = item.height;
  dogImages.url = item.url;
  await dogImagesRepository.save(dogImages);
}