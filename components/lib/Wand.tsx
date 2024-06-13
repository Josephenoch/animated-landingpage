import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type PropsType = {
    className?:string,
    wandTipClassName?: string
    wandShaftClassName?: string,
}

const Wand:FC<PropsType>= ({
    className:addedClasses,
    wandTipClassName,
    wandShaftClassName
}) => {
    const className = twMerge("flex w-fit space-x-0 z-20", addedClasses)
  return (
    <div className={className}>
            <WandShaft className={wandShaftClassName}/>
            <WandTip className={wandTipClassName}/>
    </div>
  )
}

const WandShaft:FC<{className?: string}> = ({
    className:addedClasses
}) => {
    const className = twMerge("w-96 bg-black shadow-xl  h-12 rounded-l-xl flex items-center justify-end",addedClasses)
    return (
        <div className={className}>
            <WandStreak/>
        </div>
    )
}



const WandTip:FC<{className?: string}> = ({
    className:addedClasses
}) => {
    const className = twMerge("w-24 bg-white rounded-r-xl shadow-xl",addedClasses)
    return(
       <div className={className}/>
    )
}

const WandStreak= () => {
    return(
        <div 
        className={"w-0 h-0"}
        style={{
            borderTop: "14px solid transparent",
            borderBottom: "14px solid transparent",
            borderRight:"500px solid rgba(255, 255, 255, 0.6)", 
            filter: "blur(16px)"
        }}
    >

    </div>
    )
}
export default Wand