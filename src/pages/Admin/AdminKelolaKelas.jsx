import { useEffect, useState } from "react";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Card } from "../../assets/components/Admin/Card";
import { Dropdown, Input, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import iconPrefix from "../../assets/images/icon-prefix2.png";
import { TableKelas } from "../../assets/components/Admin/class/TableKelas";
import { ModalTambahKelas } from "../../assets/components/Admin/class/ModalTambahKelas";
import searchIcon from "../../assets/images/icon-search3.png";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
import { useClassDataQuery } from "../../services/class/get-data-class";

export const AdminKelolaKelas = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Category, setCategory] = useState([]);
  const [Class, setClass] = useState([]);
  const [filterCategory, setFilterCategory] = useState(undefined);

  const { data: dataCategory } = useCategoryDataQuery();
  const { data: dataClass } = useClassDataQuery({
    categoryId: filterCategory,
    latest: true,
    limit: 1000,
    page: 1,
  });

  useEffect(() => {
    setCategory(dataCategory);
    setClass(dataClass?.result);
  }, [dataCategory, dataClass]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMenuClick = (e) => {
    const selectedCategoryId = e.key;
    setFilterCategory(selectedCategoryId);
  };

  const items =
    Category?.map((item) => ({
      key: item.id,
      label: <p className="text-center">{item.categoryName}</p>,
    })) || [];

  items.unshift({ key: "", label: <p className="text-center">Semua Kategori</p> });

  const menuProps = {
    items,
    onClick: handleMenuClick,
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
            <h3>Kelola Kelas</h3>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-3">
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900  cursor-pointer rounded-xl py-2 px-3 "
                onClick={() => setOpen(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tambah Data
              </button>

              <Dropdown menu={menuProps} placement="bottom">
                <button className="flex justify-center gap-2 items-center  border-purple-700 bg-white text-purple-700 font-bold border-1 rounded-xl py-2 px-3">
                  <FontAwesomeIcon icon={faFilter} />
                  Filter
                </button>
              </Dropdown>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari kelas..."
                  style={{ border: ".2px solid grey" }}
                  className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-28 md:w-48 h-4"
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
          <TableKelas searchTerm={searchTerm} Category={Category} Class={Class} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahKelas Category={Category} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
