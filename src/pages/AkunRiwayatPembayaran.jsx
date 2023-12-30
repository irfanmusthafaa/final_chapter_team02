import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import iconSignout from "../assets/images/ic_log-out.png";
import iconStar from "../assets/images/ic-star.png";
import iconLevel from "../assets/images/ic-level.png";
import iconModul from "../assets/images/ic-modul.png";
import iconTime from "../assets/images/ic-time.png";
import iconPremium from "../assets/images/ic-premium.png";
import { MenuAkun } from "../assets/components/MenuAkun";
import img from "../assets/images/kursus.png";
import { useGetPaymentUser } from "../services/payment/get-payment";
import { useNavigate } from "react-router-dom";

export const AkunRiwayatPembayaran = () => {
  const [Payment, setPayment] = useState([]);

  const { data: dataPayment, isLoading, isError } = useGetPaymentUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isError) {
      setPayment(dataPayment || []);
    }
  }, [dataPayment, isLoading, isError]);

  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-black" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-black " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-purple-700 font-bold " },
    // { label: "Keluar", link: "/login", img: iconSignout, textColor: "text-black " },
  ];
  return (
    <>
      <Navbar />
      <div className="pt-[6rem] bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[90%] md:w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
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
            <div className="w-1/2  p-5 box-border">
              <MenuAkun menus={propsMenu} />
            </div>
            <div className="w-1/2">
              <div className="flex flex-col md:w-full px-2 justify-center items-center my-6 md:my-10 gap-3 ">
                <h3 className="md:mb-5 text-center md:text-left">Riwayat Pembayaran</h3>
                <div className="flex flex-col gap-5 w-[98%] md:w-[80%]">
                  {Payment?.map((item) => (
                    <React.Fragment key={item.id}>
                      <div key={item.id} className="flex flex-col bg-white border-2 rounded-xl w-full" style={{ border: "1px solid #7E22CE" }}>
                        <img src={item.class.thumbnailPicture} placeholder="img" className="h-[4rem] md:hidden rounded-t-xl" />
                        <img src={item.class.thumbnailPicture} placeholder="img" className="hidden md:flex rounded-t-xl" />
                        <div className="px-2 mt-2">
                          <div className="flex justify-between items-center">
                            <p className="text-purple-700 font-bold ">{item.class.categorys.categoryName}</p>
                          </div>
                          <p className="text-black font-bold mt-1">{item.class.className}</p>
                          <p className="text-black text-sm mt-1">{item.class.author}</p>
                          <div>
                            <button
                              className={` my-2 py-2  flex justify-between items-center rounded-full px-3 border-0 cursor-pointer font-semibold text-xs text-white ${
                                item.status ? "bg-green-600 hover:bg-green-900" : "bg-red-600 hover:bg-purple-900"
                              }`}
                              onClick={() => {
                                if (!item.status) {
                                  window.open("https://wa.me/6289657136350", "_blank");
                                } else {
                                  navigate(`/detailKelas/${item.class.classCode}`);
                                }
                              }}
                            >
                              <div className="flex justify-center items-center  gap-1">
                                <img src={iconPremium} alt="img" />
                                <p className="text-center">{item.status ? "Success" : "Need Confirmation"}</p>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
