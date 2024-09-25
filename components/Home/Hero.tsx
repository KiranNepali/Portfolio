import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full flex md:flex-row flex-col h-[192px] justify-center items-start md:items-center  gap-10">
          {/* left  */}
          <div className="flex order-2 md:order-first h-full justify-end  md:text-end flex-col">
            <div className="flex flex-col gap-2">
              <span className="text-[2vw]">Frontend Designer</span>
              <span className="text-[1vw]">Ktm, Nepal</span>
            </div>

            {/* socio links  */}
            <div className="flex gap-2 text-[1.5vw] w-full justify-end">
              <span>
                <Icon icon="mdi:linkedin" />
              </span>
              <span>
                <Icon icon="mdi:github" />
              </span>
              <span>
                <Icon icon="mdi:email" />
              </span>
            </div>
          </div>
          {/* right  */}
          <div className="flex flex-col  font-medium text-[7vw] leading-none">
            <span>Kiran</span>
            <span>Nepali</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
