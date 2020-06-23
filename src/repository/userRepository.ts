import { getRepository } from 'typeorm';

import { DogUser } from '../entity/dogUser';

export const getDogUserRepository = () => {
  const dogUserRepository = getRepository(DogUser);
  return dogUserRepository;
};
