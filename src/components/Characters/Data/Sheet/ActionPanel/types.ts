export interface ActionPanelProps {
  /** Additional class names */
  className?: string,
  /** Title of the action in panel */
  title: string,
  /** Title of the action in panel (Russian) */
  titleRu: string,
  /** Current value */
  current?: number,
  /** Base value */
  base?: number,
  /** Whether the action is gilded */
  isGilded?: boolean
  /** List of example actions for this action slot */
  examples?: string[]
}