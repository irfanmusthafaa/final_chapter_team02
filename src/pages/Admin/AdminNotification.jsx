import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { TableNotification } from "../../assets/components/Admin/notification/TableNotification";
import { useGetNotificationAdmin } from "../../services/admin/notifications/get-notification-all";
import { ModalTambahNotification } from "../../assets/components/Admin/notification/ModalTambahNotification";

export const AdminNotification = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [Notification, setNotification] = useState([]);

  const { data: dataNotification, isLoading, isError } = useGetNotificationAdmin();

  console.log(Notification, "Notifications");

  useEffect(() => {
    if (!isLoading && !isError) {
      setNotification(dataNotification || []);
    }
  }, [dataNotification, isLoading, isError]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-10  my-16">
          <Card />
        </div>
        <div className="px-10 my-16">
          <div className="flex flex-col  gap-3 md:flex-row justify-between items-start md:items-center mb-5">
            <h3>Notifikasi</h3>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-xl py-2 px-3  "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah Data
              </button>
            </div>
          </div>
          <TableNotification Notification={Notification} setOpenUpdate={setOpenUpdate} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahNotification />
          </Modal>
        </div>
      </div>
    </div>
  );
};
