import { AuthProtectedContainer } from "@/components/Containers/AuthProctededContainer"
import CharacterSheet from "@/components/Characters/Sheet"

export default async function MainPage() {
  return (
    <AuthProtectedContainer>
      <CharacterSheet />
    </AuthProtectedContainer>
  )
}
