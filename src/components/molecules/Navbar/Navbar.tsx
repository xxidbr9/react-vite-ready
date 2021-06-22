import React, { Children } from 'react'
import styled from '@emotion/styled'
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
// import tw from 'twin.macro'
// import Brand from '@components/atoms/Brand';



export interface NavbarProps extends WithAsProps {
  variant?: ""
  isLogin?: boolean,
  pictureSrc?: JSX.IntrinsicElements["img"]["src"]
}

const MenuStyled = styled.div`

`

const StyledNavbarWraper = styled.nav<NavbarProps>`
  ${tw`bg-white w-full shadow-md`}
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
}
export interface NavbarInterface extends React.FC<NavbarProps> {
  Item?: React.FC<WithAsProps & ItemProps>
}


const Navbar: NavbarInterface = (props) => {
  const { children, isLogin, variant, pictureSrc } = props
  return (
    <StyledNavbarWraper>
      <div className="py-2 flex items-center justify-between container mx-auto">
        {/* Brand Start here */}
        <Brand />
        {/* Brand End here */}
        {/* Menu Start here */}
        <ul className="flex justify-center w-full gap-10 px-5 items-center">
          {children}
        </ul>
        {/* Menu End here */}
        {/* Left Menu Start here */}
        <ul className="flex flex-row items-center gap-10">
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
              <button>masuk</button>
            </li>
          }
        </ul>
        {/* Left Menu End here */}
      </div>
    </StyledNavbarWraper>
  )
}





Navbar.Item = (props) => {
  const { as: Components, children, classPrefix, textStyle } = props
  return (
    <li className={`flex items-center ${!!classPrefix ? classPrefix : ""}`}>
      <Typography variant={14} style={textStyle}>
        <Components {...props} />
      </Typography>
    </li>
  )
}
Navbar.Item.defaultProps = {
  as: "span"
}
export const Item = Navbar.Item

Navbar.defaultProps = {}

export default Navbar
