export interface DrivePointProps {
  /** Additional class names */
  className?: string,
  /** Indicates if the drive point is filled */
  isFilled?: boolean
  /** Indicates if the drive point is inactive */
  isInactive?: boolean
  /** Indicates if all drives are hovered */
  isAllDrivesHovered?: boolean
  /** Indicates if the current drive is hovered */
  isCurrentDriveHovered?: boolean
  /** Optional mouse enter event handler */
  onMouseEnter?: () => void
  /** Optional mouse leave event handler */
  onMouseLeave?: () => void
  /** Optional click event handler */
  onClick?: () => void
}