"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Background from "@/public/bg.jpeg";
import Homemain from "@/components/Home/Homemain";
export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="w-full h-auto flex justify-center items-center bg-black text-white">
      <Image
        className="fixed top-0 left-0 w-full h-full"
        src={Background}
        alt="grainy-background-portfolio"
      ></Image>

      <Homemain />
    </main>
  );
}
