import React from 'react'
import styled from '@emotion/styled'

type iconSrc = React.FC


export type IconProps = {
  iconSrc: iconSrc
  iconSize?: string
}

/* 
===== TODO =====
[ ] Add toast/Accent components for outer wrap
[ ] 
=== END TODO ===

*/




const StyledIconWraper = styled.div`
  /* width: 100%;
  height: 100%; */
`;

const Icon: React.FC<IconProps> = (props) => {
  const { iconSrc: IconSrc } = props
  return (
    <StyledIconWraper {...props}>
      <IconSrc />
    </StyledIconWraper>
  )
}

export default Icon
