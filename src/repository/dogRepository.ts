import { getRepository } from 'typeorm';

import { Dog } from '../entity/dog';

export const getDogRepository = () => {
  const dogRepository = getRepository(Dog);
  return dogRepository;
};
