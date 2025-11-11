import { z } from "zod"
import { createTRPCRouter, publicProcedure } from "../trpc"

export const characterRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return [
      { id: "1", name: "Alice" },
      { id: "2", name: "Bob" }
    ]
  }),
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return { id: input.id, name: "Alice" }
    }),
  create: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input, ctx }) => {
      return { id: "3", name: input.name }
    })
})
