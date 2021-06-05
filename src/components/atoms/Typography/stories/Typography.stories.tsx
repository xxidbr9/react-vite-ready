import Font from '@app/styles/fonts';
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Typography, { TypographyProps } from '../Typography'

export default {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    size: {
      options: Font.FontSizing,
      control: { type: 'select' }
    }
  }
} as Meta;

const textTemplate = "The quick brown fox jumps over the lazy dog."

const Template: Story<TypographyProps> = (args) => <Typography {...args} />
export const TextNormal = Template.bind({})

TextNormal.args = {
  size: "",
  children: textTemplate
}


