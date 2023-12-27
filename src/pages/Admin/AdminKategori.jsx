import { useEffect, useState } from "react";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Card } from "../../assets/components/Admin/Card";
import { Input, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { TableKategori } from "../../assets/components/Admin/category/TableKategori";
import { ModalTambahKategori } from "../../assets/components/Admin/category/ModalTambahKategori";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
const { TextArea } = Input;

export const AdminKategori = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Category, setCategory] = useState([]);

  const { data: dataCategory, isLoading, isError } = useCategoryDataQuery();

  useEffect(() => {
    if (!isLoading && !isError) {
      setCategory(dataCategory || []); // Use an empty array if dataCategory is falsy
    }
  }, [dataCategory, isLoading, isError]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  return (
    <div className="w-full flex">
      <SideBar />
      <div className="bg-white w-[80%]">
        <NavbarAdmin />
        <div className="px-10 my-16">
          <Card />
        </div>
        <div className="px-10 my-16">
          <div className="flex flex-col  gap-3 md:flex-row justify-between items-start md:items-center mb-5">
            <h3>Kategori</h3>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-xl py-2 px-3 "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah Data
              </button>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari kategori..."
                  style={{ border: ".2px solid grey" }}
                  className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-28 md:w-48 h-4 "
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
        </div>
      </div>
    </div>
  );
};
