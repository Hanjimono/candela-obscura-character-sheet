export interface MarkProps {
  /** Additional class names */
  className?: string,
  /** Mark title */
  title: string,
  /** Mark title in Russian */
  titleRu: string,
  /** Mark name for changing function */
  name: string,
  /** Number of marks */
  marks: number,
  /** Function to change marks */
  onChangeMarks: (name: string, newMarks: number) => void
}