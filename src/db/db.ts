import { createConnection } from 'typeorm';
import { DogUser } from '../entity/dogUser';
import { Dog } from '../entity/dog';
import { DogImages } from '../entity/dogImages';

export const connectDB = async () => {
  const environment = process.env.NODE_ENV;
  if (environment === 'development') {
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
  } else {
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
  }
};
