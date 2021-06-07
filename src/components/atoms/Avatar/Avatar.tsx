import React from 'react'
import styled from '@emotion/styled'


const AvatarStyled = styled.div``
const AvatarImageStyled = styled.img``

const AvatarTextStyled = styled.span``

export type AvatarProps = {
  src?: JSX.IntrinsicElements["img"]["src"]
  size?: string | number
  initialName?: string
}

const Avatar: React.FC<AvatarProps & JSX.IntrinsicElements["div"]> = ({ src, size, initialName, ...props }) => {
  return (
    <AvatarStyled {...props}>
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
