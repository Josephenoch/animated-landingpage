import { HeartIcon } from '@/components/icons'
import { Logo, CustomLink, SearchComponent, Button } from '@/components/lib'
import React from 'react'

const Nav = () => {
  return (
    <nav className="flex h-[70px] items-center w-full  px-4 relative">
        <ul className="flex w-full justify-between items-center">
            <div className="flex space-x-3 items-center">
                <CustomLink href="/" className="">FAQ</CustomLink>
                <CustomLink href="/" className="flex items-center">Wall of <HeartIcon/></CustomLink>
                <CustomLink href="/" className="flex items-center">Resources</CustomLink>
            </div>
        <li className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2"><Logo/></li>
            <div className="flex space-x-4 items-center">
                <SearchComponent/>
                <CustomLink href="/" className="flex items-center">Log in</CustomLink>
                <Button> Sign up</Button>
            </div>
        </ul>


    </nav>
  )
}

export default Nav