import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const ResetPass = () => {
  const navigate = useNavigate();

  const handleRegistClick = () => {
    navigate("/register");
  };

  const handleForgetPass = () => {
    navigate("/reset-password");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-[#7c3aed]">Masuk</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email/No Telepon</label>
            <Input className="border rounded-lg" type="text" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Password</label>
              <label className="text-xs text-[#7c3aed]" onClick={handleForgetPass} style={{ cursor: "pointer" }}>
                Lupa Kata Sandi
              </label>
            </div>
            <Input.Password
              placeholder="Masukkan Password"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div>
            <button className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-lg mt-2">Masuk</button>
          </div>
        </div>
        <div className="flex flex-row text-center">
          <label className="font-medium text-xs">Belum punya akun? </label>
          <label className="text-[#7c3aed] font-medium text-xs" onClick={handleRegistClick} style={{ cursor: "pointer" }}>
            Daftar di sini
          </label>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
