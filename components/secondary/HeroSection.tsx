import React, { FC } from 'react'
import { StarIcon } from '../icons'
import { Button } from '../lib'
import { useTransform, useScroll, motion } from 'framer-motion'

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
       
        <PhotoItem
          rightSettings={{start:"10%", stop: "-20%"}}
          topSettings={{start:"20vh", stop: "50vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"10deg", stop: "-20deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_4.png"
        />

        <PhotoItem
          rightSettings={{start:"0%", stop: "-15%"}}
          topSettings={{start:"45vh", stop: "55vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"10deg", stop: "-10deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_7.png"
        />

        <PhotoItem
          rightSettings={{start:"10%", stop: "-20%"}}
          topSettings={{start:"66vh", stop: "80vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"-5deg", stop: "10deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_8.png"
        />
      

       <PhotoItem
          leftSettings={{start:"0%", stop: "-10%"}}
          topSettings={{start:"15vh", stop: "20vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"3deg", stop: "0deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_1.png"
        />

        <PhotoItem
          leftSettings={{start:"6%", stop: "-20%"}}
          topSettings={{start:"36vh", stop: "55vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"-5deg", stop: "10deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_2.png"
        />

        <PhotoItem
          leftSettings={{start:"0%", stop: "-20%"}}
          topSettings={{start:"62vh", stop: "95vh"}}
          opacitySettings={{start:"1", stop: "-1"}}
          rotateSettings={{start:"6deg", stop: "20deg"}}
          imageUrl="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_3.png"
        />
      
        </div>

    </section>
  )
}

type AnimationType = {start:string, stop: string}
type PropsType  = {
  imageUrl: string,
  leftSettings?: AnimationType,
  rightSettings?: AnimationType,
  topSettings: AnimationType,
  rotateSettings: AnimationType,
  opacitySettings: AnimationType
}

const PhotoItem:FC<PropsType> = ({
  imageUrl,
  topSettings,
  leftSettings,
  rightSettings,
  rotateSettings,
  opacitySettings,
}) => {
  const { scrollYProgress } = useScroll()
  const right = rightSettings && useTransform(scrollYProgress, [0, 1], [rightSettings.start, rightSettings.stop])
  const top = useTransform(scrollYProgress, [0, 1], [topSettings.start, topSettings.stop])
  const rotate = useTransform(scrollYProgress, [0, 1], [rotateSettings.start, rotateSettings.stop])
  const opacity = useTransform(scrollYProgress, [0, 1], [opacitySettings.start, opacitySettings.stop])
  const left = leftSettings && useTransform(scrollYProgress, [0, 1], [leftSettings?.start, leftSettings?.stop])
  return(
    <motion.div
    className="hover:scale-105 transform top-[150vh]rounded-full"
    style={{
      position: "absolute",
      right,
      top,
      rotate,
      opacity,
      left
    }}
    >
      <img 
        src={imageUrl} width="192" height="172" 
        className=" border border-gray-300 rounded-2xl  shadow-lg "
        />
    </motion.div>
  )
}



export default HeroSection