import { Meta, Story } from '@storybook/react'
import React from 'react'
import Card from '../Card';



const Template: Story = (args) => <Card {...args} />

export default {
  title: "Molecules/Card",
  component: Card,
  args: {

  }
} as Meta;


export const CardDefault = Template.bind({})
CardDefault.args = {

}