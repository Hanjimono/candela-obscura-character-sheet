import { CharacterData } from "@/constants/types/character";

export interface MarksBarProps {
  /** Additional class names */
  className?: string,
  /** Character data */
  character: CharacterData
  /** Handler for marks change */
  onMarksChange?: (newMarks: number) => void
  /** Handler for scars change */
  onScarsChange?: (newScars: number) => void
}