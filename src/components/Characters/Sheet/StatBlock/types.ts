export interface StatBlockProps {
  /** React children */
  children?: React.ReactNode
  /** Additional class names */
  className?: string,
  /** Title of the stat block that will be displayed */
  title: string
  /** Title of the stat block in Russian for localization purposes */
  titleRu: string
  /** Text name of the stat block for changing functionality */
  name: string
  /** Numbers of drives currently available */
  drives?: number
  /** Maximum number of drives */
  maxDrives?: number
  /** Callback function that is called when the number of drives changes */
  onChangeDrives?: (name: string, newDrives: number) => void
  /** Callback function that is called when the resistance changes */
  onChangeResistance?: (name: string, newResistance: number) => void
  /** Current resistance value, if applicable */
  currentResistance?: number
}