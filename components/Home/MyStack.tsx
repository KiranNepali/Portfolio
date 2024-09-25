"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
// import { InertiaPlugin } from "gsap/InertiaPlugin";

// Register plugins
gsap.registerPlugin(ScrollTrigger, Draggable);
type Props = {};

function MyStack({}: Props) {
  useGSAP(() => {
    // Animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stack-container",
        // markers: true,
        start: "top top",
        end: "50% -100%",
        scrub: 0.5,
        pin: ".stack-container",
      },
    });

    // Animations for each stack element
    tl.from(
      ".stack1",
      { left: "50%", opacity: 0, ease: "sine.out", duration: 0.5 },
      "stack"
    )
      .from(
        ".stack2",
        { left: "50%", opacity: 0, ease: "sine.out", duration: 0.5 },
        "stack"
      )
      .from(
        ".stack3",
        { left: "50%", opacity: 0, ease: "sine.out", duration: 0.5 },
        "stack"
      )
      .from(
        ".stack4",
        { left: "50%", opacity: 0, ease: "sine.out", duration: 0.5 },
        "stack"
      );

    tl.to(
      ".stack1",
      { top: "90%", rotate: "5deg", ease: "bounce.out", duration: 0.5 },
      "end"
    )
      .to(
        ".stack2",
        { top: "90%", rotate: "5deg", ease: "bounce.out", duration: 0.5 },
        "end"
      )
      .to(
        ".stack3",
        { top: "90%", rotate: "5deg", ease: "bounce.out", duration: 0.5 },
        "end"
      )
      .to(
        ".stack4",
        { top: "90%", rotate: "5deg", ease: "bounce.out", duration: 0.5 },
        "end"
      );

    // Make elements draggable with inertia and bounce effect
    // Draggable.create(".stack1", {
    //   // type: "x",
    //   bounds: ".stack-container",
    //   throwProps: true,
    //   edgeResistance: 1,
    //   inertia: true,
    // });
  });

  return (
    <div className="stack-container w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[50%] flex flex-col justify-center md:items-center items-start text-[6vw] relative leading-none">
          <div className="flex gap-2">
            <div className="w-[4rem] h-[4rem] rounded-full absolute stack1 top-0 left-0 bg-zinc-50 flex justify-center items-center">
              <Icon icon="devicon:nextjs" className="w-[3rem] h-[3rem]" />
            </div>
            <div className="w-[4rem] h-[4rem] rounded-full absolute stack2 top-0 right-0 bg-zinc-50 flex justify-center items-center">
              <Icon icon="devicon:react" className="w-[3rem] h-[3rem]" />
            </div>
            <div className="w-[4rem] h-[4rem] rounded-full absolute stack3 top-[50%] left-0 bg-zinc-50 flex justify-center items-center">
              <Icon icon="devicon:framermotion" className="w-[3rem] h-[3rem]" />
            </div>
            <div className="w-[4rem] h-[4rem] rounded-full absolute stack4 top-[50%] right-0 bg-zinc-50 flex justify-center items-center">
              <Icon icon="devicon:tailwindcss" className="w-[3rem] h-[3rem]" />
            </div>
          </div>
          <span>My</span>
          <span>Amazing</span>
          <span>Stack</span>
        </div>
      </div>
    </div>
  );
}

export default MyStack;
