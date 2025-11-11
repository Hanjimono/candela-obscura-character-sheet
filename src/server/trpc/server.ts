import "server-only"
import { headers } from "next/headers"
import { cache } from "react"
import { appRouter, type AppRouter } from "@/server/trpc/root"
import { createInnerTRPCContext } from "@/server/trpc/trpc"

const createContext = cache(() => {
  const heads = new Headers(headers())
  heads.set("x-trpc-source", "rsc")
  return createInnerTRPCContext({
    headers: heads
  })
})
export const api = appRouter.createCaller(createContext)
export type { AppRouter } from "@/server/trpc/root"
