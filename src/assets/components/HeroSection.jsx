import { Button } from "antd";
import banner from "../images/Banner.png";

export const HeroSection = () => {
  return (
    <>
      <div className="flex w-full">
        <div className="w-[60%] relative">
          <img src={banner} alt="banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-700"></div>
        </div>
        <div className="w-[40%]  bg-purple-700 flex flex-col justify-center ">
          <div className=" ">
            <h3 className="text-white font-bold mb-1">Belajar</h3>
            <h3 className="text-white font-bold mb-5">dari Praktisi Terbaik!</h3>
            <button
              size="large"
              className="bg-white px-10 py-3 cursor-pointer text-purple-700 font-bold rounded-full hover:bg-purple-900 hover:text-white border-0"
            >
              IKUTI KELAS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
