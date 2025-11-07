import { CharacterData, DriveType } from "@/constants/types/character";

export interface DrivesBarProps {
  /** Additional class names */
  className?: string,
  /** Character data */
  character: CharacterData
  /** Callback when a drive value changes */
  onDriveChange: (driveId: DriveType, newValue: number) => void
  /** Callback when a drive resistance value changes */
  onResistanceChange: (driveId: DriveType, newValue: number) => void
}