import color from '@app/styles/colors'
import { WithAsProps } from '@app/utils/types/utils.types'
import styled from '@emotion/styled'
import React, { useCallback, useEffect } from 'react'
import tw from 'twin.macro'
import Typography from '../Typography'
import { FontSizingType, FontWeightType } from '@app/styles/fonts'

export const ButtonVariant = ["black", "default", "bordered"] as const
export const IsButtonSmall = false
export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLSpanElement>
  textVariant?: FontSizingType
  textWeight?: FontWeightType
  variant?: typeof ButtonVariant[number]
  prefix?: React.Component | string
  suffix?: React.Component | string
  disabled?: boolean
  isSmall?: boolean
}

export interface ButtonInterface extends React.FC<WithAsProps & ButtonProps> {

}

const baseStyle = `flex gap-2 justify-center items-center px-5 cursor-pointer outline-none focus:outline-none rounded-full`

const isSmallStyle = (small: boolean) => !!small ? tw`py-1` : tw`py-2`

const ButtonStyledDefault = styled.button<ButtonProps>`
    ${tw`
    ${baseStyle}
    text-white 
    bg-BROWN_1 
    `}
    ${props => isSmallStyle(props.isSmall)}
  &:active{
    background-color: ${color.BROWN_2};
    transition: all .2s;
  }
`

const ButtonStyledBlack = styled.button<ButtonProps>`
    ${tw`
    ${baseStyle}
    text-BLACK 
    border-2
    border-BLACK
    `}
    ${props => isSmallStyle(props.isSmall)}
`

const ButtonStyledBordered = styled.button<ButtonProps>`
    ${tw`
    ${baseStyle}
    text-BROWN_1 
    border-2
    border-BROWN_1
    `}
    ${props => isSmallStyle(props.isSmall)}

`

const ButtonStyledDisabled = styled.button<ButtonProps>`
    ${tw`
    ${baseStyle}
    text-GREY_1
    bg-GREY_2
    cursor-not-allowed
    `}
    ${props => isSmallStyle(props.isSmall)}

`


const Button: ButtonInterface = ({ ...props }) => {
  const { prefix: Prefix, suffix: Suffix } = props
  const useStyledButton = useCallback(() => {
    if (!props.disabled) {
      switch (props.variant) {
        case 'black':
          return ButtonStyledBlack
        case 'bordered':
          return ButtonStyledBordered
        case 'default':
          return ButtonStyledDefault
        default:
          return ButtonStyledDefault
      }
    } else {
      return ButtonStyledDisabled
    }
  }, [props.variant, props.disabled])

  const ButtonStyled = useStyledButton()

  return (
    <ButtonStyled
      isSmall={props.isSmall}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {!!props.prefix && typeof props.prefix !== "string" ? Prefix : props.prefix}
      <Typography variant={props.textVariant} weight={props.textWeight}>
        {props.children}
      </Typography>
      {!!props.suffix && typeof props.suffix !== "string" ? Suffix : props.suffix}
    </ButtonStyled>
  )
}

Button.defaultProps = {
  variant: "default",
  disabled: false,
  isSmall: true
}

export default Button
