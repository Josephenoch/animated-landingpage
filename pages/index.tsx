import { Wand, WandParticles } from "@/components/lib";
import { CardsSection, HeroSection } from "@/components/secondary";
import Nav from "@/layout/Nav";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const  [bgColor, setBgColor] = useState("bg-white")

  const listenScrollEvent = (e:Event) => {
    if(window.scrollY > 600 ) {
      setBgColor("bg-[#0f0f12]")
    }
    else if (window.scrollY > 20) {
      setBgColor("bg-[#FAF8F0]")
    } 
    else {
      setBgColor("bg-white")
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  },[])
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);
  return init && (
    <main className={`${bgColor} duration-500 transition-all min-h-screen overflow-hidden flex flex-col items-center `}
    >
     <Nav/>
     <HeroSection/>
     <div className="h-screen ">
      <div className="flex flex-col mt-40 items-center justify-center relative">
      <Wand/>
      <WandParticles className="absolute -top-60"/> 
      </div>
      <CardsSection/>
     </div>
    </main>
  );
}
