import { Meta, Story } from '@storybook/react'
import React from 'react'
import Avatar, { AvatarProps } from '../Avatar'

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

export const AvatarDefault = Template.bind({})
AvatarDefault.args = {
  intialName: "N"
}

export const AvatarUsingImage = Template.bind({})
AvatarUsingImage.args = {
  src: ''
}


