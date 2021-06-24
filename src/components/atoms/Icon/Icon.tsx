import React from 'react'
import styled from '@emotion/styled'
import Typography from '../Typography';
import color from '@styles/colors';

type iconSrc = React.FC


export type IconProps = {
  iconSrc: iconSrc
  iconSize?: string
  number?: number | null
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
  position: relative;
`;

const AccentNumber = styled.span`
  position: absolute;
  background-color: ${color.YELLOW};
  border-radius: 9999px;
  border: 2px solid ${color.FIXED_WHITE_1};
  padding: 0 .35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -.3rem;
  left: .4rem;
`

const Icon: React.FC<IconProps> = (props) => {
  const { iconSrc: IconSrc } = props
  return (
    <StyledIconWraper {...props}>
      {!!props.number && props.number !== null && (
        <AccentNumber className="text-white">
          <Typography variant={10}>{props.number}</Typography>
        </AccentNumber>
      )}
      <IconSrc />
    </StyledIconWraper>
  )
}


Icon.defaultProps = {
  number: 0
}

export default Icon
