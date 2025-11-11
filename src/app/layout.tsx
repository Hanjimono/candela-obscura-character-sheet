// system
import { headers } from "next/headers"
// components
import Initializer from "@/components/Helpers/Initializer"
// constants
import { ubuntu, oranienbaum } from "@/constants/fonts"
// ui
import Foundation from "@/ui/Layout/Foundation"
import Frame from "@/ui/Layout/Frame"
// types and styles
import "./global.css"
import Inline from "@/ui/Layout/Inline"
import { SessionContainer } from "@/components/Containers/SessionContainer"
import { QueryProviderContainer } from "@/components/Containers/QueryProviderContainer"

export const metadata = {
  title: "Candela Obscura Sheets",
  description: "Character sheet manager"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/fontawesome.min.css"
          integrity="sha512-B46MVOJpI6RBsdcU307elYeStF2JKT87SsHZfRSkjVi4/iZ3912zXi45X5/CBr/GbCyLx6M1GQtTKYRd52Jxgw=="
        />
      </head>
      <body className={ubuntu.className}>
        <QueryProviderContainer headers={headersList}>
          <SessionContainer>
            <Foundation>
              <Inline className="h-full" gap="none">
                <Frame className="main-content">{children}</Frame>
              </Inline>
            </Foundation>
          </SessionContainer>
          <Initializer />
        </QueryProviderContainer>
      </body>
    </html>
  )
}
