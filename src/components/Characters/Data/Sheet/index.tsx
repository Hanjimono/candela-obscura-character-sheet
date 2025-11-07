"use client"
import {
  postFormData,
  useFetchAndStoreData,
  usePostFormDataHelpers
} from "@/services/fetcher/fetcher"
import Stack from "@/ui/Layout/Stack"
import Loader from "@/ui/Presentation/Loader"
import React from "react"
import CharacterSheetToolbar from "./Toolbar"
import { CharacterData, DriveType } from "@/constants/types/character"
import DrivesBar from "./DrivesBar"
import { useSession } from "next-auth/react"
import SmartImage from "@/ui/Presentation/SmartImage"
import VictorianBorderHead from "./VictorianBorderHead"
import MarksBar from "./MarksBar"

export default function CharacterSheet() {
  const [character, isLoading, fetchData] =
    useFetchAndStoreData<CharacterData>("/api/character/get")
  const session = useSession()

  const [errorSnack, successSnack] = usePostFormDataHelpers()

  const handleChangeDrives = async (
    driveName: DriveType,
    newDrives: number
  ) => {
    if (!character) return
    const newCharacter = { ...character }
    if (newDrives === 1 && character.drives[driveName].current === 1)
      newDrives = 0
    if (character.drives[driveName].max >= newDrives) {
      newCharacter.drives[driveName].current = newDrives
      const saveResult = await postFormData(
        `/api/character/change`,
        { user: session && session.data ? session.data.user?.email : null },
        newCharacter,
        () => {},
        errorSnack,
        undefined
      )
      await fetchData()
    }
  }
  const handleChangeResistance = async (
    resistanceName: DriveType,
    newResistance: number
  ) => {
    if (!character) return
    const newCharacter = { ...character }
    const maxResistance = Math.trunc(character.drives[resistanceName].max / 3)
    if (newResistance === 1 && character.resistances[resistanceName] === 1)
      newResistance = 0
    if (maxResistance >= newResistance) {
      newCharacter.resistances[resistanceName] = newResistance
      const saveResult = await postFormData(
        `/api/character/change`,
        { user: session && session.data ? session.data.user?.email : null },
        newCharacter,
        () => {},
        errorSnack,
        undefined
      )
      await fetchData()
    }
  }
  if (!character && isLoading) {
    return <Loader size={"xl"} />
  }
  if (!character) {
    return <div>No character data available.</div>
  }
  return (
    <Stack>
      <Stack className="relative" gap="none">
        <Stack className="z-20" gap="none">
          <CharacterSheetToolbar character={character} />
          <DrivesBar
            character={character}
            onDriveChange={handleChangeDrives}
            onResistanceChange={handleChangeResistance}
          />
          <MarksBar character={character} />
        </Stack>
        <VictorianBorderHead className="top-16 bottom-12 -left-4 -right-4 z-10 opacity-80" />
      </Stack>
    </Stack>
  )
}
