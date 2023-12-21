import React from "react";
import { Navbar } from "../assets/components/Navbar";
import img from "../assets/img/🦆 illustration _Cart shopping list_.png";

export const SuksesPembayaran = () => {
  const whatsappUrl = `https://wa.me/6281313436773`;
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="h-screen flex flex-col justify-center items-center gap-2 pt-[1rem]">
          <h3 className="text-purple-700 pb-[1rem]">Pembayaran Anda Telah Di Proses</h3>
          <img src={img} className="w-fit h-[10rem]" alt="" />
          <label className="text-xs font-semibold pt-[1rem]">
            Chat Admin untuk Konfirmasi Pembayaran!
          </label>
          <button className="w-[15rem] bg-purple-700 font-semibold border-0 h-8 rounded-2xl mt-5 hover:bg-purple-900 ">
            <a href="{whatsappUrl}" target="_blank" rel="noopener noreferrer" className="no-underline text-white cursor-pointer">Chat Admin</a>
          </button>
        </div>
      </div>
    </div>
  );
};
