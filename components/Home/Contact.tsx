import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          <span className="text-8xl">Let's talk</span>
          <div className="flex gap-5">
            <span>by mail</span>

            <span>by phone</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
