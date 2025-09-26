"use client"
// system
import { signIn, useSession } from "next-auth/react"
// ui
import Button from "@/ui/Actions/Button"
import WallDecorated from "@/ui/Layout/Decorators/WallDecorated"
import Stack from "@/ui/Layout/Stack"
import Text from "@/ui/Presentation/Text"
import Title from "@/ui/Presentation/Title"
import { useRouter } from "next/navigation"
import Logo from "@/components/Logo"

export default function AuthPage() {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const isLoading = status === "loading"
  if (session) {
    push("/")
  }
  return (
    <WallDecorated>
      <Stack className="h-full justify-center items-center">
        <Logo />
        <Title>Unauthorized</Title>
        <Text isLight>You must be logged in to access this page.</Text>
        <Button
          isLoading={isLoading}
          disabled={isLoading}
          onClick={() => signIn("google")}
        >
          Login with Google
        </Button>
      </Stack>
    </WallDecorated>
  )
}
