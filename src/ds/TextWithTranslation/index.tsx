// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
import Text from "@/ui/Presentation/Text"
import Divider from "@/ui/Presentation/Divider"
// constants
import { oranienbaum } from "@/constants/fonts"
// Styles and types
import { TextWithTranslationProps } from "./types"

function TextWithTranslation({
  className,
  original,
  translated,
  importantMode = "translation",
  orientationMode = "horizontal",
  isShowDivider = false,
  size = "medium",
  isAccented,
  isLight,
  isShowColon,
  isCursive
}: TextWithTranslationProps) {
  const calculatedClassNames = formatClassnames(
    "text-with-translation",
    "flex gap-tight height-fit",
    orientationMode === "horizontal"
      ? "flex-row items-center max-h-fit"
      : "flex-col",
    isCursive && oranienbaum.className,
    className
  )
  const importantText = importantMode === "original" ? original : translated
  const secondaryText = importantMode === "original" ? translated : original
  return (
    <div className={calculatedClassNames}>
      <Text
        className={formatClassnames(
          "primary-text",
          size == "extra-large" && "text-6xl",
          size == "large" && "text-2xl",
          size == "medium" && "text-lg",
          size == "small" && "text-base",
          size == "extra-small" && "text-sm"
        )}
        isAccent={isAccented}
        isLight={isLight}
      >
        {importantText}
        {isShowColon &&
          (!secondaryText || orientationMode === "vertical") &&
          ":"}
      </Text>
      {isShowDivider && secondaryText && (
        <Divider
          className="border-gray-400 opacity-50s"
          orientation={
            orientationMode == "horizontal" ? "vertical" : "horizontal"
          }
        />
      )}
      {secondaryText && (
        <Text
          className={formatClassnames(
            "secondary-text opacity-85",
            size == "extra-large" && "text-5xl",
            orientationMode == "vertical" &&
              size == "extra-large" &&
              "text-3xl",
            size == "large" && "text-xl",
            orientationMode == "vertical" && size == "large" && "text-base",
            size == "medium" && "text-base",
            orientationMode == "vertical" && size == "medium" && "text-sm",
            orientationMode == "vertical" && "-mt-2",
            size == "small" && "text-sm",
            orientationMode == "vertical" && size == "small" && "text-xs",
            size == "extra-small" && "text-xs",
            orientationMode == "vertical" && size == "extra-small" && "text-xxs"
          )}
          isAccent={isAccented}
          isLight={isLight}
        >
          {secondaryText}
          {isShowColon && orientationMode === "horizontal" && ":"}
        </Text>
      )}
    </div>
  )
}
export default TextWithTranslation
