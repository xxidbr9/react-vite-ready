import color from '@app/styles/colors'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Navbar, { NavbarProps, Item } from '../Navbar'



const Template: Story<NavbarProps> = (args) => {

  const menu = [
    "Beranda",
    "Artikel",
    "Catalog",
    "Treatment",
    "Klinik",
    "Reseller",
    "Tentang Kami"
  ]

  return (
    <Navbar {...args} >
      {menu.map((e, i) => (
        <Item key={i} textStyle={{ color: color.BROWN_1 }}>
          <a href="https://google.com" className="cursor-pointer">
            {e}
          </a>
        </Item>
      ))}
    </Navbar>
  )
}
export default {
  title: 'Molecules/Navbar',
  component: Navbar,

} as Meta;


export const NavbarDefault = Template.bind(Navbar)
NavbarDefault.args = {
  isLogin: true,
  pictureSrc: "https://source.unsplash.com/random/1"
}

export const NavbarSignOut = Template.bind(Navbar)
NavbarSignOut.args = {

}

