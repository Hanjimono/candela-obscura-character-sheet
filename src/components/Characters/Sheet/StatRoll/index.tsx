// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
import Stack from "@/ui/Layout/Stack"
// Styles and types
import { StatRollProps } from "./types"
import Inline from "@/ui/Layout/Inline"
import Spacer from "@/ui/Layout/Spacer"
import Title from "@/ui/Presentation/Title"
import Text from "@/ui/Presentation/Text"

function StatRoll({
  className,
  title,
  titleRu,
  actions,
  isGilded,
  specializationRollCount = 0,
  statRollCount = 0
}: StatRollProps) {
  const calculatedClassNames = formatClassnames(
    "stat-roll p-2",
    isGilded && "bg-yellow-600/10 border border-yellow-600 rounded-lg",
    className
  )
  return (
    <Stack gap="close" className={calculatedClassNames}>
      <Inline className="items-center">
        <Stack gap="none">
          <Text className="font-bold">{titleRu}</Text>
          <Text className="text-xs -mt-1 opacity-80 italic">{title}</Text>
        </Stack>
        <Inline gap="tight" className="ml-auto">
          {actions?.map((action) => (
            <span className="italic text-xs text-[10px]" key={action}>
              {action}
            </span>
          ))}
        </Inline>
      </Inline>
      <Inline className="group" gap="same-level">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={formatClassnames(
              "w-4 h-4 border-stone-700 bg-transparent border-2 rounded-full",
              i <= specializationRollCount - 1 && "border-4",
              i <= statRollCount - 1 && "bg-stone-500"
            )}
          />
        ))}
      </Inline>
    </Stack>
  )
}

export default StatRoll
