import React, { useEffect, useState } from "react";
import { Input } from "antd";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "../../services/auth/forgot-password";
import { toast } from "react-toastify";
import image2 from "../../assets/img/up logo.png";
import image3 from "../../assets/img/2.png";

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
    <div className="w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <img src={image2} className="w-1/6 md:hidden pt-3" alt="" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-5/6 md:w-1/2 flex flex-col gap-4">
          <h2 className="text-[#7c3aed]">Reset Password</h2>
          <div className="flex flex-col gap-1">
            <label className="font-normal text-sm">Email</label>
            <Input className="border rounded-lg" id="email" onChange={handleInput} type="text" placeholder="Masukkan Email" />
          </div>
          <div>
            <button
              onClick={() => {
                handleForgotPassword();
              }}
              className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-lg mt-2"
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
      <img src={image3} className="w-full absolute bottom-0 md:hidden" alt="" />
      <div className="bg-violet-600 md:flex md:w-1/2 justify-center items-center hidden">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
