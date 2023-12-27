import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { TableBank } from "../../assets/components/Admin/bank/TableBank";
import { ModalTambahBank } from "../../assets/components/Admin/bank/ModalTambahBank";
import { useGetAllUsers } from "../../services/admin/users/get-all-users";
import { TableUsers } from "../../assets/components/Admin/users/TableUsers";

export const AdminUser = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Users, setUsers] = useState([]);

  const { data: dataUsers, isLoading, isError } = useGetAllUsers();

  useEffect(() => {
    if (!isLoading && !isError) {
      setUsers(dataUsers?.users || []);
    }
  }, [dataUsers, isLoading, isError]);

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
            <h3>Users</h3>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nama user..."
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
          <TableUsers searchTerm={searchTerm} Users={Users} setOpenUpdate={setOpenUpdate} />
        </div>
      </div>
    </div>
  );
};
