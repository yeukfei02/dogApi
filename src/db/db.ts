import { createConnection } from 'typeorm';
import { User } from '../entity/user';

export const connectDB = async () => {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'donaldwu',
    password: '',
    database: 'donaldwu',
    entities: [User],
    synchronize: true,
  });
};
