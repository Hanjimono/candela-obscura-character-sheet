import { CharacterData } from "@/constants/types/character";

export interface CharacterSheetToolbarProps {
  /** Additional class names */
  className?: string,
  /** Main info of current character */
  character: CharacterData
}