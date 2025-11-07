// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { MarksBarProps } from "./types"
import TextWithTranslation from "@/ds/TextWithTranslation"
import Inline from "@/ui/Layout/Inline"
import MarksPanel from "../MarksPanel"
import Button from "@/ui/Actions/Button"

function MarksBar({ className, character }: MarksBarProps) {
  const calculatedClassNames = formatClassnames(
    "marks-bar w-full px-24 pt-2",
    className
  )
  return (
    <div className={calculatedClassNames}>
      <div className="flex justify-center items-center bg-neutral-950 rounded-2xl h-24 w-full">
        <Inline gap="distant" className="justify-between w-full px-8 items-center">
          <TextWithTranslation
            original="Marks"
            translated="Метки"
            orientationMode="vertical"
            isLight
            size="large"
          />
          <Inline gap="distant">
            <MarksPanel
              type="body"
              current={character.marks.body}
              name="Body"
              nameRu="Тело"
              onMarksChange={() => {}}
            />
            <MarksPanel
              type="mind"
              current={character.marks.mind}
              name="Mind"
              nameRu="Разум"
              onMarksChange={() => {}}
            />
            <MarksPanel
              type="bleed"
              current={character.marks.bleed}
              name="Bleed"
              nameRu="Скверна"
              onMarksChange={() => {}}
            />
          </Inline>
          <Button>
            Шрамы 0 / 3
          </Button>
        </Inline>
      </div>
    </div>
  )
}
export default MarksBar
