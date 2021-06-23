import React from 'react'
import styled from '@emotion/styled'
import { css, cx } from '@emotion/css'
import Brand from '@app/components/atoms/Brand';
import Typography from '@app/components/atoms/Typography';
import color from '@app/styles/colors';
import Avatar from '@app/components/atoms/Avatar';
import Icon from '@app/components/atoms/Icon';
import CartIcon from '@assets/svg/icon/Cart.icon'
import BellIcon from '@assets/svg/icon/Bell.icon'
import SearchIcon from '@assets/svg/icon/Search.icon'
import { WithAsProps } from '@app/utils/types/utils.types';
import tw from 'twin.macro'
import Button from '@app/components/atoms/Button';

export interface NavbarProps extends WithAsProps {
  variant?: ""
  isLogin?: boolean,
  pictureSrc?: JSX.IntrinsicElements["img"]["src"]
}



const StyledNavbarWraper = styled.nav<NavbarProps>`
  ${tw`bg-white w-full shadow-md`}
`;


const NavbarContainer = styled.div`
  ${tw`py-2 flex items-center justify-between container mx-auto`}
`;

const MenuStyled = styled.ul`
  ${tw`flex justify-center w-full gap-8 px-5 items-center`}
`

const RightMenuStyled = styled.ul`
  ${tw`flex flex-row items-center gap-10`}
`;

const menu = [
  "Beranda",
  "Artikel",
  "Catalog",
  "Treatment",
  "Klinik",
  "Reseller",
  "Tentang Kami"
]


/* 
===== TODO =====
[ ] Menus
[ ] Change list menu to a components
[ ] Props if login
[ ] Search Appear
[ ] Accent on Icon 
=== END TODO ===

*/

type ItemProps = {
  textStyle?: React.CSSProperties
  isActive?: boolean
}
export interface NavbarInterface extends React.FC<NavbarProps> {
  Item?: React.FC<WithAsProps & ItemProps>
}


const Navbar: NavbarInterface = (props) => {
  const { children, isLogin, variant, pictureSrc } = props
  return (
    <StyledNavbarWraper>
      {/* <div className={css`py-2 flex items-center justify-between container mx-auto`} css={css`tw.`}> */}
      <NavbarContainer>

        {/* Brand Start here */}
        <Brand />
        {/* Brand End here */}
        {/* Menu Start here */}
        <MenuStyled>
          {children}
        </MenuStyled>
        {/* Menu End here */}
        {/* Left Menu Start here */}
        <RightMenuStyled >
          <li>
            <Icon iconSrc={SearchIcon} />
          </li>
          <li>
            <Icon iconSrc={CartIcon} />
          </li>
          <li>
            <Icon iconSrc={BellIcon} />
          </li>
          {!!isLogin &&
            <li>
              <Avatar src={pictureSrc} />
            </li>
          }
          {!isLogin &&
            <li>
              <Button isSmall>masuk</Button>
            </li>
          }
        </RightMenuStyled>
        {/* Left Menu End here */}
      </NavbarContainer>
    </StyledNavbarWraper>
  )
}





const NavbarMenuItemsStyled = styled.li<WithAsProps & ItemProps>`
  ${tw`flex items-center`}
`

Navbar.Item = (props) => {
  const { as: Components, classPrefix, textStyle, isActive } = props
  return (
    <NavbarMenuItemsStyled className={classPrefix}>
      <Typography variant={14} style={textStyle} weight={isActive ? "bold" : "normal"}>
        <Components {...props} />
      </Typography>
    </NavbarMenuItemsStyled>
  )
}
Navbar.Item.defaultProps = {
  as: "span"
}
export const Item = Navbar.Item

Navbar.defaultProps = {}

export default Navbar
