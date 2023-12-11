import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import image from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useNewPasswordMutation } from "../../services/auth/reset-password";
import { toast } from "react-toastify";
import image2 from "../../assets/img/up logo.png";
import image3 from "../../assets/img/2.png";

export const NewPass = () => {
  const [NewPassword, setNewPassword] = useState("");
  const [TryNewPassword, setTryNewPassword] = useState("");

  const navigate = useNavigate();

  const { mutate: dataNewPassword, status, isSuccess, isError, error } = useNewPasswordMutation();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "newPassword") {
        setNewPassword(e.target.value);
      }
      if (e.target.id === "tryNewPassword") {
        setTryNewPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.error);
    }
    if (isSuccess) {
      toast.success("Reset Password Sukses");
      navigate("/login");
    }
  }, [status]);

  const isPasswordValid = () => {
    // Check password length
    if (NewPassword.length < 8 || NewPassword.length > 12) {
      toast.error("Password must be between 8 and 12 characters.");
      return false;
    }

    return true;
  };

  const handleNewPassword = () => {
    if (!NewPassword || !TryNewPassword) {
      toast.error("Incomplete Data!!");
      return;
    }

    if (isPasswordValid()) {
      dataNewPassword({
        newPassword: NewPassword,
        newPasswordConfirmation: TryNewPassword,
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <img src={image2} className="w-1/6 md:hidden pt-3" alt="" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center gap-5">
        <div className="w-5/6 md:w-1/2 flex flex-col gap-4">
          <h2 className="text-[#7c3aed]">New Password</h2>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Masukkan Password Baru</label>
            </div>
            <Input.Password
              onChange={handleInput}
              id="newPassword"
              placeholder="Masukkan Password Baru"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center place-content-between">
              <label className="font-normal text-sm">Ulangi Password Baru</label>
            </div>
            <Input.Password
              onChange={handleInput}
              id="tryNewPassword"
              placeholder="Ulangi Password Baru"
              type="password"
              iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
            />
          </div>
          <div>
            <button
              onClick={() => {
                handleNewPassword();
              }}
              className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-lg mt-2"
            >
              Simpan
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
