import React, { useEffect, useRef, useState } from "react";
import { Button, Input } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddCategory } from "../../../../services/admin/category/post-category";
import { UpdateCategory, useUpdateCategory } from "../../../../services/admin/category/put-category";

export const ModalUpdateKategori = ({ record }) => {
  const [CategoryName, setCategoryName] = useState("");

  const navigate = useNavigate();

  const { mutate: dataCategory, status, isSuccess, isError, error, data } = useUpdateCategory();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "categoryName") {
        setCategoryName(e.target.value);
      }
    }
  };

  useEffect(() => {
    // if (isError) {
    //   toast.error(error.response.data.err);
    // }
    if (isSuccess) {
      // console.log("Updated data:", dataCategory);
      console.log(data, "data");
      toast.success("Update Berhasil");
      navigate("/admin/kategori");
    }
  }, [status]);

  const handleUpdateCategory = () => {
    if (!CategoryName) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    const id = record.idKategori;
    console.log(CategoryName, "nama kategori");

    if (id) {
      UpdateCategory(id, CategoryName);
    } else {
      console.error("id is undefined or null");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Update Kategori</h3>
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Nama Kategori</label>
            <Input
              onChange={handleInput}
              id="categoryName"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Nama Kategori"
              // value={record.categoryName}
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
  );
};
