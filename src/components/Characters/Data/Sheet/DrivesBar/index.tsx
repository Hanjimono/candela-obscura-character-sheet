// ui
import { formatClassnames } from "@/ui/Skeleton/utils"
import Inline from "@/ui/Layout/Inline"
// Styles and types
import { DrivesBarProps } from "./types"
import DrivePanel from "../DrivePanel"
import ActionPanel from "../ActionPanel"
import ResistancePanel from "../ResistancePanel"

function DrivesBar({
  className,
  character,
  onDriveChange,
  onResistanceChange
}: DrivesBarProps) {
  const calculatedClassNames = formatClassnames("drives-bar", className)
  const nerveMaxResistance = Math.trunc(character.drives.nerve.max / 3)
  const cunningMaxResistance = Math.trunc(character.drives.cunning.max / 3)
  const intuitionMaxResistance = Math.trunc(character.drives.intuition.max / 3)
  return (
    <Inline className={calculatedClassNames}>
      <DrivePanel
        className="rounded-tl-4xl rounded-bl-4xl"
        driveId="nerve"
        current={character.drives.nerve.current}
        max={character.drives.nerve.max}
        base={character.drives.nerve.base}
        title={"Nerve"}
        titleRu={"Мужество"}
        onDriveChange={onDriveChange}
      >
        <ActionPanel
          title={"Move"}
          titleRu={"Движение"}
          current={character.actions.move.current}
          base={character.actions.move.base}
          isGilded={character.actions.move.isGilded}
          examples={["Бегать", "Уклоняться", "Парировать"]}
        />
        <ActionPanel
          title={"Strike"}
          titleRu={"Атака"}
          current={character.actions.strike.current}
          base={character.actions.strike.base}
          isGilded={character.actions.strike.isGilded}
          examples={["Бить", "Ломать", "Ронять"]}
        />
        <ActionPanel
          title={"Control"}
          titleRu={"Управление"}
          current={character.actions.control.current}
          base={character.actions.control.base}
          isGilded={character.actions.control.isGilded}
          examples={["Водить", "Стрелять", "Маневрировать"]}
        />
        <ResistancePanel
          current={character.resistances.nerve}
          max={nerveMaxResistance}
          onResistanceChange={(newValue) =>
            onResistanceChange("nerve", newValue)
          }
        />
      </DrivePanel>
      <DrivePanel
        driveId="cunning"
        current={character.drives.cunning.current}
        max={character.drives.cunning.max}
        base={character.drives.cunning.base}
        title={"Cunning"}
        titleRu={"Хитрость"}
        onDriveChange={onDriveChange}
      >
        <ActionPanel
          title={"Sway"}
          titleRu={"Влияние"}
          current={character.actions.sway.current}
          base={character.actions.sway.base}
          isGilded={character.actions.sway.isGilded}
          examples={["Убеждать", "Приказывать", "Общаться"]}
        />
        <ActionPanel
          title={"Read"}
          titleRu={"Чтение"}
          current={character.actions.read.current}
          base={character.actions.read.base}
          isGilded={character.actions.read.isGilded}
          examples={["Понимать язык тела", "Видеть ложь", "Понимать мотивы"]}
        />
        <ActionPanel
          title={"Hide"}
          titleRu={"Скрытность"}
          current={character.actions.hide.current}
          base={character.actions.hide.base}
          isGilded={character.actions.hide.isGilded}
          examples={["Прятаться", "Отвлекать", "Проявлять ловкость"]}
        />
        <ResistancePanel
          current={character.resistances.cunning}
          max={cunningMaxResistance}
          onResistanceChange={(newValue) =>
            onResistanceChange("cunning", newValue)
          }
        />
      </DrivePanel>
      <DrivePanel
        className="rounded-tr-4xl rounded-br-4xl"
        driveId="intuition"
        current={character.drives.intuition.current}
        max={character.drives.intuition.max}
        base={character.drives.intuition.base}
        title={"Intuition"}
        titleRu={"Интуиция"}
        onDriveChange={onDriveChange}
      >
        <ActionPanel
          title={"Survey"}
          titleRu={"Исследование"}
          current={character.actions.survey.current}
          base={character.actions.survey.base}
          isGilded={character.actions.survey.isGilded}
          examples={["Искать", "Выслеживать", "Замечать"]}
        />
        <ActionPanel
          title={"Focus"}
          titleRu={"Сосредоточение"}
          current={character.actions.focus.current}
          base={character.actions.focus.base}
          isGilded={character.actions.focus.isGilded}
          examples={["Изучать", "Анализировать", "Запоминать"]}
        />
        <ActionPanel
          title={"Sense"}
          titleRu={"Чувства"}
          current={character.actions.sense.current}
          base={character.actions.sense.base}
          isGilded={character.actions.sense.isGilded}
          examples={["Настроиться", "Провести через себя", "Разоблачать"]}
        />
        <ResistancePanel
          current={character.resistances.intuition}
          max={intuitionMaxResistance}
          onResistanceChange={(newValue) =>
            onResistanceChange("intuition", newValue)
          }
        />
      </DrivePanel>
    </Inline>
  )
}
export default DrivesBar
