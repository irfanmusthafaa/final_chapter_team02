import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/auth/register";
import { toast } from "react-toastify";
import image2 from "../../assets/img/up logo.png";
import image3 from "../../assets/img/wave.png"

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
    <div className="w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <img src={image2} className="w-1/6 md:hidden pt-3" alt="" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-3">
        <div className="w-5/6 md:w-1/2 flex flex-col gap-2">
          <h2 className="text-purple-700">Daftar</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nama</label>
            <Input onChange={handleInput} id="fullname" className="border rounded-lg" type="text" maxLength={13} placeholder="Nama Lengkap" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input onChange={handleInput} id="email" className="border rounded-lg" type="email" placeholder="Contoh: johndee@gmail.com" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Nomor Telepon</label>
            <Input onChange={handleInput} id="notelp" className="border rounded-lg" type="text" maxLength={13} placeholder="+62." />
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
          <div className="flex flex-col">
            <button
              onClick={() => {
                registerUser();
              }}
              className="w-full bg-purple-700 text-white font-medium border-0 h-8 rounded-lg mt-2 hover:bg-purple-900"
            >
              Daftar
            </button>
          </div>
        </div>
        <div className="flex flex-row text-center">
          <label className="font-medium text-xs">Sudah punya akun? </label>
          <label className="text-purple-700 font-medium text-xs pl-1 hover:text-purple-900" onClick={handleLoginClick} style={{ cursor: "pointer" }}>
            Masuk di sini
          </label>
        </div>
      </div>
      <img src={image3} className="w-full absolute bottom-0 md:hidden" alt="" />
      <div className="bg-purple-700 md:flex md:w-1/2 justify-center items-center hidden">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
