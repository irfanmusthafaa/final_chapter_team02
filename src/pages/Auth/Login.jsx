import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../services/auth/login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

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
      navigate("/");
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
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-purple-700">Masuk</h2>

          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email/No Telepon</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg" type="text" placeholder="Contoh: johndee@gmail.com" />
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
              id="password"
              placeholder="Masukkan Password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>

          <div>
            <button
              onClick={() => {
                loginUser();
              }}
              className="w-full py-3 bg-purple-700 text-white font-medium border-0 rounded-lg mt-2 hover:bg-purple-900"
            >
              Masuk
            </button>
          </div>
        </div>
        <div className="flex flex-row text-center">
          <label className="font-medium text-xs">Belum punya akun? </label>
          <label className="text-purple-700 font-medium text-xs" onClick={handleRegistClick} style={{ cursor: "pointer" }}>
            Daftar di sini
          </label>
        </div>
      </div>
      <div className="w-1/2 bg-purple-700 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
