import React from 'react'
import { StarIcon } from '../icons'
import { Button } from '../lib'

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col mt-24 w-[600px] bg-red-10">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex space-x-1">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
          </div>
          <p>Loved by 1,000,000+ creators</p>
        </div>
        <p className="text-[96px] leading-[86px] text-center font-bold mt-16">Fund your creative work</p>
        <p className="text-xl mt-4 text-center">Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
        <Button className="px-12 py-5 text-2xl self-center mt-10">Start my page</Button>
        <p className="mt-4 text-center text-lg">It’s free and takes less than a minute!</p>
      </div>

    </section>
  )
}

export default HeroSection