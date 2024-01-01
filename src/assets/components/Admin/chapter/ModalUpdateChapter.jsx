import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, Radio, Select, message } from "antd";
import { toast } from "react-toastify";
import { UpdateChapter } from "../../../../services/admin/chapter/put-chapter";

export const ModalUpdateChapter = ({ record, openUpdate, setOpenUpdate, Class }) => {
  const [ChapterName, setChapterName] = useState("");
  const [ClassCode, setClassCode] = useState("");
  const [IsFree, setIsFree] = useState(true);

  useEffect(() => {
    setChapterName(record.chapterName);
    setClassCode(record.classCode);
    // setIsFree(record.isFree);
  }, [record.chapterName, record.classCode, record.isFree]);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "chapterName") {
        setChapterName(e.target.value);
      }
    }
  };

  console.log(IsFree, "isfree");
  const classOptions =
    Class?.map((item) => ({
      value: item.classCode,
      label: `${item.classCode} - ${item.className}`,
    })) || [];

  const handleUpdateChapter = () => {
    if (!ChapterName || !ClassCode) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    const id = record.id;
    if (id) {
      UpdateChapter(id, {
        chapterName: ChapterName,
        classCode: ClassCode,
        is_preview: IsFree,
      });
      toast.success("Update Chapter Success");
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
          <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Ubah Chapter</h3>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Nama Chapter</label>
              <Input
                onChange={handleInput}
                id="chapterName"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Nama Chapter"
                value={ChapterName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Kode Kelas</label>
              <Select
                onChange={(value) => setClassCode(value)}
                className="border rounded-lg hover:border-purple-700"
                placeholder="Kode Kelas"
                options={classOptions}
                value={ClassCode}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Tipe Kelas </label>
              <Radio.Group onChange={(e) => setIsFree(e.target.value === "gratis")} value={IsFree ? "gratis" : "premium"}>
                <Radio value="gratis" onChange={(e) => setIsFree(e.target.checked)}>
                  Gratis
                </Radio>
                <Radio value="premium">Premium</Radio>
              </Radio.Group>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
              onClick={() => {
                handleUpdateChapter();
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
