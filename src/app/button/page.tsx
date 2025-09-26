// system
import React from "react"
// ui
import Title from "@/ui/Presentation/Title"
import Text from "@/ui/Presentation/Text"
import Demo from "@/ui/Presentation/Demo"
import Beam from "@/ui/Layout/Beam"
import Pillar from "@/ui/Layout/Pillar"
import Button from "@/ui/Actions/Button"
import WallDecorated from "@/ui/Layout/Decorators/WallDecorated"
import Stack from "@/ui/Layout/Stack"

export default function ButtonPage() {
  return (
    <WallDecorated>
      <Title className="mb-distant" size={1}>
        Button Component
      </Title>
      <Stack gap="distant">
        <Stack gap="same-level">
          <Stack gap="close">
            <Title size={3}>Description</Title>
            <Text type="paragraph">
              This is a simple button component. It is used to trigger actions.
            </Text>
          </Stack>
        </Stack>
        <Stack gap="same-level">
          <Title size={3}>Usage</Title>
          <Stack gap="same-level-close">
            <Stack gap="close">
            <Title size={5}>Styles</Title>
            <Text type="paragraph">
              Button component provides a set of predefined styles for various
              situations. You can select a style via props.
            </Text></Stack>
            <Beam>
              <Demo
                whole
                code={`
          <Beam className="gap-same-level" contentJustify="center">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button transparent>Transparent</Button>
            <Button isText>Text Button</Button>
            <Button isSmall>Small Button</Button>
          </Beam>
          `}
              >
                <Beam className="gap-same-level" contentJustify="center">
                  <Button>Default</Button>
                  <Button disabled>Disabled</Button>
                  <Button transparent>Transparent</Button>
                  <Button isText>Text Button</Button>
                  <Button isSmall>Small Button</Button>
                </Beam>
              </Demo>
            </Beam>
          </Stack>
          <Title size={5}>Colors</Title>
          <Text type="paragraph">
            Button component provides a set of predefined colors. Basically,
            it&apos;s designed to be used with the following colors:
            <ul>
              <li>Primary - your main action color</li>
              <li>Blue - a color for less frequent actions</li>
              <li>Success - a button for success or accept actions</li>
              <li>Cancel - a button for cancel or reject actions</li>
              <li>Remove - a button for remove or delete actions</li>
            </ul>
            You can select color via theme prop or you can use a prop the color
            name.
          </Text>
          <Beam>
            <Demo
              whole
              code={`
          <Beam className="gap-same-level" contentJustify="center">
            <Button theme="primary">Primary</Button>
            <Button theme="secondary">Secondary</Button>
            <Button theme="success">Success</Button>
            <Button theme="cancel">Cancel</Button>
            <Button theme="remove">Remove</Button>
          </Beam>
          `}
            >
              <Beam className="gap-same-level" contentJustify="center">
                <Button theme="primary">Primary</Button>
                <Button theme="secondary">Secondary</Button>
                <Button theme="success">Success</Button>
                <Button theme="cancel">Cancel</Button>
                <Button theme="remove">Remove</Button>
              </Beam>
            </Demo>
          </Beam>
          <Title size={5}>Buttons with icons</Title>
          <Text type="paragraph">
            You can add an icon to the button. It can be placed at the beginning
            or at the end of the button. Icon is using a same logic as in the
            Icon component. You also can change a size of the icon.
          </Text>
          <Beam>
            <Demo
              code={`
        <Beam className="gap-same-level" contentJustify="center">
          <Button icon="send" success >Send</Button>
          <Button endIcon="delete" remove >Delete</Button>
          <Button icon="add" iconSize={26}>Big add</Button>
        </Beam>
        `}
            >
              <Beam className="gap-same-level" contentJustify="center">
                <Button icon="send" success>
                  Send
                </Button>
                <Button endIcon="delete" remove>
                  Delete
                </Button>
                <Button icon="add" iconSize={26}>
                  Big add
                </Button>
              </Beam>
            </Demo>
          </Beam>
          <Text type="paragraph">
            You also can use button with only an icon, and even remove a
            background of the button.
          </Text>
          <Beam>
            <Demo
              code={`
        <Beam className="gap-same-level" contentJustify="center">
          <Button icon="send" success />
          <Button icon="add" iconSize={26} text />
        </Beam>
        `}
            >
              <Beam className="gap-same-level" contentJustify="center">
                <Button icon="send" success />
                <Button icon="delete" remove />
                <Button icon="add" iconSize={26} isText />
              </Beam>
            </Demo>
          </Beam>
          <Title size={5}>Sizes</Title>
          <Text type="paragraph">
            By default, the button has a content defined size. But you can use a
            isWide prop to make it take all available horizontal space.
          </Text>
          <Beam>
            <Demo
              whole
              code={`
          <Beam className="gap-same-level" contentJustify="center">
            <Pillar md={4} mdOffset={1} sm={6} xs={12}>
              <Button isWide>Wide button 1</Button>
            </Pillar>
            <Pillar md={4} sm={6} xs={12}>
              <Button isWide>Wide button 2</Button>
            </Pillar>
          </Beam>
        `}
            >
              <Beam className="gap-same-level" contentJustify="center">
                <Pillar md={4} mdOffset={1} sm={6} xs={12}>
                  <Button isWide>Wide button 1</Button>
                </Pillar>
                <Pillar md={4} sm={6} xs={12}>
                  <Button isWide>Wide button 2</Button>
                </Pillar>
              </Beam>
            </Demo>
          </Beam>
        </Stack>
      </Stack>
    </WallDecorated>
  )
}
