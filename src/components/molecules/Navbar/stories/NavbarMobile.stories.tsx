import color from '@app/styles/colors'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Navbar, { NavbarProps, Item } from '../Navbar'



const Template: Story<NavbarProps> = (args) => {

  const menu = [
    { name: "Beranda", isActive: true },
    { name: "Artikel", isActive: false },
    { name: "Catalog", isActive: false },
    { name: "Treatment", isActive: false },
    { name: "Klinik", isActive: false },
    { name: "Reseller", isActive: false },
    { name: "Tentang Kami", isActive: false }
  ]

  return (
    <Navbar {...args}>
      {menu.map((e, i) => (
        <Item key={i} textStyle={{ color: color.BROWN_1 }} isActive={e.isActive}>
          <a href="https://google.com" className="cursor-pointer">
            {e.name}
          </a>
        </Item>
      ))}
    </Navbar>
  )
}
export default {
  title: 'Molecules/Navbar (Mobile)',
  component: Navbar,
  argTypes: {
    totalCartItem: {
      control: { type: 'number' },
      description: "is for change the text size",
      defaultValue: 0
    },
    totalNotifItem: {
      control: { type: 'number' },
      description: "is for change the text size",
      defaultValue: 0
    },
    initialName: {
      control: { type: "text" }
    }
  } 
} as Meta;


export const NavbarDefault = Template.bind(Navbar)
NavbarDefault.args = {
  isLogin: true,
  pictureSrc: "https://source.unsplash.com/random/1"
}

export const NavbarSignOut = Template.bind(Navbar)
NavbarSignOut.args = {

}


