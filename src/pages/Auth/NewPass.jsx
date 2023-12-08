import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";

export const NewPass = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-[#7c3aed]">Reset Password</h2>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Masukkan Password Baru</label>
            </div>
            <Input.Password
              placeholder="Masukkan Password Baru"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Ulangi Password Baru</label>
            </div>
            <Input.Password
              placeholder="Ulangi Password Baru"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div>
            <button className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-lg mt-2">Simpan</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
