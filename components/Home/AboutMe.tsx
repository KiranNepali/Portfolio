import React from "react";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="flex md:flex-row flex-col w-full justify-center gap-10">
          <div className="flex flex-col  justify-center items-end text-[6vw] leading-none">
            <span>Who</span>
            <span>Am</span>
            <span>I</span>
          </div>
          <div className="md:w-[35vw] text-[1.5vw] w-full  md:text-left text-right  flex flex-col gap-5">
            <span>Hey!</span>
            <span>I am Kiran</span>
            <span>A creative frontend developer focusing on Next.js.</span>
            <span>
              I have been working with web technologies for 6 years, 145 days,
              35 seconds
            </span>
            <span>
              During this period, I gained hands-on experience with developing
              full-stack web applications and CI/CD automation.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
