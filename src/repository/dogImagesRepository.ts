import { getRepository } from 'typeorm';

import { DogImages } from '../entity/dogImages';

export const getDogImagesRepository = () => {
  const dogImagesRepository = getRepository(DogImages);
  return dogImagesRepository;
};
