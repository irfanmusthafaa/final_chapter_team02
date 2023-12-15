import { useEffect, useState } from "react";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Card } from "../../assets/components/Admin/Card";
import { Dropdown, Input, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import iconPrefix from "../../assets/images/icon-prefix2.png";
import { TableKelas } from "../../assets/components/Admin/TableKelas";
import { ModalTambahKelas } from "../../assets/components/Admin/ModalTambahKelas";
import searchIcon from "../../assets/images/icon-search3.png";
import { TableKategori } from "../../assets/components/Admin/category/TableKategori";
import { ModalTambahKategori } from "../../assets/components/Admin/category/ModalTambahKategori";
import { ModalUpdateKategori } from "../../assets/components/Admin/category/ModalUpdateKategori";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
const { TextArea } = Input;

export const AdminKategori = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Category, setCategory] = useState([]);

  const { data: dataCategory } = useCategoryDataQuery();

  useEffect(() => {
    setCategory(dataCategory);
  }, [dataCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const menus = [
    { label: "Dashboard", link: "/admin/dashboard", bgColor: "bg-transparent" },
    { label: "Kategori", link: "/admin/kategori", bgColor: "bg-purple-500" },
    { label: "Kelola Kelas", link: "/admin/kelas", bgColor: "bg-transparent" },
  ];

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  return (
    <div className="w-full flex">
      <SideBar menus={menus} />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-16 my-16">
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
          {/* Tabel */}
          <TableKategori searchTerm={searchTerm} Category={Category} setOpenUpdate={setOpenUpdate} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahKategori />
          </Modal>
          {/* <Modal
            centered
            open={openUpdate}
            onOk={() => setOpenUpdate(false)}
            onCancel={() => setOpenUpdate(false)}
            footer={null}
            width={700}
            className="mt-10"
          >
            <ModalUpdateKategori />
          </Modal> */}
        </div>
      </div>
    </div>
  );
};
