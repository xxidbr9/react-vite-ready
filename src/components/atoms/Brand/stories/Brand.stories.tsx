import React from 'react'
import { Meta, Story } from "@storybook/react";
import Brand from '..';
import { ImgType } from '../Brand';
export default {
  title: 'Atoms/Brand',
  component: Brand,
} as Meta;

const Template: Story<ImgType> = args => <Brand {...args} />
export const BrandDefault = Template.bind({})
BrandDefault.args = {

}