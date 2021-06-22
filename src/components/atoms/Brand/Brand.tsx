import React from 'react'
import styled from '@emotion/styled'
import EllaBrandImage from '@assets/images/ella_brand_logo.png'

export type ImgType = JSX.IntrinsicElements["img"]

const Images = (props: ImgType) => (<img {...props} />)

/* 
===== TODO =====
[ ] Change span tags to styled components
[ ] Change img to replacement Components
[ ] Change Images as easy to change
=== END TODO ===

*/

const Brand: React.FC<ImgType> = ({ ...props }) => {
  const StyledImage = styled("img")`
    width: 3.5rem;
    height: 2.3rem;
  `;
  return (
    <StyledImage {...props} src={EllaBrandImage} />
  )
}

export default Brand
