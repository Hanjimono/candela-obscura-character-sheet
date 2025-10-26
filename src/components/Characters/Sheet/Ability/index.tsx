// service
import { useState } from "react"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
import Brick from "@/ui/Layout/Brick"
import Stack from "@/ui/Layout/Stack"
import Title from "@/ui/Presentation/Title"
import Text from "@/ui/Presentation/Text"
// Styles and types
import { AbilityProps } from "./types"
import Button from "@/ui/Actions/Button"

function Ability({
  className,
  name,
  nameRu,
  description,
  descriptionRu
}: AbilityProps) {
  const [isShowOriginal, setShowOriginal] = useState(false)
  const calculatedClassNames = formatClassnames(
    "bg-neutral-800 p-4 rounded-2xl w-full",
    className
  )
  return (
    <Brick className={calculatedClassNames}>
      <Stack gap="close">
        <Stack gap="none" className="mb-2">
          <Title size={3} isAccent>
            {nameRu}
          </Title>
          <Text className="-mt-1.5 italic opacity-70">{name}</Text>
        </Stack>
        <Text type="paragraph">{descriptionRu}</Text>
        <Stack gap="close">
          <Button
            icon={isShowOriginal ? "arrow_drop_up" : "arrow_drop_down"}
            isText
            isNoPadding
            onClick={() => setShowOriginal(!isShowOriginal)}
          >
            Показать оригинальное описание
          </Button>
          {isShowOriginal && (
            <div className="border border-neutral-600 border-dashed p-2 rounded-md text-neutral-600">
              {description}
            </div>
          )}
        </Stack>
      </Stack>
    </Brick>
  )
}
export default Ability
