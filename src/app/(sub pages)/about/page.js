"use client"
import Image from "next/image";
import bg from "../../../../public/background/about-background.png"
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const Yakult = dynamic(() => import("@/components/models/Yakult"), { ssr: false });


export default function Home() {
  return (
    <>
      <Image priority sizes="100vw"  src={bg} alt="background-image" className="-z-50 fixed top-0 left-0  w-full h-full object-cover object-center opacity-90 blur-[2px]" />
    
    <div className='w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none'>
    <RenderModel>
        <Yakult />
    </RenderModel>
    </div>

    <div className='relative w-full h-screen flex flex-col items-center justify-center'>
      <div className='absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='font-bold text-5xl xs:text-6xl lg:text-8xl text-accent'>Hi, I&apos;m Dan.</h1>
        {/* <p className='font-light text-foreground text-lg'>I'm a software engineer at GitHub Copilot.</p> */}
      </div>
    </div>

    <AboutDetails />
    </>
  );
}
