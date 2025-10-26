// ui
import Brick from "@/ui/Layout/Brick"
import Inline from "@/ui/Layout/Inline"
import Stack from "@/ui/Layout/Stack"
import TabPanel from "@/ui/Navigation/TabPanel"
import Title from "@/ui/Presentation/Title"
import { formatClassnames } from "@/ui/Skeleton/utils"
import { useState } from "react"
import Mark from "../Mark"

const MARKS = {
  body: 0,
  mind: 0,
  bleed: 0
}

function AdditionalInfo() {
  const calculatedClassNames = formatClassnames(
    "additional-info justify-center items-center w-full"
  )
  const [activeTab, setActiveTab] = useState(0)
  const [marks, setMarks] = useState(MARKS)
  const handleChangeMarks = (name: string, newMarks: number) => {
    const markName = name as keyof typeof MARKS
    if (newMarks === 1 && marks[markName] === 1) newMarks = 0
    setMarks((prev) => ({
      ...prev,
      [markName]: newMarks
    }))
  }
  return (
    <Stack className={calculatedClassNames}>
      <Title size={2}>Метки/Marks</Title>
      <Brick className="bg-neutral-800 flex-1 w-full">
        <TabPanel
          activeTabIdx={activeTab}
          onTabChange={setActiveTab}
          tabsList={["Метки", "Ключи", "Контакты", "Инвентарь"]}
          isNoBorder
          isNoButtonBorder
          isTransparent
        />
        <Inline className="justify-center items-center pt-4 px-8">
          <Mark
            title="Body"
            titleRu="Тело"
            marks={marks.body}
            name="body"
            onChangeMarks={handleChangeMarks}
          />
          <Mark
            title="Mind"
            titleRu="Разум"
            marks={marks.mind}
            name="mind"
            onChangeMarks={handleChangeMarks}
          />
          <Mark
            title="Bleed"
            titleRu="Скверна"
            marks={marks.bleed}
            name="bleed"
            onChangeMarks={handleChangeMarks}
          />
        </Inline>
      </Brick>
    </Stack>
  )
}
export default AdditionalInfo
