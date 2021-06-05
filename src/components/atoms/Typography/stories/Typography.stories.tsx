import Font, { FontWeightType } from '@app/styles/fonts';
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Typography, { TypographyProps } from '../Typography'



const optionsWeigth = (): FontWeightType[] => {
  return ["bold", 'bolder', 'lighter', 'normal', ...Font.weightSize]
}

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: Font.fontSizing,
      control: { type: 'select' },
      description:"is for change the text size",
      defaultValue: 14
    },
    weight: {
      options: optionsWeigth(),
      control: { type: 'select' }
    }
  }
} as Meta;

const textTemplate = "The quick brown fox jumps over the lazy dog."

const Template: Story<TypographyProps> = (args) => <Typography {...args} />
export const TextNormal = Template.bind({})

TextNormal.args = {
  variant: "",
  children: textTemplate
}


