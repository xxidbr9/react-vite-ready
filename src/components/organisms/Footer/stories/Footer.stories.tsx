import { Meta, Story } from '@storybook/react'
import React from 'react'
import Footer, { FooterProps } from '../Footer'

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export default {
  title: 'Organisms/Footer',
  component: Footer,
  args: {
  }
} as Meta;

export const FooterDefault = Template.bind({})
FooterDefault.args = {
}
