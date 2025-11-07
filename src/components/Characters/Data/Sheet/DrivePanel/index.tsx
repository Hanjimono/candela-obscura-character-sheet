// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { DrivePanelProps } from "./types"
import Stack from "@/ui/Layout/Stack"
import Inline from "@/ui/Layout/Inline"
import TextWithTranslation from "@/ds/TextWithTranslation"
import Spacer from "@/ui/Layout/Spacer"
import DrivePoint from "../DrivePoint"
import { useState } from "react"
import Button from "@/ui/Actions/Button"

function DrivePanel({
  children,
  className,
  title,
  titleRu,
  current,
  driveId,
  max,
  base,
  onDriveChange
}: DrivePanelProps) {
  const calculatedClassNames = formatClassnames(
    "drive-panel overflow-hidden flex-1",
    className
  )
  const [drivesHovered, setDrivesHovered] = useState(false)
  const [drivesHoveredCount, setDrivesHoveredCount] = useState(0)
  return (
    <Stack gap="none" className={calculatedClassNames}>
      <Inline
        className="drive-panel-header bg-neutral-950 p-3 justify-between"
        gap="none"
      >
        <TextWithTranslation
          translated={titleRu}
          original={title}
          orientationMode="vertical"
          size="large"
          isLight
        />
        <Inline className="items-center" gap="tight">
          <TextWithTranslation
            className="mt-4"
            translated={"Импульс"}
            original={max > 0 ? `Drive ${current}/${max}` : "Drive"}
            size="extra-small"
            orientationMode="vertical"
            isAccented
          />
          <Inline gap="tight">
            <Button
              icon="remove"
              tool
              isNoPadding
              isText
              iconSize={16}
              disabled={current === 0}
              onClick={() => onDriveChange(driveId, current - 1)}
            />
            <div className="flex gap-tight">
              {[...Array(9)].map((_, i) => (
                <DrivePoint
                  className={i % 3 === 2 && i < 8 ? "mr-2" : ""}
                  key={i + 1}
                  isFilled={i + 1 <= current}
                  isInactive={i + 1 > max}
                  isAllDrivesHovered={
                    drivesHovered && drivesHoveredCount <= max
                  }
                  isCurrentDriveHovered={
                    drivesHovered &&
                    drivesHoveredCount >= i + 1 &&
                    drivesHoveredCount <= max
                  }
                  onMouseEnter={() => {
                    setDrivesHoveredCount(i + 1)
                    setDrivesHovered(true)
                  }}
                  onMouseLeave={() => {
                    setDrivesHoveredCount(0)
                    setDrivesHovered(false)
                  }}
                  onClick={() => {
                    onDriveChange(driveId, i + 1)
                  }}
                />
              ))}
            </div>
            <Button
              icon="add"
              tool
              isNoPadding
              isText
              iconSize={16}
              disabled={current >= max}
              onClick={() => onDriveChange(driveId, current + 1)}
            />
          </Inline>
        </Inline>
      </Inline>
      <Stack className="actions-wrapper bg-neutral-900 shadow-inset-action py-2 px-2 flex-1" gap="close">{children}</Stack>
    </Stack>
  )
}
export default DrivePanel
