import Link from 'next/link'
import React from 'react'
import { LogoIcon } from '../icons'

const Logo = () => {
  return (
    <Link href="/">
      <LogoIcon/>
    </Link>
  )
}

export default Logo