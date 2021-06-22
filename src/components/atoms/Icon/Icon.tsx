import React from 'react'
import styled from '@emotion/styled'

type iconSrc = React.FC


export type IconProps = {
  iconSrc: iconSrc
}

/* 
===== TODO =====
[ ] Add toast components for outer wrap
[ ] 
=== END TODO ===

*/


const StyledIconWraper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

const Icon: React.FC<IconProps> = (props) => {
  return (
    <StyledIconWraper>
      <props.iconSrc />
    </StyledIconWraper>
  )
}

export default Icon
