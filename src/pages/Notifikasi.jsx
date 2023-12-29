import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";
import iconNotifikasi from "../assets/images/icon-notif.png";
import { useGetNotificationAll } from "../services/notification/get-notification-all";

export const Notifikasi = () => {
  const [Notifications, setNotifications] = useState([]);

  const { data: dataNotifications } = useGetNotificationAll();

  useEffect(() => {
    setNotifications(dataNotifications);
  }, [dataNotifications]);

  const formatDateTime = (dateTimeString) => {
    const options = { day: "numeric", month: "short", hour: "numeric", minute: "numeric" };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString("id-ID", options);
  };
  return (
    <>
      <Navbar />
      <div className="pt-[6rem] bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[90%] md:w-[60%] mt-7">
          <a href="/" className=" text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%]  bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Notifikasi</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center mb-5">
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          {Notifications?.map((data) => (
            <div key={data.id} className="flex px-2 md:px-10">
              <div className="flex w-full flex-col md:flex-row mt-4">
                <div className="flex items-start w-full md:w-[80%] gap-1 md:gap-3">
                  <div>
                    <img src={iconNotifikasi} alt="icon notif" />
                  </div>
                  <div className="w-full md:w-[30rem] flex flex-col gap-1">
                    <p className="text-purple-700 font-semibold">{data.title}</p>
                    <p className="font-semibold">{data.body}</p>
                    <p className="text-gray-500">{data.deskripsi}</p>
                  </div>
                </div>
                <div className="w-full md:w-[20%] flex md:justify-center ml-7 md:ml-0 items-center text-sm gap-1 md:gap-5">
                  <p className="text-gray-700 text-sm">{formatDateTime(data.dateTime)}</p>
                  <FontAwesomeIcon icon={faCircle} className="text-green-500 text-sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
