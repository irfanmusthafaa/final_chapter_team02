import React, { useEffect, useState } from "react";
import image from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegisterOTP } from "../../services/auth/register-otp";
import { toast } from "react-toastify";
import axios from "axios";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useForgotPasswordOTPMutation } from "../../services/auth/forgot-password-otp";

export const PasswordOTP = () => {
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
      navigate("/new-password", { state: { tokenNewPassword: TokenForgotPassword } });
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
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col items-center gap-5 pt-[7rem]">
        <div className="w-2/3 flex flex-col gap-2">
          <div className="flex items-start">
            <Link to="/reset-password">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
          <div className="pl-8 flex flex-col gap-8 ">
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
                className="w-full bg-purple-700 text-white font-medium border-0 h-8 rounded-xl mt-2 hover:bg-purple-900"
                onClick={() => {
                  handleOTP();
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-purple-700 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
