import { DriveType } from "@/constants/types/character"

export interface DrivePanelProps {
  /** React children */
  children?: React.ReactNode
  /** Additional class names */
  className?: string
  /** Drive identifier */
  driveId: DriveType
  /** Current and maximum drive values */
  current: number
  /** Maximum drive value */
  max: number
  /** Base drive value */
  base?: number
  /** Title in English */
  title: string
  /** Title in Russian */
  titleRu: string
  /** Callback when a drive value changes */
  onDriveChange: (driveId: DriveType, newValue: number) => void
}
