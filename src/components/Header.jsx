import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-50  h-20 border-b-2 border-gray-200 py-10 px-6 md:px-10 lg:px-20">
      <div className="w-full">
        <h1 className="text-4xl text-indigo-500 font-bold ">MavenFinder</h1>

        <div className="mr-16 hidden">icon</div>
      </div>
    </header>
  );
};

export default Header;
