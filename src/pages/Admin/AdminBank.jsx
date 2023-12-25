import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { useGetBank } from "../../services/admin/bank/get-bank";
import { TableBank } from "../../assets/components/Admin/bank/TableBank";
import { ModalTambahBank } from "../../assets/components/Admin/bank/ModalTambahBank";

export const AdminBank = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Bank, setBank] = useState([]);

  const { data: dataBank, isLoading, isError } = useGetBank();

  console.log(Bank, "banks");

  useEffect(() => {
    if (!isLoading && !isError) {
      setBank(dataBank || []);
    }
  }, [dataBank, isLoading, isError]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="w-full flex">
      <SideBar />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-16  my-16">
          <Card />
        </div>
        <div className="px-16 my-16">
          <div className="flex justify-between items-center  mb-5">
            <h3>Bank</h3>
            <div className="flex justify-between items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-full p-3 "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah
              </button>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari Bank..."
                  style={{ border: ".2px solid grey" }}
                  className="bg-white border-[.1rem]  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[200px] h-[32px] "
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
                  <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
          <TableBank searchTerm={searchTerm} Bank={Bank} setOpenUpdate={setOpenUpdate} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahBank />
          </Modal>
        </div>
      </div>
    </div>
  );
};
