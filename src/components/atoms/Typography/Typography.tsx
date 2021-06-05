import { FontSizingType, FontWeightType } from '@app/styles/fonts'
import styled from '@emotion/styled'
import React from 'react'

type Variant = {
  size?: FontSizingType
  fontWeight?: FontWeightType
}

const TypographyStyled = styled.span<Variant>`
  font-size: ${({ size }) => !!size ? size + "px" : "14px"};
  font-weight: ${({ fontWeight }) => !!fontWeight ? fontWeight : "normal"};
`

export type TypographyProps = {
  variant?: FontSizingType
  weight?: FontWeightType
}

const Typography: React.FC<TypographyProps & JSX.IntrinsicElements["span"]> = ({ variant, weight, ...props }) => {
  return (
    <TypographyStyled size={variant} fontWeight={weight} {...props} />
  )
}

export default Typography
