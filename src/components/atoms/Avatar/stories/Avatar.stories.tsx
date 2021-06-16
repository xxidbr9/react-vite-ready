import { Meta, Story } from '@storybook/react'
import React from 'react'
import Avatar, { AvatarProps } from '../Avatar'

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ["big", "small"],
      control: { type: 'select' },
      description: "this is for change the image size",
      defaultValue: "big"
    }
  },
} as Meta;

export const AvatarDefault = Template.bind({})
AvatarDefault.args = {
  initialName: "N",
  variant: "big"
}

export const AvatarUsingImage = Template.bind({})
AvatarUsingImage.args = {
  variant: "big",
  src: 'https://source.unsplash.com/random/200x200'
}


