// System
import Image from "next/image"
// Ui
import Title from "@/ui/Presentation/Title"
import Beam from "@/ui/Layout/Beam"
import SmartImage from "@/ui/Presentation/SmartImage"

export default function Logo({ className }: { className?: string }) {
  return (
    <SmartImage src="/public/images/candela_obscura_logo_full.png" alt="Candela Obscura" width={899} height={246} priority />
  )
}
