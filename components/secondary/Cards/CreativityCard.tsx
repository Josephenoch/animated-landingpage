import React from 'react'
import styles from "./creativity.module.css"
const CreativityCard = () => {
  return (
    <div className={`${styles.group} group bg-[#1b1b1e] group cursor-pointer z-20 h-[400px] w-[22%] rounded-2xl border-[0.5px] border-gray-600 overflow-hidden relative p-6`}>
        <p className="text-white text-xl">Conjure up creativity</p>
        <p className="text-white/60 text-sm mt-2">Magician demystifies the creative process by magically turning your ideas into assets.</p>

        <div className={`${styles.coin} flex items-center mt-8 flex-col relative`}>
            <div className={styles["coin-inner"]}>
                <div className={`${styles["coin-face"]} bg-[#343238] flex items-center justify-center rounded-3xl`}>
              
                <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/64123c0fe6400449a82646ea_magic-image-icon.svg" alt="Front" className="size-28" />
                </div>
                <div 
                    style={{
                        backgroundImage: "url(https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641b4896a9f39028f2730069_conjure-image.png)"
                    }}
                className={`${styles["coin-face"]} ${styles["back"]} bg-cover rounded-3xl`}/>
            </div>
            <div className={`${styles["coin2-inner"]} top-[80%] left-4`}>
                <div>
                <div className={`${styles["coin2-face"]} bg-[#343238] flex items-center justify-center rounded-lg`}>
              
                    <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641b699fd16746c6845bcb33_magic-icon-icon.svg" alt="Front" className="size-10" />
                </div>
            
                <div className={`${styles["coin2-face"]} ${styles["back"]}  bg-[#343238] flex items-center justify-center rounded-lg`}>
                    <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641b49da2de1641a4a866a9f_%E2%9C%A8%20astronaut%20with%20palm%20tree.svg" alt="Front" className="size-10" />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CreativityCard