import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 p-2 pb-4">
      <div className="w-12 h-12 flex-none rounded-full bg-gradient-to-r from-[#4C3BCF] to-[#3572EF] text-neutral-100 flex justify-center items-center text-2xl">
        P
      </div>
      <p className="text-xl text-black">PadiPos</p>
    </div>
  );
};

export default Logo;
