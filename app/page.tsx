"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Background from "@/public/bg.jpeg";
import Homemain from "@/components/Home/Homemain";
import { gsap } from "gsap";

export default function Home() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const onMouseMove = (e:any) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* custom cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full z-50 pointer-events-none"
      ></div>
      <main className="w-full h-auto flex justify-center items-center bg-black text-white">
        <Image
          className="fixed top-0 left-0 w-full h-full"
          src={Background}
          alt="grainy-background-portfolio"
        ></Image>

        <Homemain />
      </main>
    </>
  );
}
