import Link, { LinkProps } from "next/link"
import React, { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface PropsType extends LinkProps {
    className?: string,
    children: ReactNode
}

const CustomLink:FC<PropsType> = ({
    className: addedClassName,
    children,
    ...props
}) => {
    const className = twMerge("z-10 font-semibold", addedClassName)
  return (
    <li>    
        <Link {...props} className="relative group h-fit px-5 py-3 text-[15px] flex items-center justify-center">
            <div className="absolute duration-200 transition scale-75 group-hover:scale-100 w-full h-full group-hover:bg-black/10  rounded-[28px]"></div>
            <span className={className}>{children}</span>
        </Link>
    </li>

  )
}

export default CustomLink

