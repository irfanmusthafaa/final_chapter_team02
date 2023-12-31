import React, { useEffect, useState } from "react";
import image from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import image2 from "../../assets/img/up logo.png";
import image3 from "../../assets/img/wave.png";
import { useForgotPasswordOTPMutation } from "../../services/auth/forgot-password-otp";
import { API_ENDPOINT } from "../../utils/api-endpoint";

export const AdminPasswordOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendCountdown, setResendCountdown] = useState(60);
  const [countDownDisabled, setCountDownDisabled] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);
  const navigate = useNavigate();

  //memanggil token di forgot password
  const data = useLocation();
  const [TokenForgotPassword, setTokenForgotPassword] = useState(data.state ? data.state.tokenForgotPassword : "");
  // console.log(TokenForgotPassword, "token otpp");

  const kodeOTP = otp.join("");
  console.log(kodeOTP, "kodee");

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const { mutate: dataOTP, status, isSuccess, isError, error } = useForgotPasswordOTPMutation();

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.err);
    }
    if (isSuccess) {
      toast.success("OTP Berhasil Terverifikasi");
      navigate("/new-password-admin", { state: { tokenNewPassword: TokenForgotPassword } });
    }
  }, [status]);

  const handleOTP = () => {
    dataOTP({
      otp: kodeOTP,
    });
  };

  // Kirim ulang OTP
  useEffect(() => {
    let timer;

    if (resendCountdown > 0) {
      timer = setTimeout(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    } else if (resendCountdown === 0) {
      setResendDisabled(false);
      setCountDownDisabled(true);
    }

    return () => clearTimeout(timer);
  }, [resendCountdown, resendDisabled]);

  const handleResendOTP = async () => {
    try {
      setResendDisabled(true);
      setCountDownDisabled(false);
      setResendCountdown(60);

      await axios.get(`${import.meta.env.VITE_APP_URL}${API_ENDPOINT.AUTH_RESEND_OTP_PASSWORD}?token=${TokenForgotPassword}`);
    } catch (error) {
      toast.error("Try Register Again");
    }
  };

  return (
    <div className="bg-purple-100 md:bg-white w-full h-screen flex flex-col md:flex-row gap-5">
      <div className="flex justify-center">
        <a href="/" className="text-center">
          <img src={image2} className="w-1/6 md:hidden pt-3" alt="Tech Academy" />
        </a>
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center gap-5 pt-[1rem] md:pt-[7rem]">
        <div className="bg-white w-5/6 md:w-1/2 flex flex-col gap-3 p-4 rounded-xl shadow-xl">
          <div className="md:flex items-start">
            <Link to="/reset-password-admin">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
          <div className="md:pl-6 flex flex-col gap-8 ">
            <h2 className="text-purple-700">Masukkan OTP</h2>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-1 ">
                <label className="font-normal text-xs">Ketik 6 digit kode yang sudah dikirimkan ke </label>
              </div>
              <div className="flex flex-row gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    value={digit}
                    type="number"
                    inputMode="numeric"
                    onChange={(e) => handleChange(e, index)}
                    maxLength="1"
                    className="w-10 h-10 items-center text-center border border-purple-700 rounded-2xl"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-1 ">
                {!countDownDisabled ? <label className="font-normal text-xs">Kirim ulang OTP dalam {resendCountdown} detik </label> : null}
                {!resendDisabled ? (
                  <label className="text-red-500 font-bold text-xs cursor-pointer" onClick={handleResendOTP}>
                    Kirim Ulang
                  </label>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <button
                className="w-full bg-purple-700 text-white font-medium border-0 h-8 rounded-xl mt-1 hover:bg-purple-900 cursor-pointer"
                onClick={() => {
                  handleOTP();
                }}
              >
                <label className="text-base">Simpan</label>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex md:w-1/2 bg-purple-700  justify-center items-center hidden">
        <a href="/" className="text-center">
          <img src={image} className="w-1/2" alt="" />
        </a>
      </div>
    </div>
  );
};
