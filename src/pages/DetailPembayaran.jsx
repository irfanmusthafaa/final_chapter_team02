import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Collapse } from "antd";
import image1 from "../assets/img/ccmc.png";
import image2 from "../assets/img/visa.png";
import image3 from "../assets/img/ae.png";
import image4 from "../assets/img/pp.png";

export const DetailPembayaran = () => {
    const style = {color : '#ffff'}
  return (
    <div>
      <div>{/* Navbar */}</div>
      <div className="w-full h-screen">
        <div className="px-[5rem] py-[1.5rem] flex flex-col gap-8 shadow-lg">
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
        <div className="px-[5rem] py-[1.5rem] flex flex-col gap-2">
          <Collapse
            className="bg-black"
            size="small"
            expandIconPosition="end"
            expandIcon={({ isActive }) => (isActive ? <FontAwesomeIcon style={style} icon={faChevronUp} /> : <FontAwesomeIcon style={style} icon={faChevronDown}/>)}
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
            expandIcon={({ isActive }) => (isActive ? <FontAwesomeIcon style={style} icon={faChevronUp} /> : <FontAwesomeIcon style={style} icon={faChevronDown}/>)}
            items={[
              {
                key: "1",
                label: <p className="text-white font-semibold">Credit Card</p>,
                children: (
                  <div>
                    <div className="flex flex-row justify-center items-center gap-4">
                      <img
                        src={image1}
                        className="w-[2.5rem] h-[2rem]"
                        alt=""
                      />
                      <img src={image2} className="w-[3rem] h-[2rem]" alt="" />
                      <img src={image3} className="w-[3rem] h-[2rem]" alt="" />
                      <img src={image4} className="w-[3rem] h-[1rem]" alt="" />
                    </div>
                    <div></div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
