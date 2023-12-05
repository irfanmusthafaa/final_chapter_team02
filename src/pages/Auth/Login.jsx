import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../services/auth/login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate: dataLogin, status, isSuccess, isError, error } = useLoginUser();

  console.log(error, "error");
  console.log(import.meta.env.VITE_APP_URL, "env");

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
    if (error) {
      console.log(error);
    }
    if (isSuccess) {
      navigate("/beranda");
    }
  }, [status]);

  const loginUser = () => {
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
          <h2 className="text-purple-500">Masuk</h2>

          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email/No Telepon</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg" type="text" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between mt-2">
              <label className="font-normal text-sm">Password</label>
              <label className="text-xs text-purple-500" onClick={handleForgetPass} style={{ cursor: "pointer" }}>
                Lupa Kata Sandi
              </label>
            </div>
            <Input.Password
              onChange={handleInput}
              id="password"
              placeholder="Masukkan Password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
              // visibilityToggle={{
              //   visible: passwordVisible,
              //   onVisibleChange: setPasswordVisible,
              // }}
            />
          </div>

          <div>
            <button
              onClick={() => {
                loginUser();
              }}
              className="w-full py-3 bg-purple-500 text-white font-medium border-0 rounded-lg mt-2 hover:bg-purple-900"
            >
              Masuk
            </button>
          </div>
        </div>
        <div className="flex flex-row text-center">
          <label className="font-medium text-xs">Belum punya akun? </label>
          <label className="text-purple-500 font-medium text-xs" onClick={handleRegistClick} style={{ cursor: "pointer" }}>
            Daftar di sini
          </label>
        </div>
      </div>
      <div className="w-1/2 bg-purple-500 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
