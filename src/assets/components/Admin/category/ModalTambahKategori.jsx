import React, { useEffect, useRef, useState } from "react";
import { Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddCategory } from "../../../../services/admin/category/post-category";

export const ModalTambahKategori = () => {
  const [CategoryName, setCategoryName] = useState("");
  const [ThumbnailPictureCategory, setThumbnailPictureCategory] = useState(null);

  const { mutate: dataCategory, status, isSuccess, isError, error } = useAddCategory();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "categoryName") {
        setCategoryName(e.target.value);
      }
      if (e.target.id === "thumbnailPictureCategory") {
        setThumbnailPictureCategory(e.target.files[0]);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.warning(error.response.data.error.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Category");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  const handleAddCategory = async () => {
    if (!CategoryName || !ThumbnailPictureCategory) {
      toast.error("Please Complete Data!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const formData = new FormData();
    formData.append("categoryName", CategoryName);
    formData.append("thumbnailPictureCategory", ThumbnailPictureCategory);

    try {
      await dataCategory(formData);
    } catch (error) {
      return null;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Kategori</h3>
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

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Gambar Kategori</label>
            <Input
              onChange={handleInput}
              id="thumbnailPictureCategory"
              className="border rounded-lg hover:border-purple-700"
              type="file"
              placeholder="Gambar Kategori"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
            onClick={() => {
              handleAddCategory();
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
