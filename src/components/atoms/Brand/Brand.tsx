import React from 'react'
import styled from '@emotion/styled'
import BrandSVG from '@assets/svg/brand/Brand'

export type ImgType = JSX.IntrinsicElements["div"]

const Images = (props: ImgType) => (<div {...props} />)

/* 
===== TODO =====
[ ] Change span tags to styled components
[ ] Change img to replacement Components
[ ] Change Images as easy to change
=== END TODO ===

*/

const Brand: React.FC<ImgType> = ({ ...props }) => {
  const StyledImage = styled("div")`
    width: 3.5rem;
    height: 2.3rem;
  `;
  return (
    <StyledImage {...props}  >
      <BrandSVG/>
    </StyledImage>
  )
}




export default Brand
