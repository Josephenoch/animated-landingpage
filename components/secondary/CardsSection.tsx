import React from 'react'
import { CreativityCard, MagicianCard, SVGCard } from './Cards'

const CardsSection = () => {
  return (
    <section className="max-w-[1430px] mt-20 px-20 flex justify-between">
      <MagicianCard/>
      <SVGCard/>
      <CreativityCard/>
    </section>
  )
}

export default CardsSection