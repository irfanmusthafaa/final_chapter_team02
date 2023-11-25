import React from "react";
import banner from "../images/banner3.png";
import { Button } from "antd";

export const Hero = () => {
  return (
    <>
      <div className="flex  bg-purple-200 w-full">
        <div className="w-1/2 my-auto ml-5 ">
          <div className="pl-8">
            <h1 className="text-[3rem] font-bold">Belajar</h1>
            <h1 className="text-[3rem] font-bold">dari Praktisi Terbaik!</h1>
            <p className="py-5 w-3/4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem magnam hic, consequuntur impedit dolorem corporis velit tempore odit
              perferendis dignissimos aut cupidita
            </p>
            <button size="large" className="bg-purple-700 px-10 py-4 border-none rounded-lg text-white  font-bold cursor-pointer hover:bg-purple-900">
              Lihat Kelas
            </button>
          </div>
        </div>
        <div className=" w-1/2 text-center">
          <img src={banner} placeholder="banner" className="w-3/4" />
        </div>
      </div>
    </>
  );
};
