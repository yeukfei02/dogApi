import { createConnection } from 'typeorm';
import { DogUser } from '../entity/dogUser';

export const connectDB = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'donaldwu',
    password: '',
    database: 'donaldwu',
    entities: [DogUser],
    synchronize: true,
  });
};
