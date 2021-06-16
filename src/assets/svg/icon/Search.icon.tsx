import React from 'react'

const SearchIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.434 16.83l-2.07-2.12a3.081 3.081 0 00-3.4-.57l-.9-.9a7 7 0 10-1.41 1.41l.89.89a3 3 0 00.53 3.46l2.12 2.12a3 3 0 004.24 0 3 3 0 000-4.29zm-8.48-4.24a5 5 0 11-7.062-7.08 5 5 0 017.062 7.08zm7.07 7.07a.998.998 0 01-1.42 0l-2.12-2.12a.997.997 0 01-.219-1.095.998.998 0 01.22-.325.998.998 0 011.42 0l2.12 2.12a1 1 0 010 1.42z"
        fill="#8C5C43"
      />
    </svg>
  )
}

export default SearchIcon
