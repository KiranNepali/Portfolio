import React from "react";

type Props = {};

function Projects({}: Props) {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex gap-10">
        <div className="flex flex-col  justify-center items-end text-7xl">
            <span>Works</span>
            <span>I have</span>
            <span>Done</span>
          </div>
          <div className="flex flex-col text-start justify-center items-center">
            <div className="border-y py-7 px-2 w-[35vw]  cursor-pointer">
              project 1
            </div>
            <div className="border-y py-7 px-2 w-[35vw]  cursor-pointer">
              project 2
            </div>
            <div className="border-y py-7 px-2 w-[35vw]  cursor-pointer">
              project 3
            </div>
            <div className="border-y py-7 px-2 w-[35vw]  cursor-pointer">
              project 4
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Projects;
