"use client"
// ui
import WallDecorated from "@/ui/Layout/Decorators/WallDecorated"
import Inline from "@/ui/Layout/Inline"
import Stack from "@/ui/Layout/Stack"
import StatBlock from "./StatBlock"
import StatRoll from "./StatRoll"
import Title from "@/ui/Presentation/Title"
import { useState } from "react"
import Logo from "@/components/Logo"
import SmartImage from "@/ui/Presentation/SmartImage"
import Divider from "@/ui/Presentation/Divider"
import Ability from "./Ability"
import AdditionalInfo from "./AdditionalInfo"
import {
  postFormData,
  useFetchAndStoreData,
  usePostFormDataHelpers
} from "@/services/fetcher/fetcher"
import Loader from "@/ui/Presentation/Loader"
import { CharacterData, DriveType } from "@/constants/types/character"
import { useSession } from "next-auth/react"

const BASE_DRIVES = {
  nerve: {
    max: 0,
    current: 0
  },
  cunning: {
    max: 6,
    current: 6
  },
  intuition: {
    max: 3,
    current: 3
  }
}

const BASE_DRIVES_RESISTANCE = {
  nerve: 0,
  cunning: 2,
  intuition: 1
}

const BASE_STATS = {
  move: 1,
  strike: 0,
  control: 0,
  sway: 2,
  read: 1,
  hide: 2,
  survey: 0,
  focus: 2,
  sense: 1
}

const BASE_SPECIALIZATIONS = {
  move: 0,
  strike: 0,
  control: 0,
  sway: 2,
  read: 1,
  hide: 1,
  survey: 0,
  focus: 1,
  sense: 0
}

const STAT_GILDED = {
  move: false,
  strike: false,
  control: false,
  sway: true,
  read: false,
  hide: false,
  survey: false,
  focus: false,
  sense: true
}

const ABILITIES = [
  {
    title: "Cool Under Pressure",
    titleRu: "Хладнокровие под давлением",
    description:
      "On any high-stakes roll, you may always spend Cunning instead of the drive the action falls under.",
    descriptionRu:
      "В любой проверке с высокими ставками вы всегда можете потратить Хитрость (Cunning) вместо того, чтобы потратить импульс, которому соответствует проверка."
  },
  {
    title: "The Prestige (Short-Range Teleport)",
    titleRu: "Престиж (Телепорт на короткие дистанции)",
    description:
      "Your magic is usually all smoke and mirrors, but you have one trick you’ve learned that’s real. Roll Sense when you perform it, and on a success, take a Bleed mark.",
    descriptionRu:
      "Ваша магия обычно состоит из дыма и зеркал, но у вас есть один трюк, который вы выучили и который является настоящим. Сделайте проверку Чувств (Sense), когда вы выполняете его, и при успехе получите метку Скверны."
  }
]

export default function CharacterSheet() {
  const session = useSession()
  const [character, isLoading, fetchData] =
    useFetchAndStoreData<CharacterData>("/api/character/get")
  const [errorSnack, successSnack] = usePostFormDataHelpers()
  const [drives, setDrives] = useState(BASE_DRIVES)
  const [resistances, setResistances] = useState(BASE_DRIVES_RESISTANCE)
  const handleChangeDrives = async (name: string, newDrives: number) => {
    const driveName = name as DriveType
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
    name: string,
    newResistance: number
  ) => {
    if (!character) return
    const newCharacter = { ...character }
    const resistanceName = name as DriveType
    const maxResistance = Math.floor(character.drives[resistanceName].max / 3)
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
  if (!character) {
    return <Loader size={"xl"} />
  }
  return (
    <WallDecorated>
      <Stack gap="distant">
        <Inline className="name-block">
          <SmartImage
            src="/public/images/logo_small.png"
            alt="Candela Obscura"
            width={50}
            height={50}
            priority
          />
          <Stack gap="none">
            <Title size={3}>
              {character.nameRu} | {character.classRu}
            </Title>
            <Title className="-mt-1.5" size={6}>
              {character.name} | {character.class}
            </Title>
          </Stack>
        </Inline>
        <Divider />
        <Stack className="items-center">
          <Title size={2}>Действия/Actions</Title>
          <Inline className="stats-container" gap="distant">
            <StatBlock
              name="nerve"
              title="Nerve"
              titleRu="Мужество"
              drives={character.drives.nerve.current}
              maxDrives={character.drives.nerve.max}
              onChangeDrives={handleChangeDrives}
              onChangeResistance={handleChangeResistance}
              currentResistance={character.resistances.nerve}
            >
              <StatRoll
                title="Move"
                titleRu="Движение"
                statRollCount={character.actions.move.current}
                specializationRollCount={character.actions.move.base}
                isGilded={character.actions.move.isGilded}
                actions={["Бегать", "Уклоняться", "Парировать"]}
              />
              <StatRoll
                title="Strike"
                titleRu="Атака"
                statRollCount={character.actions.strike.current}
                specializationRollCount={character.actions.strike.base}
                isGilded={character.actions.strike.isGilded}
                actions={["Бить", "Ломать", "Ронять"]}
              />
              <StatRoll
                title="Control"
                titleRu="Управление"
                statRollCount={character.actions.control.current}
                specializationRollCount={character.actions.control.base}
                isGilded={character.actions.control.isGilded}
                actions={["Водить", "Стрелять", "Маневрировать"]}
              />
            </StatBlock>
            <StatBlock
              name="cunning"
              title="Cunning"
              titleRu="Хитрость"
              drives={character.drives.cunning.current}
              maxDrives={character.drives.cunning.max}
              onChangeDrives={handleChangeDrives}
              onChangeResistance={handleChangeResistance}
              currentResistance={character.resistances.cunning}
            >
              <StatRoll
                title="Sway"
                titleRu="Влияние"
                statRollCount={character.actions.sway.current}
                specializationRollCount={character.actions.sway.base}
                isGilded={character.actions.sway.isGilded}
                actions={["Убеждать", "Приказывать", "Общаться"]}
              />
              <StatRoll
                title="Read"
                titleRu="Чтение"
                statRollCount={character.actions.read.current}
                specializationRollCount={character.actions.read.base}
                isGilded={character.actions.read.isGilded}
                actions={[
                  "Понимать язык тела",
                  "Видеть ложь",
                  "Понимать мотивы"
                ]}
              />
              <StatRoll
                title="Hide"
                titleRu="Скрытность"
                statRollCount={character.actions.hide.current}
                specializationRollCount={character.actions.hide.base}
                isGilded={character.actions.hide.isGilded}
                actions={["Прятаться", "Отвлекать", "Проявлять ловкость"]}
              />
            </StatBlock>
            <StatBlock
              name="intuition"
              title="Intuition"
              titleRu="Интуиция"
              drives={character.drives.intuition.current}
              maxDrives={character.drives.intuition.max}
              onChangeDrives={handleChangeDrives}
              onChangeResistance={handleChangeResistance}
              currentResistance={character.resistances.intuition}
            >
              <StatRoll
                title="Survey"
                titleRu="Исследование"
                statRollCount={character.actions.survey.current}
                specializationRollCount={character.actions.survey.base}
                isGilded={character.actions.survey.isGilded}
                actions={["Искать", "Выслеживать", "Замечать"]}
              />
              <StatRoll
                title="Focus"
                titleRu="Сосредоточение"
                statRollCount={character.actions.focus.current}
                specializationRollCount={character.actions.focus.base}
                isGilded={character.actions.focus.isGilded}
                actions={["Изучать", "Анализировать", "Запоминать"]}
              />
              <StatRoll
                title="Sense"
                titleRu="Чувства"
                statRollCount={character.actions.sense.current}
                specializationRollCount={character.actions.sense.base}
                isGilded={character.actions.sense.isGilded}
                actions={["Настроиться", "Провести", "Разоблачать"]}
              />
            </StatBlock>
          </Inline>
        </Stack>
        <Inline>
          <Stack className="flex-1 items-center">
            <Title size={2}>Способности/Abilities</Title>
            {!!character.abilities &&
              character.abilities.map((ability, idx) => (
                <Ability key={idx} {...ability} />
              ))}
          </Stack>
          <Stack className="flex-1">
            <AdditionalInfo />
          </Stack>
        </Inline>
      </Stack>
    </WallDecorated>
  )
}
