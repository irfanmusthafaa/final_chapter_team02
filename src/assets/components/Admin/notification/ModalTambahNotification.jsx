import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useAddNotificationAll } from "../../../../services/admin/notifications/post-notification";
import { Input } from "antd";
const { TextArea } = Input;

export const ModalTambahNotification = () => {
  const [Title, setTitle] = useState("");
  const [Body, setBody] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");

  const { mutate: dataNotification, status, isSuccess, isError, error } = useAddNotificationAll();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "title") {
        setTitle(e.target.value);
      }
      if (e.target.id === "body") {
        setBody(e.target.value);
      }
      if (e.target.id === "deskripsi") {
        setDeskripsi(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Notification");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  console.log(Title, "Title");
  console.log(Body, "Body");
  console.log(Deskripsi, "Deskripsi");

  const handleAddNotification = () => {
    if (!Title || !Body || !Deskripsi) {
      toast.error("Please Complete Data !!");
      return;
    }
    dataNotification({
      title: Title,
      body: Body,
      deskripsi: Deskripsi,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Notifikasi</h3>
        <div className="w-full flex flex-col  gap-3 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Title</label>
            <Input onChange={handleInput} id="title" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Title" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Body</label>
            <Input onChange={handleInput} id="body" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Body" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Deskripsi</label>
            <TextArea
              rows={4}
              onChange={handleInput}
              id="deskripsi"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Deskripsi"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
            onClick={() => {
              handleAddNotification();
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
