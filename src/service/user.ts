import { getRepository } from 'typeorm';

import { DogUser } from '../entity/DogUser';

export const createUser = async (email: string, password: string) => {
  const dogUserRepository = getRepository(DogUser);

  const dogUser = new DogUser();
  dogUser.email = email;
  dogUser.password = password;
  await dogUserRepository.save(dogUser);
};

export const getUserByEmail = async (email: string) => {
  const dogUserRepository = getRepository(DogUser);

  const dogUser = dogUserRepository.find({ email: email });
  return dogUser;
};

export const getAllUser = async () => {
  const dogUserRepository = getRepository(DogUser);

  const dogUserList = dogUserRepository.find({});
  return dogUserList;
};

export const getUserById = async (id: number) => {
  const dogUserRepository = getRepository(DogUser);

  const dogUser = dogUserRepository.findOne(id);
  return dogUser;
};
