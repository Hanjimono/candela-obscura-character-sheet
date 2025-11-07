import { motion } from "framer-motion"
// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { MarkPointProps } from "./types"

function MarkPoint({ className, isFilled }: MarkPointProps) {
  const calculatedClassNames = formatClassnames(
    "mark-point border-neutral-700 border-1 bg-neutral-800 w-3 h-14 flex items-end",
    isFilled && "border-rose-700",
    className
  )
  return (
    <motion.div className={calculatedClassNames}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isFilled ? "100%" : 0 }}
        transition={{ type: "tween", duration: 0.4 }}
        className={formatClassnames(
          "mark-point-fill h-full w-full bg-rose-800"
        )}
      />
    </motion.div>
  )
}
export default MarkPoint
