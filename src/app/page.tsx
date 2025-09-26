import { AuthProtectedContainer } from "@/components/Containers/AuthProctededContainer"
import CharacterListPageContent from "./(characters)/character/list/characterList"

export default async function MainPage() {
  return (
    <AuthProtectedContainer>
      <CharacterListPageContent />
    </AuthProtectedContainer>
  )
}
