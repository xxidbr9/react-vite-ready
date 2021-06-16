import React from 'react'

const CartIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
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
        d="M22.612 14.54a2.55 2.55 0 00-1.615-2.363l1.59-5.952a.85.85 0 00-.154-.74.85.85 0 00-.671-.297H10.113l-.28-1.071a.85.85 0 00-.825-.63h-1.7v1.701h1.045l2.109 7.873a.85.85 0 00.85.63h8.75a.85.85 0 010 1.7H9.007a.85.85 0 000 1.7h1.003a2.551 2.551 0 104.796 0h2.006a2.55 2.55 0 003.071 3.33 2.55 2.55 0 001.538-3.73 2.552 2.552 0 001.19-2.15zm-3.324-2.55h-7.304l-1.412-5.101h10.084l-1.368 5.101zm-6.879 6.802a.85.85 0 110-1.7.85.85 0 010 1.7zm6.802 0a.85.85 0 110-1.7.85.85 0 010 1.7z"
        fill="#8C5C43"
      />
      <path
        d="M2.114 10.868h4.92M4.574 8.407v4.92"
        stroke="#8C5C43"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CartIcon
