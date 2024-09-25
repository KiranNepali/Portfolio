import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function Contact({}: Props) {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center md:items-center flex-col gap-10">
          <span className="text-[6vw] leading-none">Let's talk</span>
          <div className="w-full  flex justify-start md:justify-center gap-10 text-[1.5vw]">
            <span className="cursor-pointer">
              <Icon icon="mdi:email" />
            </span>
            <span className="cursor-pointer">
              <Icon icon="mdi:phone" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
