// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
// Styles and types
import { CharacterAvatarProps } from "./types"
import SmartImage from "@/ui/Presentation/SmartImage"

function CharacterAvatar({ className, avatarUrl }: CharacterAvatarProps) {
  const calculatedClassNames = formatClassnames(
    "character-avatar relative rounded-full shadow-lg p-2",
    className
  )
  return (
    <div className={calculatedClassNames}>
        <div className="border-4 border-dashed border-accent animate-spin absolute inset-0 rounded-full"></div>
      <div className="rounded-full overflow-hidden border-accent">
        <SmartImage src={avatarUrl} alt="avatar" height={100} width={100} />
      </div>
    </div>
  )
}
export default CharacterAvatar
