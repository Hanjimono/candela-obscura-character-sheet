// system
import { useState } from "react"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
import Stack from "@/ui/Layout/Stack"
import Inline from "@/ui/Layout/Inline"
import Title from "@/ui/Presentation/Title"
import Text from "@/ui/Presentation/Text"
import Spacer from "@/ui/Layout/Spacer"
// Styles and types
import { StatBlockProps } from "./types"

function StatBlock({
  children,
  className,
  title,
  titleRu,
  drives = 0,
  maxDrives = 0,
  onChangeDrives = () => {},
  onChangeResistance = () => {},
  name,
  currentResistance = 0
}: StatBlockProps) {
  const calculatedClassNames = formatClassnames(
    "stat-block w-102 rounded-2xl overflow-hidden bg-neutral-800 relative",
    className
  )
  const [driveHoverCount, setDriveHoverCount] = useState(0)
  const [resistanceHoverCount, setResistanceHoverCount] = useState(0)
  const maxResistance = Math.floor(maxDrives / 3)
  return (
    <Stack className={calculatedClassNames} gap="none">
      <Inline className="bg-neutral-900 py-2 px-4">
        <Stack gap="none">
          <Title className="" isLight size={3}>
            {titleRu}
          </Title>
          <Text className="-mt-1.5 opacity-90">{title}</Text>
        </Stack>
        <Stack className="items-center absolute top-8 left-38">
          <Inline className="mb-2 items-center relative" gap="close">
            {[...Array(3)].map((_, i) => (
              <div
                key={i + 1}
                className={formatClassnames(
                  "z-20 inline-block w-0 h-0 border-solid border-t-[13.3px] border-r-[7px] border-l-[7px] border-b-0 border-l-transparent border-r-transparent border-t-neutral-100 border-b-transparent cursor-pointer backdrop-blur-sm",
                  i <= currentResistance - 1
                    ? "border-t-yellow-800"
                    : "border-t-neutral-600",
                  i < resistanceHoverCount && "border-t-yellow-600",
                  i > maxResistance - 1 &&
                    "cursor-not-allowed border-t-neutral-700/50"
                )}
                onMouseEnter={() => setResistanceHoverCount(i + 1)}
                onMouseLeave={() => setResistanceHoverCount(0)}
                onClick={() => onChangeResistance(name, i + 1)}
              />
            ))}
            <div className="left-2 right-2 border-t border-t-neutral-600/50 absolute z-10" />
          </Inline>
          <Text className="opacity-50 text-sm -mt-6 text-[10px]">
            сопротивление
          </Text>
        </Stack>
        <Spacer />
        <Inline gap="tight">
          <Stack className="items-end justify-end" gap="none">
            <Text className="opacity-50 text-[10px] -mb-1">импульс</Text>
            <Text className="opacity-50 text-[8px] mb-0.5">max</Text>
          </Stack>
          <Stack gap="tight">
            <Inline className="group" gap="tight">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i + 1}
                  onMouseEnter={() => setDriveHoverCount(i + 1)}
                  onMouseLeave={() => setDriveHoverCount(0)}
                  onClick={() => onChangeDrives(name, i + 1)}
                  className={formatClassnames(
                    "w-2 h-8 border border-stone-500 cursor-pointer",
                    i % 3 === 2 && i < 8 ? "mr-2" : "",
                    i <= drives - 1 && driveHoverCount == 0
                      ? "bg-stone-500"
                      : "bg-transparent",
                    i <= maxDrives - 1 &&
                      i < driveHoverCount &&
                      "bg-stone-700 border-stone-700",
                    i > maxDrives - 1 && "opacity-50 cursor-not-allowed"
                  )}
                ></div>
              ))}
            </Inline>
            <Inline gap="tight">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i + 1}
                  className={formatClassnames(
                    "w-2 h-2 border border-stone-500",
                    i % 3 === 2 && i < 8 ? "mr-2" : "",
                    i <= maxDrives - 1
                      ? "bg-stone-500"
                      : "bg-transparent opacity-50"
                  )}
                ></div>
              ))}
            </Inline>
          </Stack>
        </Inline>
      </Inline>
      <Stack
        gap="close"
        className={formatClassnames("stats-content-container pt-2 pb-6 px-2")}
      >
        {children}
      </Stack>
    </Stack>
  )
}
export default StatBlock
