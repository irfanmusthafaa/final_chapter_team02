import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowAltCircleLeft,
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
          <div className="flex justify-center items-center">
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
            <button className="border-purple-700 rounded-xl h-[20rem] flex flex-col p-3 bg-transparent">
              <label className="font-bold text-xl">Pembayaran Kelas</label>
              <div className="flex flex-col">
                {/* get gambar
                    get judul Kelas
                    get deskripsi
                    get mentor */}
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
                <div className="flex flex-col"></div>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-[#FF0000] w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2.5rem] hover:bg-[#73CA5C]">
                  Bayar dan Ikuti Kelas Selamanya <FontAwesomeIcon style={style} icon={faArrowCircleRight}/>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
