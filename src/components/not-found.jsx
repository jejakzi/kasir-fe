import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[144px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4C3BCF] to-[#3572EF]">
          404
        </h1>
        <p className="-mt-8 text-3xl font-roboto-bold">Page Not Found</p>
        <p className="-mt-2 text-neutral-500 font-roboto-light">The page you are looking for does not exist</p>
        <span className="text-sm font-roboto-light">
          back to <Link to="/" className="text-primary-500 font-roboto-bold">Home</Link>
        </span>
      </div>
    </div>
  );
};

export default NotFoundPage;
