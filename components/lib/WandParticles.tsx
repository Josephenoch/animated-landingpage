import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import Particles from "@tsparticles/react";
const WandParticles:FC<{className?:string}> = ({
  className: addedClassName
}) => {
 


  const className = twMerge(addedClassName," blur-xl -translate-x-1/2 left-1/2")
  return (
    <div className="w-fit">
    <Particles
    id="wand-particles"
    className="w-[600px] absolute -translate-x-1/2 left-1/2 z-20 h-[280px]"
    options={{
      "particles": {
        "number": {
          "value": 2000,
          "density": {
            "enable": true,
            // @ts-ignore
            "value_area": 500
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
            // @ts-ignore
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 2
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": .75,
            // @ts-ignore
          "random": false,
          "anim": {
            "enable": true,
            "speed": 1.75,
            "opacity_min": 1,
            "sync": false
          }
        },
        "size": {
          "value": 1,
            // @ts-ignore
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 50,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            // @ts-ignore
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "fullScreen": false,
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
            // @ts-ignore
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.1
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }}
    />

    <img  src="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow.png" loading="lazy" style={{opacity: 1}} alt="Glow from wand" srcSet="https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow-p-500.png 500w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow-p-800.png 800w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow-p-1080.png 1080w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow-p-1600.png 1600w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow-p-2000.png 2000w, https://uploads-ssl.webflow.com/6408bea3de5aef58b7e197d4/640b9dc643138c60b9280d4c_wand-glow.png 2111w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 752px, 980px" className={className}/>
    </div>
  )
}

export default WandParticles