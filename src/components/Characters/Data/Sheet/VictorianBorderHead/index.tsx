import SmartImage from "@/ui/Presentation/SmartImage"
import { formatClassnames } from "@/ui/Skeleton/utils"
import React from "react"

export default function VictorianBorderHead({
  className
}: {
  className?: string
}) {
  return (
    <div className={formatClassnames("flex absolute", className)}>
      <SmartImage
        className="absolute left-[3px] top-[3px]"
        src="/public/images/corner-decoration-1.png"
        alt="corner"
        height={80}
        width={80}
      />
      <SmartImage
        className="absolute right-[3px] top-[3px]"
        src="/public/images/corner-decoration-2.png"
        alt="corner"
        height={80}
        width={80}
      />
      <SmartImage
        className="absolute right-[3px] bottom-[3px]"
        src="/public/images/corner-decoration-3.png"
        alt="corner"
        height={80}
        width={80}
      />
      <SmartImage
        className="absolute left-[3px] bottom-[3px]"
        src="/public/images/corner-decoration-4.png"
        alt="corner"
        height={80}
        width={80}
      />
      <div className="absolute inset-0 border-4 border-victorian z-0" />
      <div className="absolute left-[8px] top-[81px] bottom-[81px] border-l-2 border-victorian z-0" />
      <div className="absolute right-[8px] top-[81px] bottom-[81px] border-r-2 border-victorian z-0" />
      <div className="absolute top-[8px] left-[81px] right-[81px] border-t-2 border-victorian z-0" />
      <div className="absolute bottom-[8px] left-[81px] right-[81px] border-t-2 border-victorian z-0" />
    </div>
  )
}
