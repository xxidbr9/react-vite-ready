import * as React from "react"

function TrashIcon(props) {
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
        d="M10.364 18a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1zm10-12h-4V5a3 3 0 00-3-3h-2a3 3 0 00-3 3v1h-4a1 1 0 000 2h1v11a3 3 0 003 3h8a3 3 0 003-3V8h1a1 1 0 000-2zm-10-1a1 1 0 011-1h2a1 1 0 011 1v1h-4V5zm7 14a1 1 0 01-1 1h-8a1 1 0 01-1-1V8h10v11zm-3-1a1 1 0 001-1v-6a1 1 0 00-2 0v6a1 1 0 001 1z"
        fill="#8C5C43"
      />
    </svg>
  )
}

export default TrashIcon
