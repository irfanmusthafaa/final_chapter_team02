import React, { useEffect, useState } from "react";
import { Nav } from "../assets/components/Nav";
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
      <Nav />
      <div className="bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} />
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[60%] bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Notifikasi</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center  ">
        <div style={{ border: "1px solid #7E22CE" }} className="  w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          {Notifications?.map((data) => (
            <div key={data.id} className=" flex  px-10">
              <div className="flex justify-between w-full mt-10">
                <div className="flex gap-2 ">
                  <div>
                    <img src={iconNotifikasi} alt="icon notif" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-purple-700">{data.title}</p>
                    <p className="font-semibold">{data.body}</p>
                    <p className="text-gray-500">{data.deskripsi}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center text-sm gap-2">
                  <p className="text-gray-700 text-sm">{formatDateTime(data.dateTime)}</p>
                  <FontAwesomeIcon icon={faCircle} className="text-green-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
