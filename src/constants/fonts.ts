import { Open_Sans, Roboto, Oranienbaum, Ubuntu } from "next/font/google"

export const openSans = Open_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
})

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"]
})

export const oranienbaum = Oranienbaum({
  subsets: ["latin", "cyrillic"],
  weight: ["400"]
})

export const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"]
})