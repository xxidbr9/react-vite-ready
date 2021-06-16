import React from 'react'

const BellIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 13.18V10a6 6 0 00-5-5.91V3a1 1 0 00-2 0v1.09A6 6 0 006 10v3.18A3 3 0 004 16v2a1 1 0 001 1h3.14a4 4 0 007.72 0H19a1 1 0 001-1v-2a3 3 0 00-2-2.82zM8 10a4 4 0 018 0v3H8v-3zm4 10a2 2 0 01-1.72-1h3.44A2 2 0 0112 20zm6-3H6v-1a1 1 0 011-1h10a1 1 0 011 1v1z"
        fill="#8C5C43"
      />
    </svg>
  )
}

export default BellIcon
