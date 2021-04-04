# dogApi

dogApi

documentation: <https://documenter.getpostman.com/view/3827865/Szzn7H98?version=latest>

## Requirement

- install yarn
- install node (v12+)
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

// use eslint and prettier to format code
$ yarn run lint
```

```zsh
every time table change needs to run:

// update schema.prisma from existing database, generate artifacts (e.g. Prisma Client)
$ yarn run generate:prisma

// format schema.prisma
$ yarn run format:prisma

// show preview feature
$ npx prisma --preview-feature
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
