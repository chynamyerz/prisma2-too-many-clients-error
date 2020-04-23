import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import resolvers from './resolvers';

const server = new GraphQLServer({ 
  context: ({ request }) => ({
    prisma: new PrismaClient(),
    request
  }),
  resolvers,
  typeDefs: __dirname + "/schema.graphql",
})

server.start(() => console.log('Server is running on localhost:4000'))