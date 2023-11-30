import React from "react";
import searchIcon from "../../images/icon-search3.png";

export const NavbarAdmin = () => {
  return (
    <div className="bg-purple-200 h-16 flex justify-between items-center px-16">
      <div>
        <h3 className="text-purple-700 font-bold">Hi, Admin!</h3>
      </div>
      <div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari"
            className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[200px] h-[32px] "
          />
          <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
            <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};
