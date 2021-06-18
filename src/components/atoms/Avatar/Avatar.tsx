import React from 'react'
import styled from '@emotion/styled'
import color from '@app/styles/colors'
import { productSansFont } from '@app/styles/fonts'

type Variant = "big" | "small"

export type AvatarProps = {
  src?: JSX.IntrinsicElements["img"]["src"]
  size?: string | number
  variant?: Variant
  initialName?: string
}

const variantSizeHandle = (variant) => {
  switch (variant) {
    case 'big':
      return '9.063rem'
    case 'small':
      return '2.5rem'
    default:
      return '2.5rem'
  }
}

const AvatarStyled = styled.div<AvatarProps>`
  ${productSansFont}
  border-radius: 50%;
  background-color: ${color.GREY_2};
  width: ${props => variantSizeHandle(props.variant)};
  height:${props => variantSizeHandle(props.variant)};
  font-size: ${props => props.variant === "big" ? '3.5rem' : '1rem'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${color.WHITE};
  overflow: hidden;
`;

const AvatarImageStyled = styled.img`
  width: 100%;
  height: 100%;
`;

const AvatarTextStyled = styled.span``



const Avatar: React.FC<AvatarProps & JSX.IntrinsicElements["div"]> = ({ src, size, initialName, ...props }) => {
  return (
    <AvatarStyled {...props} >
      {!!src ?
        <AvatarImageStyled src={src} /> :
        (
          <AvatarTextStyled >
            {initialName}
          </AvatarTextStyled>
        )
      }
    </AvatarStyled>
  )
}

export default Avatar
