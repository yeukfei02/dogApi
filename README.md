# dogApi

dogApi

documentation: <https://documenter.getpostman.com/view/3827865/Szzn7H98?version=latest>

## Requirement

- install yarn
- install node (v14+)
- install postgres

## Testing and run

```zsh
$ yarn

// development
$ yarn run dev

// production
$ yarn run start

// run test case
$ yarn run test

// lint code
$ yarn run lint

// format code
$ yarn run format

// generate schema.prisma and prisma client
$ yarn run prisma:generate

// create migration file if schema.prisma changed
$ yarn run prisma:migrate:dev

// reset database
$ yarn run prisma:migrate:reset

// apply pending migrations in the production/staging database
$ yarn run prisma:migrate:deploy

// check migrations status in the production/staging database
$ yarn run prisma:migrate:status

// push schema.prisma state to database
$ yarn run prisma:db:push

// seed data to database
$ yarn run prisma:db:seed

// format schema.prisma
$ yarn run prisma:format

// open prisma studio
$ yarn run prisma:studio
```

## Docker

```zsh
// build images and start container in one line
docker-compose up -d --build

// go inside container
docker exec -it <containerId> /bin/bash

// check container logs
docker logs <containerId>

// remove and stop container
docker-compose down
```

open localhost:3000

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/yeukfei02/dogApi/blob/master/CONTRIBUTING.md)
