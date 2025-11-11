import { characterRouter } from "./routers/character"
import { createTRPCRouter } from "./trpc"

/**
 * Primary application router.
 */
export const appRouter = createTRPCRouter({
  character: characterRouter
})

export type AppRouter = typeof appRouter
