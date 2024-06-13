import { Wand } from '@/components/lib'
import React from 'react'

const MagicianCard = () => {
  return (
    <div className=" group bg-[#1b1b1e] z-20 cursor-pointer h-[400px] w-[22%] rounded-2xl border-[0.5px] border-gray-600 overflow-hidden relative p-6">
        <p className="text-white text-xl">Design with AI magic</p>
        <p className="text-white/60 text-sm mt-2">Unlock your creativity and bring ideas to life with AI-powered design utilities.</p>
        <div className="absolute -left-[20%]  group-hover:left-[150%] duration-1000">

        <InitialState/>
        <WandState/>
        <FinalState/>
        </div>

    </div>
  )
}

const InitialState = () => {
  return(
    <>
        <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8.png" loading="lazy" alt="Magic sparkle" sizes="(max-width: 1279px) 80px, (max-width: 1439px) 6vw, 80px" srcSet="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-500.png 500w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-800.png 800w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-1080.png 1080w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8.png 1201w" className="absolute top-10 left-[20%] group-hover:-top-10 group-hover:rotate-180  duration-1000 group-hover:scale-[80%] z-10"/>
        <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8.png" loading="lazy" alt="Magic sparkle" sizes="160px" srcSet="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-500.png 500w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-800.png 800w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8-p-1080.png 1080w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6418f446183d39c4a3d8c69f_%F4%80%AB%B8.png 1201w" className="absolute top-20 group-hover:top-60 group-hover:rotate-180 left-[30%] duration-1000 group-hover:scale-[60%]"></img>
    </>
  )
}

const WandState = () => {
  return(
    <div className="w-full">
    <Wand className="rotate-[265deg] relative -left-[60%] top-[340px] py-10 bg-[#1b1b1e] rounded-full z-10 group-hover:rotate-[275deg] duration-1000" />
      <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641a223cb8c402fc3b141b77_wand-beam.png" loading="eager" data-w-id="91d287b8-e6da-98c4-bf09-734b1a9adbfe" alt="Beam of magic from wand" srcSet="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641a223cb8c402fc3b141b77_wand-beam-p-500.png 500w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641a223cb8c402fc3b141b77_wand-beam.png 536w" sizes="(max-width: 1919px) 98.29847717285156px, 5vw" className="relative -left-[23.5%] -rotate-[5deg] group-hover:rotate-[5deg] -top-[20px] blur-sm  duration-1000 group-hover:-left-[16%] group-hover:scale-y-150 rounded-xl"/>
    
    </div>
  )
}

const FinalState = () => {
  return(
    <div className="absolute top-4 -left-[84%] w-[250px] -rotate-[20deg] group-hover:rotate-0 duration-1000 rounded-3xl h-80 border-[0.5px] border-gray-700 flex flex-col items-center shadow-lg shadow-gray-800">
      <img src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6423553b5f7e114147decea9_TopNavigation.png" loading="lazy" alt="iOS nav bar" sizes="228px" srcSet="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6423553b5f7e114147decea9_TopNavigation-p-500.png 500w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6423553b5f7e114147decea9_TopNavigation.png 694w" className="magic-app-top-nav"></img>
    </div>
  )
}
export default MagicianCard