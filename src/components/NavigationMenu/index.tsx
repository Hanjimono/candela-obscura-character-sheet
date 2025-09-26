"use client"
// ui
import Menu from "@/ui/Navigation/Menu"
import Beam from "@/ui/Layout/Beam"
import Stack from "@/ui/Layout/Stack"

const MENU = [
  {
    title: "Presentation",
    items: [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "Text",
        link: "/text"
      }
    ]
  },
  {
    title: "Actions",
    items: [
      {
        title: "Button",
        link: "/button"
      }
    ]
  }
]

// component with main navigation menu on the left side of every page
function NavigationMenu() {
  return (
    <Stack className="w-48 h-full">
      <Menu className="w-full h-full" items={MENU} />
    </Stack>
  )
}
export default NavigationMenu
