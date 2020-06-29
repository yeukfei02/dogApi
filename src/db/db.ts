import { createConnection } from 'typeorm';

export const connectDB = async () => {
  const environment = process.env.NODE_ENV;
  if (environment === 'development') {
    const entityFolderPath = process.env.PWD + '/src/entity/*.ts';

    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'donaldwu',
      password: '',
      database: 'donaldwu',
      entities: [entityFolderPath],
      synchronize: true,
    });
  } else {
    const entityFolderPath = process.env.PWD + '/dist/entity/*.js';

    await createConnection({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'donaldwu',
      password: 'donaldwu',
      database: 'donaldwu',
      entities: [entityFolderPath],
      synchronize: true,
    });
  }
};
