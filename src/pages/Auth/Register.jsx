import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/auth/register";
import { toast } from "react-toastify";

export const Register = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: dataRegister, data, status, isSuccess, error, isError } = useRegisterUser();

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
      toast.error(error.response.data.err);
    }
    if (isSuccess) {
      navigate("/otp", { state: { email: Email } });
    }
  }, [status]);

  const registerUser = () => {
    dataRegister({
      fullName: FullName,
      email: Email,
      noTelp: NoTelp,
      password: Password,
    });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-2">
          <h2 className="text-purple-700">Daftar</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nama</label>
            <Input onChange={handleInput} id="fullname" className="border rounded-lg" type="text" placeholder="Nama Lengkap" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg" type="email" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nomor Telepon</label>
            <Input onChange={handleInput} id="notelp" className="border rounded-lg" type="text" placeholder="+62." />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Password</label>
            <Input.Password
              onChange={handleInput}
              id="password"
              placeholder="Buat Password"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => {
                registerUser();
              }}
              // onClick={() => {
              //   navigate("/otp", { state: { email: Email } });
              // }}
              className="w-full bg-purple-700 text-white font-medium border-0 h-8 rounded-lg mt-2 hover:bg-purple-900"
            >
              Daftar
            </button>
          </div>
        </div>
        <div className="flex flex-row text-center">
          <label className="font-medium text-xs">Sudah punya akun? </label>
          <label className="text-purple-700 font-medium text-xs" onClick={handleLoginClick} style={{ cursor: "pointer" }}>
            Masuk di sini
          </label>
        </div>
      </div>
      <div className="w-1/2 bg-purple-700 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
