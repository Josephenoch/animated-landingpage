import { Wand } from "@/components/lib";
import { HeroSection } from "@/components/secondary";
import Nav from "@/layout/Nav";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const  [bgColor, setBgColor] = useState("bg-white")

  const listenScrollEvent = (e:Event) => {
    if(window.scrollY > (document.documentElement.scrollHeight/2) ) {
      setBgColor("bg-black")
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
  return (
    <main className={`${bgColor} duration-500 transition-all min-h-screen`}
    >
     <Nav/>
     <HeroSection/>
     <div className="h-screen ">
      {/* <Wand/> */}
     </div>
    </main>
  );
}
