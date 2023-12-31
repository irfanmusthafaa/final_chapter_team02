import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/auth/register";
import { toast } from "react-toastify";
import image2 from "../../assets/img/up logo.png";

export const Register = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: dataRegister, status, isSuccess, error, data, success, isError } = useRegisterUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "fullname") {
        setFullName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "notelp") {
        setNoTelp(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.err ? error.response.data.err : error.response.data.message);
    }
    if (isSuccess) {
      console.log(data.data.data.token, "data regisss");
      navigate("/otp", {
        state: { email: Email, tokenRegister: data.data.data.token },
      });
    }
  }, [status]);

  const isPasswordValid = () => {
    // Check password length
    if (Password.length < 8 || Password.length > 12) {
      toast.error("Password must be between 8 and 12 characters.");
      return false;
    }

    return true;
  };

  const registerUser = () => {
    if (!FullName || !Email || !NoTelp || !Password) {
      toast.error("Incomplete Data !!");
      return;
    }
    if (isPasswordValid()) {
      dataRegister({
        fullName: FullName,
        email: Email,
        noTelp: NoTelp,
        password: Password,
      });
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
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
          <h2 className="text-purple-700">Daftar</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nama</label>
            <Input
              onChange={handleInput}
              id="fullname"
              className="border rounded-lg text-base"
              type="text"
              maxLength={50}
              placeholder="Nama Lengkap"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg text-base" type="email" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nomor Telepon</label>
            <Input onChange={handleInput} id="notelp" className="border rounded-lg text-base" type="text" maxLength={13} placeholder="+62." />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Password</label>
            <Input.Password
              onChange={handleInput}
              className="text-base"
              id="password"
              placeholder="Buat Password"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-end">
              <label className="text-xs text-purple-700 hover:text-purple-900" onClick={() => navigate("/activation")} style={{ cursor: "pointer" }}>
                Aktivasi Akun
              </label>
            </div>
            <button
              onClick={() => {
                registerUser();
              }}
              className="w-full bg-purple-700 text-white font-semibold border-0 h-8 rounded-lg mt-2 hover:bg-purple-900"
            >
              <label className="text-base">Daftar</label>
            </button>
          </div>
          <div className="flex flex-row justify-center py-2">
            <label className="font-medium text-sm">Sudah punya akun? </label>
            <label
              className="text-purple-700 font-semibold text-sm pl-1 hover:text-purple-900"
              onClick={handleLoginClick}
              style={{ cursor: "pointer" }}
            >
              Masuk di sini
            </label>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 md:flex md:w-1/2 flex-col justify-center items-center hidden">
        <a href="/" className="text-center">
          <img src={image} className="w-1/2 cursor-pointer" alt="" />
        </a>
      </div>
    </div>
  );
};
