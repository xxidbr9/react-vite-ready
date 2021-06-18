import React from 'react'
import styled from '@emotion/styled'
import Brand from '@app/components/atoms/Brand';
// import tw from 'twin.macro'
// import Brand from '@components/atoms/Brand';



export type NavbarProps = {

}
const MenuStyled = styled.div`

`

const StyledNavbarWraper = styled.div`
 
`;





const Navbar = (props) => {
  return (
    <StyledNavbarWraper>
      <Brand />
    </StyledNavbarWraper>
  )
}

export default Navbar
