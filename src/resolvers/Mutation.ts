import bcrypt from "bcrypt";

import {
  PrismaClient,
  UserCreateInput,
  UserUpdateInput
} from "@prisma/client";
interface IContext {
  prisma: PrismaClient;
  request: any;
}

// Defining user update interface
interface IUserUpdate extends UserUpdateInput {
  newPassword?: string;
}

export const Mutation = {
  signup: async (_: any, {email, password}: UserCreateInput, ctx: IContext) => {
    try {
      // Make email lower case and trim the white spaces.
      email = email.toLocaleLowerCase().trim()

      // Check if the iser already exists.
      if ((await ctx.prisma.user.findOne({where: {email}}))) {
        throw Error("User already exists.");
      }

      // Hash password before stored in the database.
      password = await bcrypt.hash(password, 10);

      await ctx.prisma.user.create({
        data: {
          email,
          password,          
        }
      })

      return {
        message: "All set. Now sign in using the credentials you provided."
      }
    } catch (error) {
      throw Error(error.message);
    }
  },
};