import React, { useEffect, useState } from "react";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchIcon from "../../assets/images/icon-search3.png";
import { SideBar } from "../../assets/components/Admin/SideBar";
import { Card } from "../../assets/components/Admin/Card";
import { useGetLesson } from "../../services/admin/lesson/get-lesson";
import { useGetChapter } from "../../services/admin/chapter/get-chapter";
import { TableLesson } from "../../assets/components/Admin/lesson/TableLesson";
import { ModalTambahLesson } from "../../assets/components/Admin/lesson/ModalTambahLesson";

export const AdminLesson = () => {
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [Lesson, setLesson] = useState([]);
  const [Chapter, setChapter] = useState([]);

  const { data: dataLesson, isLoading, isError } = useGetLesson();
  const { data: dataChapter } = useGetChapter();

  useEffect(() => {
    if (!isLoading && !isError) {
      setLesson(dataLesson || []);
    }
    setChapter(dataChapter || []);
  }, [dataChapter, dataLesson, isLoading, isError]);

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
            <h3>Lesson</h3>
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
                  placeholder="Cari Judul Lesson..."
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
          <TableLesson searchTerm={searchTerm} Chapter={Chapter} setOpenUpdate={setOpenUpdate} Lesson={Lesson} />
          <Modal centered open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} footer={null} width={700} className="mt-10">
            <ModalTambahLesson Chapter={Chapter} />
          </Modal>
        </div>
      </div>
    </div>
  );
};
