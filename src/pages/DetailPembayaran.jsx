import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowLeft,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";
import image1 from "../assets/img/ccmc.png";
import image2 from "../assets/img/visa.png";
import image3 from "../assets/img/ae.png";
import image4 from "../assets/img/pp.png";
import image5 from "../assets/img/bca.png";
import image6 from "../assets/img/bni.png";
import image7 from "../assets/img/bri.png";
import image8 from "../assets/img/mandiri.png";
import { Navbar } from "../assets/components/Navbar";
import img from "../assets/images/kursus.png";

export const DetailPembayaran = () => {
  const style = { color: "#ffff" };

  const [isCollapse, setCollapse] = useState(false);
  const [isPayment, setPayment] = useState(false);

  const handlePayment = () => {
    setPayment(!isPayment);
  };

  const handlePembayaran = () => {
    setCollapse(!isCollapse);
  };

  const handleBayar = () => {
    window.location.href = "/sukses-pembayaran";
  };

  return (
    <div>
      <Navbar />
      <div className="pt-[6rem] h-[7.3rem] md:h-[125px] flex flex-col gap-3 items-center shadow-lg">
        <div className="w-[90%] mt-5 md:mt-7">
          <a
            href="/"
            className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
            Kembali Ke Beranda
          </a>
        </div>
        <button className="bg-[#FF0000] w-5/6 md:w-3/4 py-3 cursor-pointer text-white font-medium border-0 rounded-xl flex flex-row justify-center">
          <label>Selesaikan Pembayaran sampai</label>
          {/* <label className="pl-1">api tanggal</label> */}
        </button>
      </div>
      {/* bagian bawah */}
      {/* desktop */}
      <div className="md:flex w-full h-screen hidden">
        <div className="px-[10rem] py-[1.5rem] flex flex-row gap-10 w-full">
          {/* card */}
          {!isPayment && (
            <div className="flex flex-col w-1/3">
            <button className="border-purple-700 rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent">
              <label className="font-bold text-xl">Pembayaran Kelas</label>
              <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg">
                <img src={img} placeholder="img" />
                <div className="px-2 mt-2">
                  <div className="flex justify-between items-center">
                    <p className="text-purple-700 font-bold mb-2">
                      UI/UX Design
                    </p>
                    <p className="text-xs flex justify-center items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                          fill="#F9CC00"
                        />
                      </svg>{" "}
                      4.7
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-start gap-1">
                    <label className="text-black font-bold">
                      Belajar Web Designer dengan figma
                    </label>
                    <label className="text-black text-sm font-medium mb-2">
                      by Simon Doe
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
              </div>
              <div className="w-full flex justify-center items-center">
                <div
                  className="bg-[#FF0000] w-full md:w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]"
                  onClick={handlePayment}
                >
                  Bayar dan Ikuti Kelas Selamanya{" "}
                  <FontAwesomeIcon style={style} icon={faArrowCircleRight} />
                </div>
              </div>
            </button>
          </div>
          )}
          
          {/* collapse */}
          {isPayment && (
            <div className="flex flex-col gap-2 w-2/3">
              <Collapse
                className="bg-black"
                size="small"
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon style={style} icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon style={style} icon={faChevronDown} />
                  )
                }
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="text-white font-semibold">Bank Transfer</p>
                    ),
                    children: (
                      <div>
                        <div className="flex flex-row justify-center items-center gap-4">
                          <img
                            src={image5}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image6}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image7}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image8}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col md:px-[3rem] py-[1.5rem] gap-3">
                          <label className="font-semibold text-lg">
                            Account Number
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <label className="font-semibold text-lg">
                            User Name
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <button
                            className="bg-[#FF0000] border-0 rounded-xl text-white h-8 text-base mt-5 hover:bg-[#73CA5C]"
                            onClick={handleBayar}
                          >
                            Bayar
                          </button>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
              <Collapse
                className="bg-purple-700"
                size="small"
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon style={style} icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon style={style} icon={faChevronDown} />
                  )
                }
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="text-white font-semibold">Credit Card</p>
                    ),
                    children: (
                      <div>
                        <div className="flex flex-row justify-center items-center gap-4">
                          <img
                            src={image1}
                            className="w-[2.5rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image2}
                            className="w-[3rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image3}
                            className="w-[3rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image4}
                            className="w-[3rem] h-[1rem]"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col md:px-[3rem] py-[1.5rem] gap-3">
                          <label className="font-semibold text-lg">
                            Card Number
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <label className="font-semibold text-lg">
                            Card Name
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <button
                            className="bg-[#FF0000] border-0 rounded-xl text-white h-8 text-base mt-5 hover:bg-[#73CA5C]"
                            onClick={handleBayar}
                          >
                            Bayar
                          </button>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
      {/* mobile */}
      <div className="md:hidden w-full h-screen">
        <div className="px-[1.5rem] md:px-[10rem] py-[1.5rem] flex flex-col md:flex-row md:gap-10 gap-2">
          {/* card */}
          {!isCollapse && (
            <div className="flex flex-col md:w-1/3">
              <button className="border-purple-700 rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent">
                <label className="font-bold text-xl">Pembayaran Kelas</label>
                <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg">
                  <img src={img} placeholder="img" />
                  <div className="px-2 mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-purple-700 font-bold mb-2">
                        UI/UX Design
                      </p>
                      <p className="text-xs flex justify-center items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                            fill="#F9CC00"
                          />
                        </svg>{" "}
                        4.7
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <label className="text-black font-bold">
                        Belajar Web Designer dengan figma
                      </label>
                      <label className="text-black text-sm font-medium mb-2">
                        by Simon Doe
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                  <div className="flex flex-col"></div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div
                    className="bg-[#FF0000] w-full md:w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]"
                    onClick={handlePembayaran}
                  >
                    Bayar dan Ikuti Kelas Selamanya{" "}
                    <FontAwesomeIcon style={style} icon={faArrowCircleRight} />
                  </div>
                </div>
              </button>
            </div>
          )}
          {/* collapse */}
          {isCollapse && (
            <div className="flex flex-col gap-2 w-full md:w-2/3">
              <Collapse
                className="bg-black"
                size="small"
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon style={style} icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon style={style} icon={faChevronDown} />
                  )
                }
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="text-white font-semibold">Bank Transfer</p>
                    ),
                    children: (
                      <div>
                        <div className="flex flex-row justify-center items-center gap-4">
                          <img
                            src={image5}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image6}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image7}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                          <img
                            src={image8}
                            className="w-[3rem] h-[1.3rem]"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col md:px-[3rem] py-[1.5rem] gap-3">
                          <label className="font-semibold text-lg">
                            Account Number
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <label className="font-semibold text-lg">
                            User Name
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <button
                            className="bg-[#FF0000] border-0 rounded-xl text-white h-8 text-base mt-5 hover:bg-[#73CA5C]"
                            onClick={handleBayar}
                          >
                            Bayar
                          </button>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
              <Collapse
                className="bg-purple-700"
                size="small"
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <FontAwesomeIcon style={style} icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon style={style} icon={faChevronDown} />
                  )
                }
                items={[
                  {
                    key: "1",
                    label: (
                      <p className="text-white font-semibold">Credit Card</p>
                    ),
                    children: (
                      <div>
                        <div className="flex flex-row justify-center items-center gap-4">
                          <img
                            src={image1}
                            className="w-[2.5rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image2}
                            className="w-[3rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image3}
                            className="w-[3rem] h-[2rem]"
                            alt=""
                          />
                          <img
                            src={image4}
                            className="w-[3rem] h-[1rem]"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col md:px-[3rem] py-[1.5rem] gap-3">
                          <label className="font-semibold text-lg">
                            Card Number
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <label className="font-semibold text-lg">
                            Card Name
                          </label>
                          <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          <button
                            className="bg-[#FF0000] border-0 rounded-xl text-white h-8 text-base mt-5 hover:bg-[#73CA5C]"
                            onClick={handleBayar}
                          >
                            Bayar
                          </button>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
