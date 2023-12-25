import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, Radio, Select, message } from "antd";
import { toast } from "react-toastify";
import { UpdateChapter } from "../../../../services/admin/chapter/put-chapter";
import { UpdateLesson } from "../../../../services/admin/lesson/put-lesson";

export const ModalUpdateLesson = ({ record, openUpdate, setOpenUpdate, Chapter }) => {
  const [Title, setTitle] = useState("");
  const [LearningMaterial, setLearningMaterial] = useState("");
  const [LinkLearningMaterial, setLinkLearningMaterial] = useState("");
  const [ChapterId, setChapterId] = useState(null);
  const [Duration, setDuration] = useState(0);

  useEffect(() => {
    setTitle(record.title);
    setLearningMaterial(record.learningMaterial);
    setLinkLearningMaterial(record.linkLearningMaterial);
    setChapterId(record.chapterId);
    setDuration(record.duration);
  }, [record.title, record.learningMaterial, record.linkLearningMaterial, record.chapterId, record.duration]);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "title") {
        setTitle(e.target.value);
      }
      if (e.target.id === "learningMaterial") {
        setLearningMaterial(e.target.value);
      }
      if (e.target.id === "linkLearningMaterial") {
        setLinkLearningMaterial(e.target.value);
      }
      if (e.target.id === "duration") {
        setDuration(e.target.value);
      }
    }
  };

  const chapterOptions =
    Chapter?.map((item) => ({
      value: item.id,
      label: `${item.id} - ${item.chapterName}`,
    })) || [];

  const handleUpdate = () => {
    if (!Title || !LearningMaterial || !LinkLearningMaterial || !ChapterId || !Duration) {
      toast.error("Please Complete Data!");
      return;
    }

    const id = record.id;
    if (id) {
      UpdateLesson(id, {
        title: Title,
        learningMaterial: LearningMaterial,
        linkLearningMaterial: LinkLearningMaterial,
        chapterId: Number(ChapterId),
        duration: Number(Duration),
      });
      toast.success("Update Lesson Success");
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
          <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Ubah Lesson</h3>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Judul Lesson</label>
              <Input
                onChange={handleInput}
                id="title"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Nama Chapter"
                value={Title}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Learning Material</label>
              <Input
                onChange={handleInput}
                id="learningMaterial"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Learning Material"
                value={LearningMaterial}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Link Learning Material</label>
              <Input
                onChange={handleInput}
                id="linkLearningMaterial"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Link Learning Material"
                value={LinkLearningMaterial}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Id Chapter</label>
              <Select
                onChange={(value) => setChapterId(value)}
                className="border rounded-lg hover:border-purple-700"
                placeholder="Id Chapter"
                options={chapterOptions}
                value={ChapterId}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Durasi</label>
              <Input
                onChange={handleInput}
                id="duration"
                className="border rounded-lg hover:border-purple-700"
                type="number"
                placeholder="Durasi"
                value={Duration}
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
