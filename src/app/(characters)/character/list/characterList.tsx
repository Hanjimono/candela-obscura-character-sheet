"use client"
import CharactersToolbar from "@/components/Characters/Toolbar"
import WallDecorated from "@/ui/Layout/Decorators/WallDecorated"
import Stack from "@/ui/Layout/Stack"
import React from "react"

export default function CharacterListPageContent() {
  return (
    <WallDecorated>
      <Stack>
        <CharactersToolbar />
      </Stack>
    </WallDecorated>
  )
}
