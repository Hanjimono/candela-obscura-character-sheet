"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { loggerLink, unstable_httpBatchStreamLink } from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import { useState } from "react"
import superjson from "superjson"
import { type AppRouter } from "@/server/trpc/root"

const createQueryClient = () => new QueryClient()
let clientQueryClientSingleton: QueryClient | undefined = undefined
const getQueryClient = () => {
  if (typeof window === "undefined") {
    return createQueryClient()
  }
  return (clientQueryClientSingleton ??= createQueryClient())
}
export const api = createTRPCReact<AppRouter>()
export function QueryProviderContainer(props: {
  children: React.ReactNode
  headers?: Headers // Optional: Pass headers from server components if needed initially
}) {
  const queryClient = getQueryClient()
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        // LoggerLink helpful for development debugging
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error)
        }),
        // httpBatchStreamLink uses batching and streaming for better performance
        unstable_httpBatchStreamLink({
          transformer: superjson, // Use SuperJSON for client-side serialization
          url: getBaseUrl() + "/api/trpc", // Dynamically get the base URL
          headers() {
            const heads = new Map(props.headers)
            heads.set("x-trpc-source", "react")
            return Object.fromEntries(heads)
          }
        })
      ]
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  )
}

function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin // Browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}` // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}` // Development SSR should use localhost
}
