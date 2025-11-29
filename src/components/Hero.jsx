import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  justify-center bg-[url('/images/hero-img.png')] bg-cover bg-no-repeat bg-center h-[500px] mr-16 ml-16 mt-[57px] rounded-3xl">
      <h1 className="text-white font-bold text-8xl text-center  w-[800px]">
        Find events you'll love here
      </h1>
      <div className="flex gap-4">
        <div className="flex gap-3 bg-white w-[642px] h-[60px] mt-[31px] p-6 items-center rounded-3xl">
          <FaSearch className="h-6 w-6" />
          <input
            className="w-[642px] h-[60px] outline-none"
            type="text"
            placeholder="Search events using location....."
          />
        </div>
        <button className="bg-indigo-500 text-white text-2xl w-[140px]  h-[60px] p-3 rounded-3xl mt-[31px] ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
