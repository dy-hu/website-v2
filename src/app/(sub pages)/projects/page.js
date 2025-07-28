"use client"
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Chips = dynamic(() => import("@/components/models/Chips"), { ssr: false });

export default function Home() {
  return (
    <>
      <Image priority sizes="100vw" src={bg} alt="background-image" className="-z-50 fixed top-0 left-0  w-full h-full object-cover object-center opacity-90 blur-[2px]" />
    
    <ProjectList projects={projectsData}/>

    <div className='flex items-center justify-center fixed top-16 lg:top-20 
    -translate-x-1/2 lg:translate-x-0 -z-10

    lg:left-8 left-1/2 
     h-screen'>
    <RenderModel>
        <Chips />
    </RenderModel>
    </div>
    </>
  );
}
