import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/prisma';
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    console.log({ userId: ctx.auth.user.email });
    return prisma.user.findMany({
      where : {
        id : ctx.auth.user.id
      }
    });
  })
});
export type AppRouter = typeof appRouter;