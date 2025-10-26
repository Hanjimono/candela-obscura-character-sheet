export interface StatRollProps {
  /** Additional class names */
  className?: string,
  /** Title of the stat roll that will be displayed */
  title: string
  /** Title of the stat roll in Russian for localization purposes */
  titleRu: string
  /** Count of dice given by the specialization */
  specializationRollCount?: number
  /** Count of dice given by the stat */
  statRollCount?: number
  /** List of possible actions that can be performed with this roll */
  actions?: string[]
  /** Whether the stat roll is gilded, affecting its appearance */
  isGilded?: boolean
}