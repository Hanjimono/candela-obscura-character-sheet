// system
import { motion } from "framer-motion"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { ActionPanelProps } from "./types"
import TextWithTranslation from "@/ds/TextWithTranslation"
import Inline from "@/ui/Layout/Inline"
import Stack from "@/ui/Layout/Stack"
import Text from "@/ui/Presentation/Text"

function ActionPanel({
  className,
  title,
  titleRu,
  base = 0,
  current = 0,
  isGilded,
  examples
}: ActionPanelProps) {
  const calculatedClassNames = formatClassnames(
    "action-panel justify-between items-center px-3 py-2 bg-neutral-400/5 rounded-lg",
    isGilded &&
      "bg-gradient-to-r from-yellow-700/30 via-yellow-400/30 to-yellow-700/30 shadow-lg",
    className
  )
  return (
    <Inline className={calculatedClassNames}>
      <TextWithTranslation
        translated={titleRu}
        original={title}
        orientationMode="vertical"
        size="medium"
        isLight={isGilded}
      />
      <Stack gap="tight" className="items-end">
        <Inline>
          {[...Array(3)].map((_, i) => (
            <motion.div
              className={formatClassnames(
                "action-roll-container w-4 h-4 rounded-full bg-block-900 border-2 border-neutral-800",
                base >= i + 1 && "border-3",
                current >= i + 1 && "bg-block-300 border-form-border"
              )}
              key={i}
            />
          ))}
        </Inline>
        <Inline className="examples">
          <Text clip type="fit-line" className="text-xs text-neutral-500 italic cursor-default">
            {examples && examples.length > 0
              ? examples.join(", ")
              : "No example actions"}
          </Text>
        </Inline>
      </Stack>
    </Inline>
  )
}
export default ActionPanel
