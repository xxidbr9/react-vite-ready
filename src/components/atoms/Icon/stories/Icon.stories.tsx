import { Meta, Story } from '@storybook/react'
import React from 'react'
import Icon, { IconProps } from '../Icon'
import BellIcon from '@assets/svg/icon/Bell.icon'
import Cart from '@assets/svg/icon/Cart.icon'


const Template: Story<IconProps> = (args) => <Icon {...args} />

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args:{
    iconSrc:{
      description:"type(React.node)"
    }
  }
} as Meta;

export const IconDefault = Template.bind({})
IconDefault.args = {
  iconSrc: BellIcon
}

export const IconDefault2 = Template.bind({})
IconDefault2.args = {
  iconSrc: Cart
}