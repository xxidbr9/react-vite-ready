import { Meta, Story } from '@storybook/react'
import React from 'react'
import Footer, { FooterProps, VariantFooter } from '../Footer'

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export default {
  title: 'Organisms/Footer',
  component: Footer,
  argTypes: {
    variant: {
      options: VariantFooter,
      control: { type: 'select' },
      description: "change variant",
      defaultValue: "dark"
    },
  }
} as Meta;

export const FooterDefault = Template.bind({})
FooterDefault.args = {
}
