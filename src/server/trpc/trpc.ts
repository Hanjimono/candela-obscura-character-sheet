import { initTRPC, TRPCError } from "@trpc/server"
import superjson from "superjson"
import { ZodError } from "zod"
import { type CreateNextContextOptions } from "@trpc/server/adapters/next"

/**
 * Helper function to create the tRPC context.
 * All basic context can be added here.
 *
 * @see https://trpc.io/docs/server/context
 */
export const createInnerTRPCContext = async (opts: {
  headers: Headers /* Add other context sources if needed */
}) => {
  return {
    headers: opts.headers
  }
}

/**
 * The actual function that creates the tRPC context per request.
 */
export const createTRPCContext = async (opts: { headers: Headers }) => {
  return createInnerTRPCContext({
    headers: opts.headers
  })
}

/**
 * Initializes the tRPC API.
 * Main goal to parse ZodErrors.
 */
const contextWithZodErrorsFormatter = initTRPC
  .context<typeof createTRPCContext>()
  .create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
      return {
        ...shape,
        data: {
          ...shape.data,
          zodError:
            error.cause instanceof ZodError ? error.cause.flatten() : null
        }
      }
    }
  })

/**
 * Router creator that uses the context and Zod error formatter.
 * Can be user to create an actual routers and sub-routers.
 */
export const createTRPCRouter = contextWithZodErrorsFormatter.router

/**
 * Public procedure creator that uses the context and Zod error formatter.
 * Can be used to create queries and mutations.
 */
export const publicProcedure = contextWithZodErrorsFormatter.procedure

/**
 * Middleware creator that uses the context and Zod error formatter.
 */
export const middleware = contextWithZodErrorsFormatter.middleware
