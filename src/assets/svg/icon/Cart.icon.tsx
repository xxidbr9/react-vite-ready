import * as React from "react"

function CartIcon(props) {
  return (
    <svg
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.5 13a3 3 0 00-1.9-2.78l1.87-7a1 1 0 00-.18-.87A1 1 0 0017.5 2H3.8L3.47.74A1 1 0 002.5 0h-2v2h1.23l2.48 9.26a1 1 0 001 .74H15.5a1 1 0 010 2h-13a1 1 0 000 2h1.18a3 3 0 105.64 0h2.36a3 3 0 105.42-.47A3 3 0 0018.5 13zm-3.91-3H6L4.34 4H16.2l-1.61 6zM6.5 18a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z"
        fill="#8C5C43"
      />
    </svg>
  )
}

export default CartIcon
