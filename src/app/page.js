"use client"
import Image from "next/image";
import bg from "../../public/background/home-background.png"
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import RainBackground from "@/components/RainBackground";
import dynamic from "next/dynamic";

const Umbrella = dynamic(() => import("@/components/models/Umbrella"), { ssr: false });

export default function Home() {
  return (
    <>
      <RainBackground />
      <main className="flex min-h-screen flex-col items-center justify-between relative">
        <Image priority sizes="100vw" src={bg} alt="background-image" fill className="-z-50 w-full h-full object-cover object-center opacity-90 blur-[2px]" />

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation />
        <RenderModel>
          {/* <Umbrella /> */}
          <Umbrella />
        </RenderModel>
      </div>

    </main>
    </>
  );
}
