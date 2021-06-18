import React from 'react'
import styled from '@emotion/styled'


type NavbarType = {

}

export type NavbarProps = {

}

const StyledNavbarWraper = styled.div<NavbarType>`
  width: 100%;
  background-color: pink;
`;


const Navbar = () => {
  return (
    <StyledNavbarWraper className="container">
      hello
    </StyledNavbarWraper>
  )
}

export default Navbar
