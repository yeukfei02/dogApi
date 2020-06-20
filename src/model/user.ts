import { getRepository } from 'typeorm';

import { User } from '../entity/user';

export const createUser = async (email: string, password: string) => {
    const userRepository = getRepository(User);

    const user = new User();
    user.email = email;
    user.password = password;
    await userRepository.save(user);
}

export const getAllUser = async () => {
    const userRepository = getRepository(User);

    const userList = userRepository.find({});
    return userList;
}

export const getUserById = async (id: number) => {
    const userRepository = getRepository(User);

    const user = userRepository.findOne(id);
    return user;
}