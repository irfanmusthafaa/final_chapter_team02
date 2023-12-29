import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import searchIcon from "../../assets/images/icon-search3.png";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { TableBank } from "../../assets/components/Admin/bank/TableBank";
import { useGetPayment } from "../../services/admin/payment/get-payment";
import { TablePayment } from "../../assets/components/Admin/payment/TablePayment";

export const AdminTransaksi = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Payment, setPayment] = useState([]);

  const { data: dataPayment, isLoading, isError } = useGetPayment();

  console.log(Payment, "Payments");

  useEffect(() => {
    if (!isLoading && !isError) {
      setPayment(dataPayment || []);
    }
  }, [dataPayment, isLoading, isError]);

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
          <div className="flex flex-col gap-3 md:flex-row justify-between items-start md:items-center mb-5">
            <h3>Transaksi</h3>
            <div className="flex justify-between items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nama user..."
                  style={{ border: ".2px solid grey" }}
                  className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-3 pr-10 py-2 w-40 md:w-48 h-4 "
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
                  <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
          <TablePayment searchTerm={searchTerm} Payment={Payment} setOpenUpdate={setOpenUpdate} />
        </div>
      </div>
    </div>
  );
};
