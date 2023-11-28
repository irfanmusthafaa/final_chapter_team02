import React from "react";
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
import { Nav } from "../assets/components/Nav";
import img from "../assets/images/kursus.png";

export const DetailPembayaran = () => {
  const style = { color: "#ffff" };
  return (
    <div>
      <Nav />
      <div className="w-full h-screen">
        <div className="px-[5rem] py-[1rem] flex flex-col gap- shadow-lg">
          <div className="flex flex-row gap-5 pt-1">
            <FontAwesomeIcon icon={faArrowLeft} />
            <label className="text-sm font-medium">Kembali</label>
          </div>
          <div className="flex justify-center item-center">
            <div className="bg-[#FF0000] w-2/3 flex justify-center items-center rounded-lg text-white font-semibold text-sm h-[2.5rem]">
              Selesaikan Pembayaran sampai 10 Desember 2023 12:00
            </div>
          </div>
        </div>
        <div className="px-[10rem] py-[1.5rem] flex flex-row gap-10">
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
                  children: <div></div>,
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
                      <div className="flex flex-col px-[3rem] py-[1.5rem] gap-3">
                        <label className="font-semibold text-lg">
                          Card number
                        </label>
                        <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                        <label className="font-semibold text-lg">
                          Card holder name
                        </label>
                        <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                        <div className="flex flex-row justify-between">
                          <div className="flex flex-col gap-3">
                            <label className="font-semibold text-lg">CVV</label>
                            <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          </div>
                          <div className="flex flex-col gap-3">
                            <label className="font-semibold text-lg">
                              Expiry date
                            </label>
                            <input className="border-b-1 border-t-0 border-l-0 border-r-0 border-[#D0D0D0]"></input>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div className="flex flex-col w-1/3">
            <button className="border-purple-700 rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent">
              <label className="font-bold text-xl">Pembayaran Kelas</label>
              <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg">
                <img src={img} placeholder="img" />
                <div className="px-2 mt-2">
                  <div className="flex justify-between items-center">
                    <p className="text-purple-700 font-bold mb-2">UI/UX Design</p>
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
                    <label className="text-black text-sm font-medium mb-2">by Simon Doe</label>
                  </div>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-[#FF0000] w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]">
                  Bayar dan Ikuti Kelas Selamanya{" "}
                  <FontAwesomeIcon style={style} icon={faArrowCircleRight} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
