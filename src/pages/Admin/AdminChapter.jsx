import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { useGetChapter } from "../../services/admin/chapter/get-chapter";
import { TableChapter } from "../../assets/components/Admin/chapter/TableChapter";
import { ModalTambahChapter } from "../../assets/components/Admin/chapter/ModalTambahChapter";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { TableKategori } from "../../assets/components/Admin/category/TableKategori";
import { ModalTambahKategori } from "../../assets/components/Admin/category/ModalTambahKategori";
import { useClassDataQuery } from "../../services/class/get-data-class";

export const AdminChapter = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Chapter, setChapter] = useState([]);
  const [Class, setClass] = useState([]);

  const menus = [
    { label: "Dashboard", link: "/admin/dashboard", bgColor: "bg-transparent" },
    { label: "Kategori", link: "/admin/kategori", bgColor: "bg-transparent" },
    { label: "Kelola Kelas", link: "/admin/kelas", bgColor: "bg-transparent" },
    { label: "Chapter", link: "/admin/chapter", bgColor: "bg-purple-500" },
  ];

  const { data: dataChapter, isLoading, isError } = useGetChapter();
  const { data: dataClass } = useClassDataQuery();

  useEffect(() => {
    if (!isLoading && !isError) {
      setChapter(dataChapter || []); // Use an empty array if dataCategory is falsy
    }
    setClass(dataClass?.result || []); // Use an empty array if dataCategory is falsy
  }, [dataChapter, dataClass, isLoading, isError]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  console.log(Class, "class");

  return (
    <div className="w-full flex">
      <SideBar menus={menus} />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-16  my-16">
          <Card />
        </div>
        <div className="px-16 my-16">
          <div className="flex justify-between mb-5">
            <h3>Kategori</h3>
            <div className="flex justify-between items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-full p-3 "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah
              </button>

              <FontAwesomeIcon icon={faSearch} className="text-purple-700" />
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari"
                  className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[200px] h-[32px] "
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
                  <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
          <TableChapter searchTerm={searchTerm} Chapter={Chapter} setOpenUpdate={setOpenUpdate} Class={Class} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahChapter Class={Class} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
