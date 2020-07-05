import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string) => {
  await prisma.dog_user.create({
    data: {
      email: email,
      password: password,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  const dogUser = await prisma.dog_user.findMany({
    where: {
      email: email,
    },
    take: 1,
  });
  return dogUser[0];
};

export const getAllUser = async () => {
  const dogUserList = await prisma.dog_user.findMany();
  return dogUserList;
};

export const getUserById = async (id: number) => {
  const dogUser = await prisma.dog_user.findOne({
    where: {
      id: id,
    },
  });
  return dogUser;
};
