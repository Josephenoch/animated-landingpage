import { Wand } from '@/components/lib';
import React, { FC, useRef, useState } from 'react';

const initialState = {
    x: 400,
    y: 200
};

const SVGCard = () => {
    const [mousePosition, setMousePosition] = useState({...initialState});
    const [isLeaving, setIsLeaving] = useState(false);
    const divRef = useRef({} as HTMLDivElement);

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
            setIsLeaving(false); // Remove transition class during mouse move
        }
    };

    const handleMouseLeave = () => {
        setMousePosition({...initialState});
        setIsLeaving(true); // Add transition class when mouse leaves
    };
    console.log(mousePosition.x < divRef.current?.clientWidth / 2 ? `-${mousePosition.x*0.01}deg` : `${(mousePosition.x*0.01) + 2}deg`)
    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="z-20 group bg-[#1b1b1e] cursor-pointer h-[400px] w-[50%] rounded-2xl border-[0.5px] border-gray-600 overflow-hidden relative p-6"
        >
            <div className="z-[10000] relative w-80">
                <p className="text-white text-xl">Generate SVG icons for anything</p>
                <p className="text-white/60 text-sm mt-2">Magic Icon generates infinitely scalable SVG icons to use anywhere in your design.</p>
            </div>

            <div className="grid grid-cols-7 absolute -left-8 mt-2">
                {images.map(item => <CardItem key={item} imageUrl={item} />)}
            </div>
            <div
                style={{
                    top: mousePosition.y - 20,
                    left: mousePosition.x,
                    rotate: mousePosition.x < divRef.current?.clientWidth / 2 ? `-${mousePosition.x*0.006}deg` : `${(mousePosition.x*0.01) + 6}deg`
                }}
                className={`top-[0px] z-10 h-[480px] w-full absolute ${isLeaving ? 'transition-all duration-500' : 'transition-[rotate]'}`}
            >
                <div
                    style={{
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        filter: 'blur(20px)',
                    }}
                    className="absolute -top-[60%] -left-[50px] w-[150%] h-[160%] bg-[#1b1b1e]"
                >
                </div>
                <Wand className="absolute z-20 -left-60 top-[216px] rotate-[265deg] shadow-none" />
            </div>
        </div>
    );
};

export default SVGCard;
type CardItemPropsType = {
    imageUrl: string,
}

const CardItem: FC<CardItemPropsType> = ({ imageUrl }) => {
    return (
        <div className="mx-2 mt-6 flex items-center justify-center size-20 bg-[#343238] shadow-black shadow-lg rounded-2xl">
            <img src={imageUrl} loading="eager" alt="Icon" />
        </div>
    );
}

const images =[
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216acdd7b9d4820493809_%E2%9C%A8%20basketball.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216acc6ee883fa620a3be_%E2%9C%A8%20music%20note.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac36b4eb19a211479c_%E2%9C%A8%20dog%20riding%20surfboard.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad394f80dd19dc5744_%E2%9C%A8%20traffic%20cone%20simple.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad51944257e5f21e6f_%E2%9C%A8%20slice%20of%20pizza.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216acd18040492610802f_%E2%9C%A8%20mario%20portrait.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216add18040b8f6108030_%E2%9C%A8%20pencil.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/6411f9225228f4ba089bf889_wizard%20with%20binoculars-1.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac504eb83f4f4885be_%E2%9C%A8%20mountain.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad5194427dc3f21e55_%E2%9C%A8%20nike%20shoes.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ae0ba06e07afcc6f5b_%E2%9C%A8%20steve%20jobss%20portrait.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac0d10fa4b79f3bda9_%E2%9C%A8%20game%20controller.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad15bc90537a2fd6fb_%E2%9C%A8%20planet.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac464b2e28d5941f45_%E2%9C%A8%20castle.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216add6b84398102d7341_%E2%9C%A8%20watch.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac03b6add236dab63b_%E2%9C%A8%20beyoncee.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad15bc90503b2fd6fc_wizard%20with%20binoculars.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216acd4e33e6535da4238_%E2%9C%A8%20lobster.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216acdd7b9d089f493808_%E2%9C%A8%20happy%20cat.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ac6d492c5410bc7cdd_%E2%9C%A8%20lipstick.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad6d492c4a2abc7cef_%E2%9C%A8%20ufo.svg",
    "https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/641216ad3b076a8eaffa1318_wizard%20looking%20through%20binoculars.svg"
]
