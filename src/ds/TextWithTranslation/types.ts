export type ImportantMode = "original" | "translation"

export type OrientationMode = "horizontal" | "vertical"

export type Size = "extra-small" | "small" | "medium" | "large" | "extra-large"

export interface TextWithTranslationProps {
  /** Additional class names */
  className?: string
  /** Original text */
  original?: string
  /** Translated text */
  translated?: string
  /** Which text to emphasize */
  importantMode?: ImportantMode
  /** Text orientation */
  orientationMode?: OrientationMode
  /** Text size */
  size?: Size
  /** Whether the text is accented */
  isAccented?: boolean
  /** Whether the text is in light theme */
  isLight?: boolean
  /** Whether to show a divider between texts */
  isShowDivider?: boolean
  /** Whether to show a colon after the important text */
  isShowColon?: boolean
  /** Whether to use a cursive font style */
  isCursive?: boolean
}
