import { Meta, Story } from '@storybook/react'
import React from 'react'
import Icon, { IconProps } from '../Icon'
import BellIcon from '@assets/svg/icon/Bell.icon'
import Cart from '@assets/svg/icon/Cart.icon'


/* 
===== TODP =====
[ ] Add card Components
=== END TODO ===

*/

const Template: Story<IconProps> = (args) => <Icon {...args} />

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {

  }
} as Meta;

export const IconDefault = Template.bind({})
IconDefault.args = {
  iconSrc: BellIcon
}

export const IconWithWraper = Template.bind({})
IconWithWraper.args = {
  iconSrc: BellIcon,
  number: 2
}