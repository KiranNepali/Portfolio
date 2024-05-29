import React from "react";
import { Icon } from "@iconify/react";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex h-[192px]  gap-10">
          {/* left  */}
          <div className="flex h-full justify-end flex-col">
            <span>Frontend Designer</span>
            <span>Ktm, Nepal</span>

            {/* socio links  */}
            <div className="flex gap-2">
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
          <div className="flex flex-col  font-semibold  text-8xl">
            <span>Kiran</span>
            <span>Nepali</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
