import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginUser } from "../../services/auth/login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image2 from "../../assets/img/up logo.png";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: dataLogin, status, isSuccess, isError, error } = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.err);
    }
    if (isSuccess) {
      toast.success("Login Berhasil");

      setTimeout(() => {
        window.location.href = "/";
      }, 2500);
    }
  }, [status]);

  const loginUser = () => {
    if (!Email || !Password) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    dataLogin({
      email: Email,
      password: Password,
    });
  };

  const handleRegistClick = () => {
    navigate("/register");
  };

  const handleForgetPass = () => {
    navigate("/reset-password");
  };

  return (
    <div className="bg-purple-100 md:bg-white w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <a href="/" className="text-center">
          <img src={image2} className="w-1/6 md:hidden pt-3 " alt="Tech Academy" />
        </a>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-3">
        <div className="bg-white w-5/6 md:w-1/2 flex flex-col gap-3 p-4 rounded-xl shadow-xl">
          <h2 className="text-purple-700">Masuk</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg text-base" type="text" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between mt-2">
              <label className="font-normal text-sm">Password</label>
              <label className="text-xs text-purple-700" onClick={handleForgetPass} style={{ cursor: "pointer" }}>
                Lupa Kata Sandi
              </label>
            </div>
            <Input.Password
              onChange={handleInput}
              className="text-base"
              id="password"
              placeholder="Masukkan Password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>

          <div>
            <div className="flex justify-end">
              <label className="text-xs text-purple-700 hover:text-purple-900" onClick={() => navigate("/activation")} style={{ cursor: "pointer" }}>
                Aktivasi Akun
              </label>
            </div>
            <button
              onClick={() => {
                loginUser();
              }}
              className="w-full py-3 bg-purple-700 text-white font-medium border-0 rounded-lg mt-2 hover:bg-purple-900 cursor-pointer"
            >
              <label className="text-base">Masuk</label>
            </button>
          </div>
          <div className="flex flex-row justify-center">
            <label className="font-medium text-sm">Belum punya akun? </label>
            <label className="text-purple-700 font-medium text-sm pl-1" onClick={handleRegistClick} style={{ cursor: "pointer" }}>
              Daftar di sini
            </label>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 md:flex md:w-1/2 justify-center items-center hidden">
        <a href="/" className="text-center">
          <img src={image} className="w-1/2" alt="Tech Academy" />
        </a>
      </div>
    </div>
  );
};
