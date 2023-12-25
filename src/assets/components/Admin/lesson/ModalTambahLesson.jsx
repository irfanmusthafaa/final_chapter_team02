import React, { useEffect, useRef, useState } from "react";
import { Input, Radio, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAddChapter } from "../../../../services/admin/chapter/post-chapter";
import { useAddLesson } from "../../../../services/admin/lesson/post-lesson";

export const ModalTambahLesson = ({ Chapter }) => {
  const [Title, setTitle] = useState("");
  const [LearningMaterial, setLearningMaterial] = useState("");
  const [LinkLearningMaterial, setLinkLearningMaterial] = useState("");
  const [ChapterId, setChapterId] = useState(null);
  const [Duration, setDuration] = useState(0);

  const { mutate: dataLesson, status, isSuccess, isError, error } = useAddLesson();

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

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Lesson");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  const handleAddLesson = () => {
    if (!Title || !LearningMaterial || !LinkLearningMaterial || !ChapterId || !Duration) {
      toast.error("Please Complete Data!");
      return;
    }
    dataLesson({
      title: Title,
      learningMaterial: LearningMaterial,
      linkLearningMaterial: LinkLearningMaterial,
      chapterId: Number(ChapterId),
      duration: Number(Duration),
    });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Lesson</h3>
        <div className="w-full flex flex-col  gap-3 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Judul Lesson</label>
            <Input onChange={handleInput} id="title" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Judul Lesson" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Learning Material</label>
            <Input
              onChange={handleInput}
              id="learningMaterial"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Learning Material"
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
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Id Chapter</label>
            <Select
              onChange={(value) => setChapterId(value)}
              className="border rounded-lg hover:border-purple-700"
              placeholder="Id Chapter"
              options={chapterOptions}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Durasi</label>
            <Input onChange={handleInput} id="duration" className="border rounded-lg hover:border-purple-700" type="number" placeholder="Durasi" />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
            onClick={() => {
              handleAddLesson();
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
