// ui
import { api } from "@/components/Containers/QueryProviderContainer"
import { useFetchAndStoreData } from "@/services/fetcher/fetcher"
import Button from "@/ui/Actions/Button"
import Inline from "@/ui/Layout/Inline"
import Spacer from "@/ui/Layout/Spacer"
import Stack from "@/ui/Layout/Stack"
import Divider from "@/ui/Presentation/Divider"
import SmartImage from "@/ui/Presentation/SmartImage"
import Title from "@/ui/Presentation/Title"

export default function CharactersToolbar() {
  const [ data, loading, fetchData ] = useFetchAndStoreData<Object>("/api/character/list")
  const charactersData = api.character.list.useQuery()
  return (
    <Stack gap="tight">
      <Inline className="items-center">
        <SmartImage
          src="/public/images/logo_small.png"
          alt="Logo"
          width={80}
          height={80}
        />
        <Title>Characters</Title>
        <Spacer />
        <Button isLoading={loading} icon="add" onClick={fetchData}>Add Character</Button>
      </Inline>
      <Divider />
    </Stack>
  )
}
