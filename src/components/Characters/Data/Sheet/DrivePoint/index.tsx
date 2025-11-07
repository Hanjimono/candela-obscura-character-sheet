// service
import { motion } from "framer-motion"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { DrivePointProps } from "./types"
import ContentAppearTransition from "@/ui/Skeleton/Transition/ContentAppearTransition"

function DrivePoint({
  className,
  isFilled,
  isInactive,
  isAllDrivesHovered,
  isCurrentDriveHovered,
  onMouseEnter,
  onMouseLeave,
  onClick
}: DrivePointProps) {
  const calculatedClassNames = formatClassnames(
    "drive-point h-12 w-3 border-2 border-form-border cursor-pointer opacity-90 flex items-end",
    isAllDrivesHovered && "opacity-100",
    isInactive && "border-neutral-600 bg-neutral-900 opacity-50 cursor-default",
    className
  )
  return (
    <motion.div
      className={calculatedClassNames}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      whileTap={{ scale: isInactive ? 1 : 0.95 }}
    >
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isFilled ? "100%" : 0 }}
        transition={{ type: "tween", duration: 0.4 }}
        className={formatClassnames(
          "drive-point-fill h-full w-full bg-block-500",
          isAllDrivesHovered &&
            !isCurrentDriveHovered && isFilled &&
            "bg-block-600 opacity-50",
          isCurrentDriveHovered && "bg-block-400"
        )}
      />
    </motion.div>
  )
}
export default DrivePoint
