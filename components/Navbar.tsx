import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="fixed top-[50%] z-10 right-0 -translate-y-[50%]">
      {/* nav  */}
      <div className="flex flex-col gap-20  justify-center items-center">
        {/* links  */}
        {["About me", "Projects", "My stack", "Let's talk"].map(
          (link, index) => (
            <span key={index} className="rotate-[90deg] cursor-pointer">
              {link}
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
