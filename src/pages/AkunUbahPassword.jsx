import React, { useState } from "react";
import { Nav } from "../assets/components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import iconSignout from "../assets/images/ic_log-out.png";
import { Input, message, Upload } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { MenuAkun } from "../assets/components/MenuAkun";

export const AkunUbahPassword = () => {
  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-black" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-purple-700 font-bold " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-black " },
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
              <div className="flex flex-col w-full px-3 justify-center items-center my-10 gap-3 ">
                <h3 className="mb-5">Ubah Password</h3>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Masukkan Password Lama</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Masukkan Password Lama"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Masukkan Password Baru</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Masukkan Password Baru"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                  />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Ulangi Password Baru</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Ulangi Password Baru"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                  />
                </div>

                <button className="w-3/4 py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2">
                  Ubah Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
