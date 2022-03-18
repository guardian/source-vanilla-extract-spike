import type { LabelHTMLAttributes } from "react"

import type { Meta, Story } from "@storybook/react"

import { Label as LabelComponent } from "./Label"

export default {
  title: "Label",
} as Meta<LabelHTMLAttributes<HTMLLabelElement>>

const Template: Story<LabelHTMLAttributes<HTMLLabelElement>> = (args) => (
  <LabelComponent {...args}>Example Label</LabelComponent>
)

export const Label = Template.bind({})
