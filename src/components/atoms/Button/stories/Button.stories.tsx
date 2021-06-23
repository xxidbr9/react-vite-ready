
import color from '@app/styles/colors'
import Font, { optionsWeigth } from '@app/styles/fonts'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import Icon from '@app/components/atoms/Icon'
import Button, { ButtonProps, ButtonVariant } from "../Button"
import LovePlusWhiteIcon from '@app/assets/svg/icon/LovePlusWhite.icon'
import TrashIcon from '@app/assets/svg/icon/TrashIcon'

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    textVariant: {
      options: Font.fontSizing,
      control: { type: 'select' },
      description: "is for change the text size",
      defaultValue: 14
    },
    textWeight: {
      options: optionsWeigth(),
      control: { type: 'select' }
    },
    variant: {
      options: ButtonVariant,
      control: { type: 'select' },
      description: "this is for change the button variant",
      defaultValue: "default"
    },
    disabled: {
      control: { type: 'boolean' },
      description: "this is for change the button variant",
      defaultValue: false
    },
    isSmall: {
      control: { type: 'boolean' },
      description: "this is for change the button variant",
      defaultValue: false
    },
    onClick: { action: 'clicked' }
  }
} as Meta

export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  children: "BUTTON",
  isSmall: true,

}

export const ButtonWithPrefix = Template.bind({})
ButtonWithPrefix.args = {
  children: "BUTTON",
  prefix: <Icon iconSrc={LovePlusWhiteIcon} />,
}

export const ButtonWithSuffix = Template.bind({})
ButtonWithSuffix.args = {
  children: "BUTTON",
  suffix: <Icon iconSrc={LovePlusWhiteIcon} />,
}

export const ButtonNoBackgroud = Template.bind({})
ButtonNoBackgroud.args = {
  children: "BUTTON",
  variant: "bordered",
  isSmall: true,
  prefix: <Icon iconSrc={TrashIcon} />,
}
