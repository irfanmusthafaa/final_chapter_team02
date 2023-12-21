import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import iconSignout from "../assets/images/ic_log-out.png";
import { Input, message, Upload } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { MenuAkun } from "../assets/components/MenuAkun";
import { useNavigate } from "react-router-dom";
import { useChangePassword } from "../services/auth/change-password";
import { CookiesKey, CookiesStorage } from "../utils/cookies";
import { toast } from "react-toastify";

export const AkunUbahPassword = () => {
  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-black" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-purple-700 font-bold " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-black " },
    // { label: "Keluar", link: "/login", img: iconSignout, textColor: "text-black " },
  ];

  const [Email, setEmail] = useState("");
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [NewPasswordConfirm, setNewPasswordConfirm] = useState("");

  const navigate = useNavigate();

  const { mutate: dataChangePassword, status, isSuccess, isError, error } = useChangePassword();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "currentPassword") {
        setCurrentPassword(e.target.value);
      }
      if (e.target.id === "newPassword") {
        setNewPassword(e.target.value);
      }
      if (e.target.id === "newPasswordConfirm") {
        setNewPasswordConfirm(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (error) {
      if (error.response.status === 401) {
        toast.error(error.response.data.err, "error cheng");
      } else if (error.response.status === 400) {
        toast.warn(error.response.data.error, "error match");
      }
    }
    if (isSuccess) {
      toast.success("Ubah Password Berhasil");
      navigate("/");
    }
  }, [status]);

  const handleChangePassword = () => {
    if (!CurrentPassword || !NewPassword || !NewPasswordConfirm) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    dataChangePassword({
      email: CookiesStorage.get(CookiesKey.User),
      currentPassword: CurrentPassword,
      new_password: NewPassword,
      new_password_confirm: NewPasswordConfirm,
    });
  };
  return (
    <>
      <Navbar />
      <div className="pt-[6rem] bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
      <div className="w-[90%] md:w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1"/>
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%] bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Akun</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center mb-5">
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          <div className="flex">
            <div className="w-1/2 p-5 box-border">
              <MenuAkun menus={propsMenu} />
            </div>
            <div className="w-1/2">
              <div className="flex flex-col md:w-full px-3 justify-center items-center my-8 md:my-10 gap-3 ">
                <h3 className="mb-5 text-center md:text-left">Ubah Password</h3>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Masukkan Password Lama</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Masukkan Password Lama"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                    onChange={handleInput}
                    id="currentPassword"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Masukkan Password Baru</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Masukkan Password Baru"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                    onChange={handleInput}
                    id="newPassword"
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Ulangi Password Baru</label>
                  <Input.Password
                    className="hover:border-purple-700"
                    placeholder="Ulangi Password Baru"
                    type="password"
                    iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeOutlined />)}
                    onChange={handleInput}
                    id="newPasswordConfirm"
                  />
                </div>

                <button
                  onClick={() => {
                    handleChangePassword();
                  }}
                  className="w-full md:w-3/4 py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
                >
                  Ubah Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
