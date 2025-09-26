// ui
import Button from "@/ui/Actions/Button"
import Inline from "@/ui/Layout/Inline"
import Spacer from "@/ui/Layout/Spacer"
import Stack from "@/ui/Layout/Stack"
import Divider from "@/ui/Presentation/Divider"
import SmartImage from "@/ui/Presentation/SmartImage"
import Title from "@/ui/Presentation/Title"

export default function CharactersToolbar() {
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
        <Spacer/>
        <Button icon="add">Add Character</Button>
      </Inline>
      <Divider />
    </Stack>
  )
}
