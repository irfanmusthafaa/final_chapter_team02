import React from "react";
import { Nav } from "../assets/components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";
import iconNotifikasi from "../assets/images/icon-notif.png";

export const Notifikasi = () => {
  return (
    <>
      <Nav />
      <div className="bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} />
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[60%] bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Notifikasi</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center  ">
        <div style={{ border: "1px solid #7E22CE" }} className="  w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          <div className=" flex  px-10">
            <div className="flex justify-between w-full mt-10">
              <div className="flex gap-2 ">
                <div>
                  <img src={iconNotifikasi} alt="icon notif" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-purple-700">Promosi</p>
                  <p className="font-semibold">Dapatkan Potongan 50% Selama bulan Maret</p>
                  <p className="text-gray-500">Syarat dan Ketentuan Berlaku</p>
                </div>
              </div>
              <div className="flex justify-center items-center text-sm gap-2">
                <p className="text-gray-700 text-sm">2 Mar, 12.00</p>
                <FontAwesomeIcon icon={faCircle} className="text-green-500" />
              </div>
            </div>
          </div>
          <div className="flex  px-10">
            <div className="flex justify-between w-full mt-10">
              <div className="flex gap-2 ">
                <div>
                  <img src={iconNotifikasi} alt="icon notif" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-purple-700">Promosi</p>
                  <p className="font-semibold">Dapatkan Potongan 50% Selama bulan Maret</p>
                  <p className="text-gray-500">Syarat dan Ketentuan Berlaku</p>
                </div>
              </div>
              <div className="flex justify-center items-center text-sm gap-2">
                <p className="text-gray-700 text-sm">2 Mar, 12.00</p>
                <FontAwesomeIcon icon={faCircle} className="text-green-500" />
              </div>
            </div>
          </div>
          <div className="flex  px-10">
            <div className="flex justify-between w-full mt-10">
              <div className="flex gap-2 ">
                <div>
                  <img src={iconNotifikasi} alt="icon notif" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-purple-700">Promosi</p>
                  <p className="font-semibold">Dapatkan Potongan 50% Selama bulan Maret</p>
                  <p className="text-gray-500">Syarat dan Ketentuan Berlaku</p>
                </div>
              </div>
              <div className="flex justify-center items-center text-sm gap-2">
                <p className="text-gray-700 text-sm">2 Mar, 12.00</p>
                <FontAwesomeIcon icon={faCircle} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
