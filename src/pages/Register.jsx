import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from '../assets/img/logo.png'
import { useNavigate } from "react-router-dom";

export const Register = () => {

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-2">
          <h2 className="text-[#7c3aed]">Daftar</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nama</label>
            <Input className="border rounded-lg" type="text" placeholder="Nama Lengkap" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input className="border rounded-lg" type="email" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nomor Telepon</label>
            <Input className="border rounded-lg" type="text" placeholder="+62." />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Password</label>
            <Input.Password
              placeholder="Buat Password" type="password"
              iconRender={(visible) =>
                visible ? <EyeInvisibleOutlined /> : <EyeOutlined />
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <button className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-lg mt-2">
              Daftar
            </button>
          </div>
        </div>
        <div flex flex-row text-center>
          <label className="font-medium text-xs">Sudah punya akun? </label>
          <label className="text-[#7c3aed] font-medium text-xs" onClick={handleLoginClick} style={{ cursor: 'pointer' }}>
            Masuk di sini
          </label>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600 flex justify-center items-center">
      <img src={image} className="w-1/2" alt=''/>
      </div>
    </div>
  );
};
