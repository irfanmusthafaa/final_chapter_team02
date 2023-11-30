import React from "react";
import { Nav } from "../assets/components/Nav";
import img from "../assets/img/🦆 illustration _Cart shopping list_.png";
import { useNavigate } from "react-router-dom";

export const SuksesPembayaran = () => {
  const navigate = useNavigate();

  const handleBerandaClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Nav />
      <div className="w-full h-screen">
        <div className="px-[5rem] py-[2rem] flex flex-col shadow-lg">
          <div className="flex justify-center items-center">
            <div className="bg-[#73CA5C] w-2/3 flex justify-center items-center rounded-lg text-white font-semibold text-sm h-[2.5rem]">
              Terimakasih atas pembayaran transaksi
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-[1rem]">
          <h2 className="text-purple-700">Selamat!</h2>
          <img src={img} className="w-fit h-[10rem]" alt="" />
          <label className="text-xs font-semibold pt-[1rem]">
            Transaksi pembayaran kelas premium berhasil!
          </label>
          <label className="text-xs font-medium">
            E-receipt telah dikirimkan melalui email.
          </label>
          <button className="w-[15rem] bg-purple-700 text-white font-semibold border-0 h-8 rounded-2xl mt-5">
            Mulai Belajar
          </button>
          <label
            className="text-[#489CFF] text-xs font-semibold pt-1"
            onClick={handleBerandaClick}
            style={{ cursor: "pointer" }}
          >
            Kembali ke Beranda
          </label>
        </div>
      </div>
    </div>
  );
};
