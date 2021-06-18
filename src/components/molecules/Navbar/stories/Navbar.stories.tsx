import { Meta, Story } from '@storybook/react'
import React from 'react'
import Navbar, { NavbarProps } from '../Navbar'

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export default {
  title: 'Molecules/Navbar',
  component: Navbar
} as Meta;

export const NavbarDefault = Template.bind({})
NavbarDefault.args = {
}


