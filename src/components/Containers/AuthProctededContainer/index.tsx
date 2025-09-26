import { ReactNode } from "react"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function AuthProtectedContainer({ children }: { children: ReactNode }) {
  const session = await auth()
  if (!session) {
    return redirect("/login")
  }
  return <>{children}</>
}
