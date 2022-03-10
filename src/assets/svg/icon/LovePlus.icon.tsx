import React from 'react'

const LovePlusIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={1}
        y={2}
        width={22}
        height={20}
      >
        <path
          d="M20.167 4.617a6.27 6.27 0 00-8.16-.61 6.27 6.27 0 00-8.16 9.48l7.45 7.45a.997.997 0 001.095.218.998.998 0 00.325-.218l7.45-7.45a6.27 6.27 0 000-8.87zm-1.672 7.65l-6.488 6.55-6.75-6.74a4.28 4.28 0 013-7.3 4.25 4.25 0 013 1.25.999.999 0 001.42 0 4.27 4.27 0 016 6.05l-.182.19z"
          fill="#8C5C43"
        />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M20.495 3.268c-2.5-5.5-16-2.5-17-2.5-9 7-.5 17 2 21s5.613 2.022 7 .497c3.863-4.25 1.5-5-.5-4.5-1 .776-.386-1.156-.5-1.497-.5-1.5-1.843-5.636-1.5-6 8-8.5 9.359-1.7 9.293-1.205-.826 6.18 2.346 4.257 3.138.402.139-.673.069-1.797-1.931-6.197z"
          fill="#8C5C43"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.745 11.768a.75.75 0 00-1.5 0v3.25h-3.25a.75.75 0 100 1.5h3.25v3.25a.75.75 0 101.5 0v-3.25h3.25a.75.75 0 000-1.5h-3.25v-3.25z"
        fill="#8C5C43"
      />
      <circle cx={20.005} cy={12.024} r={1.068} fill="#8C5C43" />
      <circle cx={13.929} cy={18.296} r={1.03} fill="#8C5C43" />
    </svg>
  )
}

export default LovePlusIcon
