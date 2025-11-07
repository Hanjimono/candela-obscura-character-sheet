// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { ResistancePanelProps } from "./types"
import TextWithTranslation from "@/ds/TextWithTranslation"
import Inline from "@/ui/Layout/Inline"
import ResistancePoint from "../ResistancePoint"
import Button from "@/ui/Actions/Button"

function ResistancePanel({
  className,
  current = 0,
  max = 0,
  onResistanceChange
}: ResistancePanelProps) {
  const calculatedClassNames = formatClassnames(
    "resistance-panel justify-center",
    className
  )
  return (
    <Inline className={calculatedClassNames}>
      <TextWithTranslation
        translated={`Сопротивление`}
        original={`Resistance`}
        orientationMode="vertical"
        size="small"
        isAccented
      />
      {max > 0 && (
        <Inline gap="close" className="items-center">
          <Button tool isText icon="remove" iconSize={14} onClick={() => onResistanceChange(current - 1)} />
          {Array.from({ length: max }).map((_, index) => {
            return <ResistancePoint key={index} isFilled={index < current} />
          })}
          <Button tool isText icon="add" iconSize={14} onClick={() => onResistanceChange(current + 1)} />
        </Inline>
      )}
      {max === 0 && <Inline className="items-center">- -</Inline>}
    </Inline>
  )
}
export default ResistancePanel
