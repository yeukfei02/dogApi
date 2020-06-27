import { createConnection } from 'typeorm';

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
      entities: [process.env.PWD + '/src/entity/*.ts'],
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
      entities: [process.env.PWD + '/src/entity/*.ts'],
      synchronize: true,
    });
  }
};
