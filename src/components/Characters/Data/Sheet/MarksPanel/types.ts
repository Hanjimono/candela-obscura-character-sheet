import { MarkType } from "@/constants/types/character"

export interface MarksPanelProps {
  /** Additional class names */
  className?: string
  /** Name of the mark */
  name: string
  /** Name of the mark in Russian */
  nameRu: string
  /** Type of mark */
  type: MarkType
  /** Current marks value */
  current?: number
  /** Handler for marks change */
  onMarksChange?: (type: MarkType, newMarks: number) => void
}
