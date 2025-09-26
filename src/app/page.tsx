"use client"
import Checkbox from "@/ui/Form/Checkbox"
import FormField from "@/ui/Form/Field"
import Form from "@/ui/Form/Form"
import {
  FormContextElementWrapper,
  FormElementLine,
  FormElementNestedWrapper,
  FormElementWrapper
} from "@/ui/Form/FormElementWrapper"
import FormSubmit from "@/ui/Form/FormSubmit"
import Input from "@/ui/Form/Input"
import Radio, { RadioItem } from "@/ui/Form/Radio"
import Select from "@/ui/Form/Select"
import Switch from "@/ui/Form/Switch"
import Beam from "@/ui/Layout/Beam"
import Wall from "@/ui/Layout/Wall"
import WallDecorated from "@/ui/Layout/Decorators/WallDecorated"
import Text from "@/ui/Presentation/Text"
import Title from "@/ui/Presentation/Title"
import { useForm, useFormContext } from "react-hook-form"
import * as yup from "yup"
import Button from "@/ui/Actions/Button"
import Stack from "@/ui/Layout/Stack"
import Inline from "@/ui/Layout/Inline"
import Spacer from "@/ui/Layout/Spacer"
import Pillar from "@/ui/Layout/Pillar"
import Brick from "@/ui/Layout/Brick"

interface TestForm {
  test1: string
  test2: string
  test3: string
  test4: string
}

const testOptions = [
  { value: 1, title: "Test 1" },
  { value: 2, title: "Test 2" },
  { value: 3, title: "Test 3" },
  { value: 4, title: "Test 4" },
  { value: 5, title: "Test 5" },
  { value: 6, title: "Test 6" },
  { value: 7, title: "Test 7" },
  { value: 8, title: "Test 8" },
  { value: 9, title: "Test 9" },
  { value: 10, title: "Test 10" }
]

export default function MainPage() {
  const validationSchema = yup
    .object<TestForm>()
    .shape({
      test1: yup.string().required("This field is required"),
      test2: yup.number().min(10),
      test4: yup.string().required(),
      testSelect: yup.number().required(),
      checkbox1: yup.mixed().oneOf(["partial", true, false]),
      radio1: yup.number().required()
    })
    .required()
  return (
    <WallDecorated>
      <Title size={1} uppercase>
        Ui-boilerplate
      </Title>
      <Title>This is a ui-boilerplate for NEXT.js with some ui-kit</Title>
      <div className="grid-flex [--grid-cols:8] [--grid-gap:2rem]">
        <div className="sm:w-full lg:w-1/2">A</div>
        <div className="col-span col-span-4">B</div>
      </div>
      <Form
        defaultValues={{ test1: "test", checkbox1: "partial", radio1: 1 }}
        onSubmit={(data) => console.log(data)}
        onInvalidSubmit={(error) => console.log("error", error)}
        validationSchema={validationSchema}
      >
        <Input
          sm={12}
          name="test1"
          label="name"
          type="text"
          placeholder="Type something"
          disabled
          clearable
        />
        <Input
          sm={12}
          name="test2"
          label="name"
          placeholder="Type something"
          filled
          icon="search"
        />
        <FormElementLine>
          <Input
            sm={12}
            name="itest1"
            label="name"
            placeholder="Type something"
            filled
            icon="search"
            error="fdsf"
          />
          <Input
            sm={12}
            name="itest2"
            label="name"
            placeholder="Type something"
            filled
            icon="search"
          />
          <Input
            sm={12}
            name="itest3"
            label="name"
            placeholder="Type something"
            filled
            icon="search"
          />
        </FormElementLine>
        <Switch name="switchTest" label="night theme" />
        <Input
          sm={12}
          name="test3"
          label="name"
          type="text"
          placeholder="Type something"
        />
        <Checkbox name="checkbox1" label="Checkbox test" />
        <Input
          sm={12}
          name="test4"
          label="name"
          type="text"
          placeholder="Type something"
          filled
          labelOnTop
        />
        <Radio
          name="radio1"
          options={[
            { title: "Test 1", value: 1 },
            { title: "Test 2", value: 2 }
          ]}
        />
        <Select
          sm={12}
          name="testSelect"
          label="select"
          placeholder="choose something"
          options={testOptions}
          clearable
        />
        <FormSubmit>Submit</FormSubmit>
      </Form>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        turpis sit amet nunc consectetur ultricies. Sed et eros eget orci
        tristique ultricies. Donec auctor, nunc nec ultricies ultrices, nunc
        libero fermentum ex, nec ultricies nunc libero at nulla. Nulla facilisi.
        Proin in nisi nec nunc scelerisque ultricies. Nullam nec turpis sit amet
        nunc consectetur ultricies. Sed et eros eget or
      </Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        turpis sit amet nunc consectetur ultricies. Sed et eros eget orci
        tristique ultricies. Donec auctor, nunc nec ultricies ultrices, nunc
        libero fermentum ex, nec ultricies nunc libero at nulla. Nulla facilisi.
        Proin in nisi nec nunc scelerisque ultricies. Nullam nec turpis sit amet
        nunc consectetur ultricies. Sed et eros eget or
      </Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        turpis sit amet nunc consectetur ultricies. Sed et eros eget orci
        tristique ultricies. Donec auctor, nunc nec ultricies ultrices, nunc
        libero fermentum ex, nec ultricies nunc libero at nulla. Nulla facilisi.
        Proin in nisi nec nunc scelerisque ultricies. Nullam nec turpis sit amet
        nunc consectetur ultricies. Sed et eros eget or
      </Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
        turpis sit amet nunc consectetur ultricies. Sed et eros eget orci
        tristique ultricies. Donec auctor, nunc nec ultricies ultrices, nunc
        libero fermentum ex, nec ultricies nunc libero at nulla. Nulla facilisi.
        Proin in nisi nec nunc scelerisque ultricies. Nullam nec turpis sit amet
        nunc consectetur ultricies. Sed et eros eget or
      </Text>
    </WallDecorated>
  )
}

function NestedInput() {
  return (
    <FormContextElementWrapper>
      <Input
        sm={12}
        name="test5"
        label="name"
        type="text"
        placeholder="Type something"
        icon="search"
      />
    </FormContextElementWrapper>
  )
}
