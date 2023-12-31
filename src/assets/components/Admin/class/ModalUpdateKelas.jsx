import { Input, Modal, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { UpdateClass } from "../../../../services/admin/class/put-class";
import { toast } from "react-toastify";
const { TextArea } = Input;

export const ModalUpdateKelas = ({ record, openUpdate, setOpenUpdate, Category }) => {
  const [ClassName, setClassName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(null);
  const [Promo, setPromo] = useState(null);
  const [LevelName, setLevelName] = useState("");
  const [IsFree, setIsFree] = useState(true);
  const [CategoryId, setCategoryId] = useState(null);
  const [LinkSosmed, setLinkSosmed] = useState("");
  const [Author, setAuthor] = useState("");

  useEffect(() => {
    setClassName(record.className);
    setDescription(record.description);
    setPrice(String(record.price));
    setPromo(String(record.promo));
    setLevelName(record.levelName);
    setIsFree(record.isFree);
    setCategoryId(record.categoryId);
    setLinkSosmed(record.linkSosmed);
    setAuthor(record.author);
  }, [
    record.className,
    record.description,
    record.price,
    record.promo,
    record.levelName,
    record.isFree,
    record.categoryId,
    record.linkSosmed,
    record.author,
  ]);

  console.log(record, "record");

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "className") {
        setClassName(e.target.value);
      }
      if (e.target.id === "description") {
        setDescription(e.target.value);
      }
      if (e.target.id === "price") {
        // setPrice(parseInt(e.target.value, 10));
        setPrice(e.target.value);
      }
      if (e.target.id === "promo") {
        // setPromo(parseInt(e.target.value, 10));
        setPromo(e.target.value);
      }
      if (e.target.id === "linkSosmed") {
        setLinkSosmed(e.target.value);
      }
      if (e.target.id === "author") {
        setAuthor(e.target.value);
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

  console.log(ClassName, "ClassName");
  console.log(Description, "Description");
  console.log(Price, "Price");
  console.log(Promo, "Promo");
  console.log(IsFree, "IsFree");
  console.log(LevelName, "LevelName");
  console.log(LinkSosmed, "LinkSosmed");
  console.log(Author, "Author");
  console.log(CategoryId, "CategoryId");

  const handleUpdate = () => {
    if (!ClassName || !Description || !Price || !Promo || !LevelName || !LinkSosmed || !Author || !CategoryId) {
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
    const id = record.classCode;
    if (id) {
      UpdateClass(id, {
        className: ClassName,
        description: Description,
        price: Number(Price),
        promo: Number(Promo),
        levelName: LevelName,
        isFree: IsFree,
        categoryId: String(CategoryId),
        linkSosmed: LinkSosmed,
        author: Author,
      });
      toast.success("Update Class Success");
      setOpenUpdate(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    // else {
    //   toast.error("Data Tidak Berhasil di Update");
    // }
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
          <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Ubah Kelas</h3>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Nama Kelas</label>
              <Input
                onChange={handleInput}
                id="className"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Nama Kelas"
                value={ClassName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Deskripsi</label>
              <TextArea
                rows={5}
                onChange={handleInput}
                id="description"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Deskripsi"
                value={Description}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Harga Kelas</label>
              <Input
                onChange={handleInput}
                id="price"
                className="border rounded-lg hover:border-purple-700"
                type="number"
                placeholder="Harga Kelas"
                value={Price}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Promo</label>
              <Input
                onChange={handleInput}
                id="promo"
                className="border rounded-lg hover:border-purple-700"
                type="number"
                placeholder="Harga Promo"
                value={Promo}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Level</label>
              <Select
                onChange={(value) => setLevelName(value)}
                className="border rounded-lg hover:border-purple-700"
                placeholder="Level"
                options={levelOptions}
                value={LevelName}
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
                value={LinkSosmed}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Author</label>
              <Input
                onChange={handleInput}
                id="author"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Author"
                value={Author}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
              onClick={() => {
                handleUpdate();
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
