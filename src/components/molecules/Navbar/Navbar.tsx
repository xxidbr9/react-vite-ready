import React from 'react'
import styled from '@emotion/styled'


type NavbarType = {

}

const StyledNavbarWraper = styled.div<NavbarType>`
  width: 100%;
`;


const Navbar = () => {
  return (
    <StyledNavbarWraper>
      hello
    </StyledNavbarWraper>
  )
}

export default Navbar
