import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useForgotPassword } from "../../services/auth/forgot-password";
import { toast } from "react-toastify";

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
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-1/2 flex flex-col gap-4">
          <h2 className="text-[#7c3aed]">Lupa Password</h2>
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
              Masuk
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
