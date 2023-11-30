import React, { useState } from "react";
import image from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export const OTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    if (e.target.value.length === 1 && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-2/3 flex flex-col items-center gap-5 pt-[7rem]">
        <div className="w-2/3 flex flex-col gap-2">
          <div className="flex items-start">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="pl-8 flex flex-col gap-8 ">
            <h2 className="text-[#7c3aed]">Masukkan OTP</h2>
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-1 ">
                <label className="font-normal text-xs">
                  Ketik 6 digit kode yang sudah dikirimkan ke{" "}
                </label>
              </div>
              <div className="flex flex-row gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`otp-input-${index}`}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    maxLength="1"
                    className="w-10 h-10 items-center text-center border border-purple-700 rounded-2xl"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-1 ">
                <label className="font-normal text-xs">
                  Kirim ulang OTP dalam 60 detik
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <button className="w-full bg-[#7c3aed] text-white font-medium border-0 h-8 rounded-xl mt-2">
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-violet-600 flex justify-center items-center">
        <img src={image} className="w-1/2" alt="" />
      </div>
    </div>
  );
};
