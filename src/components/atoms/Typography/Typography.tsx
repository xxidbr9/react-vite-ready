import { FontSizingType, FontWeightType, productSansFont } from '@app/styles/fonts'
import styled from '@emotion/styled'
import React from 'react'

type Variant = {
  size?: FontSizingType
  fontWeight?: FontWeightType
}

const TypographyStyled = styled.p<Variant>`
  ${productSansFont}
  font-size: ${({ size }) => !!size ? size + "px" : "14px"};
  font-weight: ${({ fontWeight }) => !!fontWeight ? fontWeight : "normal"};
`

export type TypographyProps = {
  variant?: FontSizingType
  weight?: FontWeightType
}

const Typography: React.FC<TypographyProps & JSX.IntrinsicElements["p"]> = ({ variant, weight, ...props }) => {
  return (
    <TypographyStyled size={variant} fontWeight={weight} {...props} />
  )
}

export default Typography
