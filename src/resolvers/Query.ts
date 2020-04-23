import {
  PrismaClient,
} from "@prisma/client";

// Defining the context interface
interface IContext {
  prisma: PrismaClient;
  request: any;
}

export const Query = {
  users: async (_: any, __: any, ctx: IContext) => {
    try {
      return ctx.prisma.user.findMany()
    } catch (error) {
      throw Error(error.message);
    }
  },
}