import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};

function Projects({}: Props) {
  const imgRef = useRef(null);

  useGSAP(() => {
    const blog = document.querySelectorAll(".blogs");
    blog.forEach(function (elem) {
      elem.addEventListener("mouseenter", function (e) {
        gsap.to(elem.childNodes[0], {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      });
      elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[0], {
          opacity: 0,
          scale: 0,
          ease: "power3.out",
        });
      });
      elem.addEventListener("mousemove", function (e: any) {
        gsap.to(elem.childNodes[0], {
          duration: 1,
          yoyo: true,
          x: e.clientX - elem.getBoundingClientRect().x,
          y: e.clientY - elem.getBoundingClientRect().y,
          ease: "power2",
        });
      });
    });
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex w-full flex-col justify-center md:flex-row gap-10">
          <div className="w-full md:w-[35vw] flex flex-col text-start justify-center items-center">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border-y blogs hover-content py-7 px-2 w-full cursor-pointer relative"
              >
                <div
                  ref={imgRef}
                  className={`absolute top-0 left-0  flex pointer-events-none justify-center items-center translate-x-[-50%] translate-y-[-50%] text-center  ${project.bgColor} text-black font-medium text-[12px] opacity-0 w-[70%] h-[15rem] hover-content`}
                ></div>
                <span className="relative text-[1vw]">
                  {project.projectName}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center  text-[6vw] leading-none">
            <span>Works</span>
            <span>I have</span>
            <span>Done</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

const projects = [
  { id: 1, projectName: "Project Alpha", bgColor: "bg-red-500" },
  { id: 2, projectName: "Project Beta", bgColor: "bg-blue-500" },
  { id: 3, projectName: "Project Gamma", bgColor: "bg-green-500" },
  { id: 4, projectName: "Project Delta", bgColor: "bg-yellow-500" },
];
