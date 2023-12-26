import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, message } from "antd";
import { toast } from "react-toastify";
import { UpdateCategory } from "../../../../services/admin/category/put-category";

export const ModalUpdateUser = ({ record, openUpdate, setOpenUpdate }) => {
  const [CategoryName, setCategoryName] = useState("");

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "categoryName") {
        setCategoryName(e.target.value);
      }
    }
  };

  const handleUpdateCategory = () => {
    if (!CategoryName) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    const id = record.id;
    if (id) {
      UpdateCategory(id, { categoryName: CategoryName });
      toast.success("Update Category Success");
      setOpenUpdate(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Data Tidak Berhasil di Update");
    }
  };

  return (
    <Modal
      centered
      open={openUpdate}
      onOk={() => setOpenUpdate(false)}
      onCancel={() => setOpenUpdate(false)}
      footer={null}
      width={700}
      className="mt-10"
    >
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="w-[60%]  my-7">
          <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Ubah Kategori</h3>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Nama Kategori</label>
              <Input
                onChange={handleInput}
                id="categoryName"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Nama Kategori"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
              onClick={() => {
                handleUpdateCategory();
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
