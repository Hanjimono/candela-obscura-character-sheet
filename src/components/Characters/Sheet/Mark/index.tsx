// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { MarkProps } from "./types"
import Stack from "@/ui/Layout/Stack"
import Inline from "@/ui/Layout/Inline"
import { useState } from "react"
import Text from "@/ui/Presentation/Text"

function Mark({ className, marks, title, titleRu, name, onChangeMarks }: MarkProps) {
  const calculatedClassNames = formatClassnames("Mark", className)
  const [markHoverCount, setMarkHoverCount] = useState(0)
  const maxMarks = 3
  return (
    <Stack gap="tight" className={calculatedClassNames}>
      <Inline className="group" gap="close">
        {[...Array(3)].map((_, i) => (
          <div
            key={i + 1}
            onMouseEnter={() => setMarkHoverCount(i + 1)}
            onMouseLeave={() => setMarkHoverCount(0)}
            onClick={() => onChangeMarks(name, i + 1)}
            className={formatClassnames(
              "w-4 h-12 border border-stone-500 cursor-pointer",
              i <= marks - 1 && markHoverCount == 0
                ? "bg-red-900"
                : "bg-transparent",
              i <= maxMarks - 1 &&
                i < markHoverCount &&
                "bg-red-800 border-stone-300",
              i > maxMarks - 1 && "opacity-50 cursor-not-allowed"
            )}
          ></div>
        ))}
      </Inline>
      <Stack gap="none">
        <Text className="text-[14px] mx-auto">{titleRu}</Text>
        <Text className="opacity-50 text-[12px] -mt-1 mx-auto">{title}</Text>
      </Stack>
    </Stack>
  )
}
export default Mark
