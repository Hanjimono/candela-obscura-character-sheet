// system
import { motion } from "framer-motion"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { ResistancePointProps } from "./types"

function ResistancePoint({ className, isFilled }: ResistancePointProps) {
  const calculatedClassNames = formatClassnames(
    "resistance-point w-5 h-5 bg-form-border relative",
    !isFilled && "opacity-80 bg-neutral-600",
    className
  )
  return (
    <motion.div
      initial={{ clipPath: "polygon(50% 0, 0 0, 100% 0)" }}
      animate={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
      className={calculatedClassNames}
    >
      <motion.div
        initial={{ clipPath: "polygon(50% 0, 0 0, 100% 0)" }}
        animate={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }}
        className={formatClassnames("absolute top-0.5 bottom-1 left-1 right-1 bg-block-200",
          !isFilled && "bg-neutral-900"
        )}
      ></motion.div>
    </motion.div>
  )
}
export default ResistancePoint
