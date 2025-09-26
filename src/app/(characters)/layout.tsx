import { AuthProtectedContainer } from "@/components/Containers/AuthProctededContainer"

export default function CharactersLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <AuthProtectedContainer>{children}</AuthProtectedContainer>
}
