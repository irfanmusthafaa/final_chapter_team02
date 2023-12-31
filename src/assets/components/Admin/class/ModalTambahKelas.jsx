import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Input, Radio, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddClass } from "../../../../services/admin/class/post-class";
const { TextArea } = Input;

export const ModalTambahKelas = ({ Category }) => {
  const [ClassName, setClassName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [Promo, setPromo] = useState(0);
  const [IsFree, setIsFree] = useState(true);
  const [LevelName, setLevelName] = useState("");
  const [LinkSosmed, setLinkSosmed] = useState("");
  const [Author, setAuthor] = useState("");
  const [CategoryId, setCategoryId] = useState("");
  const [ThumbnailPicture, setThumbnailPicture] = useState(null);

  const { mutate: dataClass, status, isSuccess, isError, error } = useAddClass();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "className") {
        setClassName(e.target.value);
      }
      if (e.target.id === "description") {
        setDescription(e.target.value);
      }
      if (e.target.id === "price") {
        setPrice(e.target.value);
      }
      if (e.target.id === "promo") {
        setPromo(e.target.value);
      }
      if (e.target.id === "linkSosmed") {
        setLinkSosmed(e.target.value);
      }
      if (e.target.id === "author") {
        setAuthor(e.target.value);
      }
      if (e.target.id === "thumbnailPicture") {
        setThumbnailPicture(e.target.files[0]);
      }
    }
  };

  const categoryOptions =
    Category?.map((item) => ({
      value: item.id,
      label: item.categoryName,
    })) || [];

  console.log(categoryOptions, "options");

  const levelOptions = [
    {
      value: "Beginner",
      label: "Beginner",
    },
    {
      value: "Intermediate",
      label: "Intermediate",
    },
    {
      value: "Advance",
      label: "Advance",
    },
  ];

  // console.log(ClassName, "ClassName");
  // console.log(Description, "Description");
  // console.log(Price, "Price");
  // console.log(Promo, "Promo");
  // console.log(IsFree, "IsFree");
  // console.log(LevelName, "LevelName");
  // console.log(LinkSosmed, "LinkSosmed");
  // console.log(Author, "Author");
  // console.log(CategoryId, "CategoryId");
  // console.log(ThumbnailPicture, "ThumbnailPicture");

  useEffect(() => {
    if (isError) {
      toast.warning(error.response.data.error.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Class");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  const handleAddCategory = async () => {
    if (!ClassName || !Description || !Price || !Promo || !LevelName || !LinkSosmed || !Author || !CategoryId || !ThumbnailPicture) {
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
    formData.append("className", ClassName);
    formData.append("description", Description);
    formData.append("price", Price);
    formData.append("promo", Promo);
    formData.append("isFree", IsFree);
    formData.append("levelName", LevelName);
    formData.append("linkSosmed", LinkSosmed);
    formData.append("author", Author);
    formData.append("categoryId", CategoryId);
    formData.append("thumbnailPicture", ThumbnailPicture);

    try {
      await dataClass(formData);
    } catch (error) {
      return null;
    }
  };
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Kelas</h3>
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Nama Kelas</label>
            <Input onChange={handleInput} id="className" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Nama Kelas" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Deskripsi</label>
            <TextArea
              rows={4}
              onChange={handleInput}
              id="description"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Deskripsi"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Harga Kelas</label>
            <Input onChange={handleInput} id="price" className="border rounded-lg hover:border-purple-700" type="number" placeholder="Harga Kelas" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Promo</label>
            <Input onChange={handleInput} id="promo" className="border rounded-lg hover:border-purple-700" type="number" placeholder="Harga Promo" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Level</label>
            <Select
              onChange={(value) => setLevelName(value)}
              className="border rounded-lg hover:border-purple-700"
              placeholder="Level"
              options={levelOptions}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Tipe Kelas </label>
            <Radio.Group onChange={(e) => setIsFree(e.target.value === "gratis")} defaultValue="gratis">
              <Radio value="gratis" onChange={(e) => setIsFree(e.target.checked)}>
                Gratis
              </Radio>
              <Radio value="premium">Premium</Radio>
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Kategori</label>
            <Select
              onChange={(value) => setCategoryId(value)}
              className="border rounded-lg hover:border-purple-700"
              placeholder="Kategori"
              options={categoryOptions}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Link Grup Kelas</label>
            <Input
              onChange={handleInput}
              id="linkSosmed"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Link Grup Kelas"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Author</label>
            <Input onChange={handleInput} id="author" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Author" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Gambar Kelas</label>
            <Input
              onChange={handleInput}
              id="thumbnailPicture"
              className="border rounded-lg hover:border-purple-700"
              type="file"
              placeholder="Gambar Kelas"
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
