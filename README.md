# Reproducing the Prisma2 Too Many Clients Error when working with GraphQL-Yoga.

## Error message:

```
Error in connector: Error querying the database: db error: FATAL: sorry, too many clients already
    at PrismaClientFetcher.request (/home/sifiso/Documents/prisma2-too-many-clients-error/node_modules/@prisma/client/src/runtime/getPrismaClient.ts:644:15)
    at runMicrotasks (<anonymous>)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```

## How to repoduce the error?

Clone this git repository

If you have SSH Key set, run the following:

```sh
git clone git@github.com:chynamyerz/prisma2-too-many-clients-error.git
```

else, run the following:

```sh
git clone https://github.com/chynamyerz/prisma2-too-many-clients-error.git
```

Create a postgreSQL database with the name prisma2-to-many-clients-error-db.

Set the .env file in the `./prisma` directory to match your database credentials.

Execute the postgreSQL file found in `./sql` directory.

### Install npm packages

```sh
npm install
```

### Run the prisma introspection

```sh
npm run prisma:introspect
```

### Run the prisma migration

```sh
npm run prisma:migrate
```

### Run the GraphQL-Yoga server

```sh
npm run dev
```

A playground should be launched automatically, if not the server is running on localhost at port 4000 by default. Make sure it is free.

## Producing the error

On the playground, create few users.
And the try to query the users many times, eventually the sever will break with th error specified above.


