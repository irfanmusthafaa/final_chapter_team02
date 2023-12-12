import { useState } from "react";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Card } from "../../assets/components/Admin/Card";
import { Dropdown, Input, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import iconPrefix from "../../assets/images/icon-prefix2.png";
import { TableKelas } from "../../assets/components/Admin/TableKelas";
import { ModalTambahKelas } from "../../assets/components/Admin/ModalTambahKelas";
const { TextArea } = Input;

export const AdminKelolaKelas = () => {
  const [open, setOpen] = useState(false);
  const kelasMenus = [
    { label: "Dashboard", link: "/admin/dashboard", bgColor: "bg-transparent" },
    { label: "Kelola Kelas", link: "/admin/kelas", bgColor: "bg-purple-500" },
  ];

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="w-full flex">
      <SideBar menus={kelasMenus} />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-16 my-16">
          <Card />
        </div>
        <div className="px-16 my-16">
          <div className="flex justify-between mb-5">
            <h3>Kelola Kelas</h3>
            <div className="flex justify-between items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-full p-3 "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah
              </button>
              <Dropdown menu={menuProps}>
                <button className="flex justify-center gap-2 items-center text-sm  border-purple-700 bg-white text-purple-700 font-bold border-1 rounded-full p-2">
                  <img src={iconPrefix} alt="prefix" />
                  Filter
                </button>
              </Dropdown>
              <FontAwesomeIcon icon={faSearch} className="text-purple-700" />
            </div>
          </div>
          {/* Tabel */}
          <TableKelas />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahKelas />
          </Modal>
        </div>
      </div>
    </div>
  );
};
