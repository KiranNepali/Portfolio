"use client";
// app/layout.js
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { gsap } from "gsap";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Background from "@/public/bg.jpeg";
import Lenis from "lenis";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [loading, setLoading] = useState(true);
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const estimatedTime = 3000; // Simulate load time of 3 seconds
  //   const interval = 30; // Update progress every 30ms

  //   const intervalId = setInterval(() => {
  //     setProgress((prev) => {
  //       const nextProgress = Math.min(
  //         prev + 100 / (estimatedTime / interval),
  //         100
  //       );
  //       if (nextProgress === 100) {
  //         clearInterval(intervalId);
  //         setTimeout(() => setLoading(false), 500); // Smooth transition
  //       }
  //       return nextProgress;
  //     });
  //   }, interval);

  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   gsap.to("#progress", {
  //     width: `${progress}%`,
  //     duration: 0.1,
  //     ease: "linear",
  //   });
  // }, [progress]);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );

  // lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* {loading && ( */}
        {/* <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50 bg-black">
            <div className="w-4/5 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                id="progress"
                className="h-full bg-zinc-800"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-4 text-lg font-bold">{progress}%</div>
          </div> */}
        {/* )} */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
