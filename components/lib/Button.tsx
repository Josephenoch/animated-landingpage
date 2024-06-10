import React, { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'


const Button:FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
    children,
    className: addedClasses,
    ...props
}) => {
    const className = twMerge("bg-[#ffdd04] text-[#060500] hover:scale-105 transition-all hover:bg-[#ffdd04]/80 text-[15px] font-semibold px-5 py-3 w-fit rounded-full",addedClasses)
  return (
    <button className={className}>
        {children}
    </button>
  )
}

export default Button