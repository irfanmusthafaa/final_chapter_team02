import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar } from "../assets/components/Navbar";
// import img from "../assets/images/kursus.png";
import next from "../assets/images/icon/circle-arrow-right-solid.svg";
import { ModalDetailPembayaran } from "../assets/components/modal/ModalDetailPembayaran";
import { useClassDetailQuery } from "../services/class/get-detail-class";
import { useParams } from "react-router-dom";


export const DetailPembayaran = () => {
  const style = { color: "#ffff" };  
  const [open, setOpen] = useState(false);
  const { classCode } = useParams();
  const [Class, setClass] = useState([]);
  const { data: dataClass } = useClassDetailQuery(classCode); 

  useEffect(() => {
    if (dataClass) {
        setClass(dataClass);
    }
  }, [dataClass]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
  };

  return (
    <div>
      <Navbar />
      {/* Kembali */}
      <div className="pt-[6rem] h-[4rem] md:h-[80px] flex flex-col gap-3 items-center shadow-lg">
        <div className="w-[90%] mt-5 md:mt-7">
          <a
            href="/"
            className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
            Kembali Ke Beranda
          </a>
        </div>
      </div>
      
      {/* Modals */}
      <ModalDetailPembayaran 
        open={open}
        setOpen={setOpen}
      />
      
      {/* desktop */}
      <div className="md:flex w-full hidden">
        <div className="px-[10rem] py-[1.5rem] flex flex-row justify-center gap-10 w-full">
          {/* card */}
    

    {/* batas */}
          <div className="flex flex-col w-1/1">
            <button className="rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent" style={{ border: "1px solid #4B0082" }}>
              <label className="font-bold text-xl">Pembayaran Kelas</label>
              <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg overflow-hidden max-h-54">
                <img src={Class.thumbnailPicture} alt="img" className='object-cover max-h-[7rem]' />
                <div className="px-2 mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-purple-700 font-bold mb-2">
                        {Class.categorys?.categoryName}
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
                        {Class.averageRating?.toFixed(1)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <label className="text-black font-bold">
                        {Class.className}
                      </label>
                      <label className="text-black text-sm font-medium mb-2">
                        By : {Class.author}
                      </label>
                    </div>

                    <div className="bg-gray-100 rounded-b-2xl py-2 px-2 mb-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <div className="flex flex-col items-start p-4 bg-white rounded-md shadow-md">
                          <p className="font-bold mb-2">Harga :</p>
                          <span>{formatCurrency(Class.price)}</span>
                        </div>
                        <div className="flex flex-col items-start p-4 bg-white rounded-md shadow-md">
                          <p className="font-bold mb-2">Harga Promo:</p>
                          <span>{formatCurrency(Class.promo)}</span>
                        </div>
                        <div className="flex flex-col items-start p-4 bg-white rounded-md shadow-md">
                          <p className="font-bold mb-2">Total Bayar :</p>
                          <span className="text-purple-700">
                            {Class.promo !== 0 ? formatCurrency(Class.promo) : formatCurrency(Class.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
              <div className="w-full flex justify-center items-center">
                  <button
                    onClick={() => setOpen(true)}
                    size="large"
                    className={`flex items-center justify-center bg-[#FF0000] px-4 py-1 mt-2 cursor-pointer text-white text-sm font-bold rounded-full h-[2.5rem] w-full hover:hover:bg-[#73CA5C] hover:text-white border-0 shadow-sm transition-transform transform hover:scale-105 focus:outline-none `}
                  >
                    Bayar dan Ikuti Kelas
                    <img src={next} alt="Icon" className="ms-2 h-4 color-white" />
                  </button>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* mobile */}
      <div className="md:hidden w-full">
        <div className="px-[1.5rem] md:px-[10rem] py-[1.5rem] flex flex-col md:flex-row md:gap-10 gap-2">
          {/* card */}
            <div className="flex flex-col md:w-1/3">
              <button className="rounded-xl h-fit flex flex-col gap-3 p-3 bg-transparent" style={{ border: "1px solid #4B0082" }}>
                <label className="font-bold text-xl">Pembayaran Kelas</label>
                <div className="flex flex-col bg-white border-2 rounded-3xl w-full shadow-lg overflow-hidden max-h-54">
                  <img src={Class.thumbnailPicture} alt="img" className='object-cover max-h-[7rem]' />
                  <div className="px-2 mt-2">
                    <div className="flex justify-between items-center">
                      <p className="text-purple-700 font-bold mb-2">
                        {Class.categorys?.categoryName}
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
                        {Class.averageRating?.toFixed(1)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                      <label className="text-black font-bold">
                        {Class.className}
                      </label>
                      <label className="text-black text-sm font-medium mb-2">
                        By : {Class.author}
                      </label>
                    </div>

                    <div className="bg-gray-100 rounded-b-2xl py-1 px-1 mb-2">
                      <div className="flex gap-2">
                        <div className="flex flex-col items-start ps-1">
                          <p className="font-bold text-xs mb-2">Harga :</p>
                          <span className="text-purple-700">{formatCurrency(Class.price)}</span>
                        </div>
                        <div className="flex flex-col items-start ps-1">
                          <p className="font-bold text-xs mb-2">Harga Promo:</p>
                          <span className="text-purple-700">{formatCurrency(Class.promo)}</span>
                        </div>
                        <div className="flex flex-col items-start ps-1">
                          <p className="font-bold text-xs mb-2">Total Bayar :</p>
                          <span className="text-purple-700">
                             {Class.promo !== 0 ? formatCurrency(Class.promo) : formatCurrency(Class.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full flex justify-center items-center">
                  <div
                    className="bg-[#FF0000] w-full md:w-[18rem] flex gap-2 justify-center items-center rounded-3xl text-white font-semibold text-sm h-[2rem] hover:bg-[#73CA5C]"
                    onClick={() => setOpen(true)}
                  >
                    Bayar dan Ikuti Kelas{" "}
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