import React from "react";

type Props = {};

function MyStack({}: Props) {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center text-7xl">
          <span>My</span>
          <span>Amazing</span>
          <span>Stack</span>
        </div>
      </div>
    </div>
  );
}

export default MyStack;
