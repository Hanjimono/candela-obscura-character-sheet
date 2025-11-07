// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { MarksPanelProps } from "./types"
import Inline from "@/ui/Layout/Inline"
import TextWithTranslation from "@/ds/TextWithTranslation"
import MarkPoint from "../MarkPoint"
import Button from "@/ui/Actions/Button"

function MarksPanel({
  className,
  type,
  current = 0,
  name,
  nameRu,
  onMarksChange
}: MarksPanelProps) {
  const calculatedClassNames = formatClassnames(
    "marks-panel items-end",
    className
  )
  return (
    <Inline className={calculatedClassNames} gap="close">
      <TextWithTranslation
        original={name}
        translated={nameRu}
        orientationMode="vertical"
        isAccented
        size="small"
      />
      <Inline className="items-center" gap="tight">
        <Button
          icon="remove"
          tool
          isNoPadding
          isText
          iconSize={16}
          disabled={current <= 0}
        />
        {[...Array(3)].map((_, index) => {
          return <MarkPoint key={index} isFilled={index < current} />
        })}
        <Button
          icon="add"
          tool
          isNoPadding
          isText
          iconSize={16}
          disabled={current >= 3}
        />
      </Inline>
    </Inline>
  )
}
export default MarksPanel
