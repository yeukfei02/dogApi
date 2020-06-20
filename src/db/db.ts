import { createConnection } from 'typeorm';
import { DogUser } from '../entity/dogUser';
import { Dog } from '../entity/dog';
import { DogImages } from '../entity/DogImages';

export const connectDB = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'donaldwu',
    password: '',
    database: 'donaldwu',
    entities: [DogUser, Dog, DogImages],
    synchronize: true,
  });
};
