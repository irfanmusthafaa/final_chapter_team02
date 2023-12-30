import React, { useEffect, useState } from "react";
import { Input } from "antd";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "../../services/auth/forgot-password";
import { toast } from "react-toastify";
import image2 from "../../assets/img/up logo.png";

export const ResetPass = () => {
  const [Email, setEmail] = useState("");

  const navigate = useNavigate();

  const { mutate: dataForgotPassword, status, data, isSuccess, isError, error } = useForgotPassword();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.err);
    }
    if (isSuccess) {
      console.log(data, "data sukses");
      toast.success("OTP Berhasil Dikirim");
      navigate("/password-otp", { state: { tokenForgotPassword: data.data.data.token } });
    }
  }, [status]);

  const handleForgotPassword = () => {
    if (!Email) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    dataForgotPassword({
      email: Email,
    });
  };

  return (
    <div className="bg-purple-100 md:bg-white w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <a href="/" className="text-center">
          <img src={image2} className="w-1/6 md:hidden pt-3" alt="" />
        </a>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-3">
        <div className="bg-white w-5/6 md:w-1/2 flex flex-col gap-3 p-4 rounded-xl shadow-xl">
          <h2 className="text-[#7c3aed]">Reset Password</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input className="border rounded-lg text-base" id="email" onChange={handleInput} type="text" placeholder="Masukkan Email" />
          </div>
          <div>
            <button
              onClick={() => {
                handleForgotPassword();
              }}
              className="w-full bg-purple-700 text-white font-medium border-0 h-8 rounded-lg mt-1 cursor-pointer hover:bg-purple-900"
            >
              <label className="text-base">Reset Password</label>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 md:flex md:w-1/2 justify-center items-center hidden">
        <a href="/" className="text-center">
          <img src={image} className="w-1/2" alt="" />
        </a>
      </div>
    </div>
  );
};
