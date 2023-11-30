import React, { useState } from "react";
import { Nav } from "../assets/components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import iconSignout from "../assets/images/ic_log-out.png";
import iconStar from "../assets/images/ic-star.png";
import iconLevel from "../assets/images/ic-level.png";
import iconModul from "../assets/images/ic-modul.png";
import iconTime from "../assets/images/ic-time.png";
import iconPremium from "../assets/images/ic-premium.png";
import { MenuAkun } from "../assets/components/MenuAkun";
import img from "../assets/images/kursus.png";

export const AkunRiwayatPembayaran = () => {
  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-black" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-black " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-purple-700 font-bold " },
    { label: "Keluar", link: "/login", img: iconSignout, textColor: "text-black " },
  ];
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
          <h3 className="text-white text-xl py-6 text-center">Akun</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center  ">
        <div style={{ border: "1px solid #7E22CE" }} className="  w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          <div className="flex">
            <div className="w-1/2  p-5 box-border">
              <MenuAkun menus={propsMenu} />
            </div>
            <div className="w-1/2">
              <div className="flex flex-col w-full px-2 justify-center items-center my-10 gap-3 ">
                <h3 className="mb-5">Riwayat Pembayaran</h3>
                <div className="flex flex-col gap-5 w-[80%]">
                  <div className="flex flex-col bg-white border-2  rounded-3xl w-full">
                    <img src={img} placeholder="img" />
                    <div className="px-2 mt-2">
                      <div className="flex justify-between items-center">
                        <p className="text-purple-700 font-bold ">UI/UX Design</p>
                        <p className="text-xs flex justify-center items-center gap-1">
                          <img src={iconStar} placeholder="img" />
                          4.7
                        </p>
                      </div>
                      <p className="text-black font-bold mt-1">Belajar Web Designer dengan figma</p>
                      <p className="text-black text-sm mt-1">By Angela Doe</p>
                      <div className="flex gap-2 justify-around text-xs mt-2">
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconLevel} placeholder="img" />
                          <p className="font-semibold text-purple-900">Intermediate Level</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconModul} placeholder="img" />
                          <p className="font-semibold">10 Modul</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconTime} placeholder="img" />
                          <p className="font-semibold">120 Menit</p>
                        </div>
                      </div>
                      <div>
                        <button className=" mt-2 py-2 flex justify-between items-center rounded-full px-3 border-0 cursor-pointer  bg-[#FF0000] font-semibold text-xs text-white hover:bg-purple-900 ">
                          <div className="flex justify-center items-center gap-1">
                            <img src={iconPremium} placeholder="img" />
                            Waiting For Payment
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white border-2  rounded-3xl w-full">
                    <img src={img} placeholder="img" />
                    <div className="px-2 mt-2">
                      <div className="flex justify-between items-center">
                        <p className="text-purple-700 font-bold ">UI/UX Design</p>
                        <p className="text-xs flex justify-center items-center gap-1">
                          <img src={iconStar} placeholder="img" />
                          4.7
                        </p>
                      </div>
                      <p className="text-black font-bold mt-1">Belajar Web Designer dengan figma</p>
                      <p className="text-black text-sm mt-1">By Angela Doe</p>
                      <div className="flex gap-2 justify-around text-xs mt-2">
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconLevel} placeholder="img" />
                          <p className="font-semibold text-purple-900">Intermediate Level</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconModul} placeholder="img" />
                          <p className="font-semibold">10 Modul</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <img src={iconTime} placeholder="img" />
                          <p className="font-semibold">120 Menit</p>
                        </div>
                      </div>
                      <div>
                        <button className=" mt-2 py-2 flex justify-between items-center rounded-full px-3 border-0 cursor-pointer  bg-green-500 font-semibold text-xs text-white hover:bg-purple-900 ">
                          <div className="flex justify-center items-center gap-1">
                            <img src={iconPremium} placeholder="img" />
                            Paid
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
