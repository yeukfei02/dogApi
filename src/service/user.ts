import { PrismaClient, dog_user } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (email: string, password: string): Promise<void> => {
  await prisma.dog_user.create({
    data: {
      email: email,
      password: password,
    },
  });
};

export const getUserByEmail = async (email: string): Promise<dog_user> => {
  const dogUser = await prisma.dog_user.findFirst({
    where: {
      email: email,
    },
  });
  return dogUser;
};

export const getAllUser = async (): Promise<dog_user[]> => {
  const dogUserList = await prisma.dog_user.findMany({});
  return dogUserList;
};

export const getUserById = async (id: number): Promise<dog_user> => {
  const dogUser = await prisma.dog_user.findUnique({
    where: {
      id: id,
    },
  });
  return dogUser;
};
