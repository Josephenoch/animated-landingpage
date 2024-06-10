import React from 'react'

const Wand = () => {
  return (
    <div  
        style={{
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
            transformStyle: "preserve-3d", 
            opacity: 1
        }} 
        className="flex w-fit space-x-0">
            <WandShaft/>
            <WandTip/>
    </div>
  )
}

const WandShaft = () => {
    return (
        <div className="w-96 bg-black shadow-xl  h-14 rounded-l-xl flex items-center justify-end">
            <WandStreak/>
        </div>
    )
}



const WandTip = () => {
    return(
       <div className="w-20 bg-white rounded-r-xl shadow-xl"/>
    )
}

const WandStreak = () => {
    return(
        <div className="w-0 h-0"
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