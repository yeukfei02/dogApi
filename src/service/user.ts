import { getDogUserRepository } from '../repository/userRepository';

import { DogUser } from '../entity/dogUser';

const dogUserRepository = getDogUserRepository();

export const createUser = async (email: string, password: string) => {
  const dogUser = new DogUser();
  dogUser.email = email;
  dogUser.password = password;
  await dogUserRepository.save(dogUser);
};

export const getUserByEmail = async (email: string) => {
  const dogUser = dogUserRepository.find({ email: email });
  return dogUser;
};

export const getAllUser = async () => {
  const dogUserList = dogUserRepository.find({});
  return dogUserList;
};

export const getUserById = async (id: number) => {
  const dogUser = dogUserRepository.findOne(id);
  return dogUser;
};
