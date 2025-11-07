// Ui
import Inline from "@/ui/Layout/Inline"
//types
import { CharacterSheetToolbarProps } from "./types"
import Spacer from "@/ui/Layout/Spacer"
import CharacterAvatar from "../../Avatar"
import Title from "@/ui/Presentation/Title"
import TextWithTranslation from "@/ds/TextWithTranslation"
import Stack from "@/ui/Layout/Stack"
import { formatClassnames } from "@/ui/Skeleton/utils"

export default function CharacterSheetToolbar({
  character,
  className
}: CharacterSheetToolbarProps) {
  return (
    <Inline
      className={formatClassnames(
        "p-2 bg-neutral-700/30 rounded-t-full",
        className
      )}
    >
      <CharacterAvatar avatarUrl={character.picture || ""} />
      <Stack gap="tight">
        <Inline>
          <TextWithTranslation
            translated={character.nameRu}
            size="extra-large"
            isLight
            isCursive
          />
        </Inline>
        <Inline>
          <Inline gap="tight">
            <TextWithTranslation
              className="mr-1"
              translated="Роль"
              isShowColon
              isAccented
            />
            <TextWithTranslation
              translated={character.roleRu}
              original={character.role}
              isShowDivider
              isLight
              isCursive
            />
          </Inline>
          <Inline gap="tight">
            <TextWithTranslation
              className="mr-1"
              translated="Специальность"
              isShowColon
              isAccented
            />
            <TextWithTranslation
              translated={character.classRu}
              original={character.class}
              isShowDivider
              isLight
              isCursive
            />
          </Inline>
        </Inline>
      </Stack>
      <Spacer />
    </Inline>
  )
}
