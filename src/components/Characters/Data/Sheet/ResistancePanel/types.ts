export interface ResistancePanelProps {
  /** Additional class names */
  className?: string,
  /** Current resistance value */
  current?: number,
  /** Maximum resistance value */
  max?: number,
  /** Callback when a drive resistance value changes */
  onResistanceChange: (newValue: number) => void
}