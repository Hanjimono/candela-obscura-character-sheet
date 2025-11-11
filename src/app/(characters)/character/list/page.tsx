import CharacterListPageContent from "./characterList"
import { api } from "@/server/trpc/server"

export default async function CharacterListPage() {
  const characters = await api.character.list()
  return <CharacterListPageContent />
}
