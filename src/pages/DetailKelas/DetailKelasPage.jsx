import React, { useEffect, useState } from "react";
import { Navbar } from "../../assets/components/Navbar";
import chat from "../../assets/images/icon/gridicons_chat.svg";
import { BackLink } from "../../assets/components/link/BackLink";
import { useParams } from "react-router-dom";
import { useClassDetailQuery } from "../../services/class/get-detail-class";
import { CustomButtonDua } from "../../assets/components/button/CustomButtonDua";
import { CardDaftarMateri } from "../../assets/components/card/CardDaftarMateri";
import { useLessonDetailQuery } from "../../services/lesson/get-detail-lesson";
import { joinMyClass } from "../../services/class/join-my-class";
import { useMutation } from "@tanstack/react-query";
import { ModalBeliKelas } from "../../assets/components/modal/ModalBeliKelas";
import { toast } from "react-toastify";
import { useLearningDataQuery } from "../../services/learning/get-data-learning";
import { AddRating } from "../../assets/components/AddRating";
import { ClipboardDocumentListIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { StarFilled } from "@ant-design/icons";

export const DetailKelasPage = () => {
  const { classCode } = useParams();

  const [Class, setClass] = useState([]);

  const { data: dataClass } = useClassDetailQuery(classCode);

  const [selectedLesson, setSelectedLesson] = useState(Class.chapters?.Lessons?.[0]?.id);

  const [lesson, setLesson] = useState([]);
  const { data: dataLesson } = useLessonDetailQuery(classCode, selectedLesson);

  const [learning, setLearning] = useState([]);
  const { data: dataLearning } = useLearningDataQuery();

  useEffect(() => {
    if (dataClass) {
      setClass(dataClass);
    }

    if (dataLesson) {
      setLesson(dataLesson);
    }

    if (dataLearning) {
      setLearning(dataLearning);
    }
  }, [dataClass, dataLesson, dataLearning]);

  const openTelegramLink = () => {
    window.open(Class.linkSosmed, "_blank");
  };

  const joinClass = useMutation(() => joinMyClass(classCode));
  const isClassCodeExists = learning.some((learning) => learning.classCode === classCode);

  const AddClass = async () => {
    try {
      joinClass.mutate();
      toast.success("Anda Berhasil Menambahkan Kelas ke dalam Kelas Saya");
    } catch (error) {
      console.error("Invalid URL or unable to extract video ID:", error.message);
      return null;
    }
  };

  const VideoUrl = lesson.lesson?.linkLearningMaterial;

  const [embedUrl, setEmbedUrl] = useState("");

  useEffect(() => {
    const getVideoId = (url) => {
      try {
        const videoId = url.split("v=")[1];
        return videoId;
      } catch (error) {
        console.error("Invalid URL or unable to extract video ID:", error.message);
        return null;
      }
    };

    const convertToEmbedUrl = (videoId) => {
      return `https://www.youtube.com/embed/${videoId}`;
    };

    if (VideoUrl) {
      const videoId = getVideoId(VideoUrl);
      videoId && setEmbedUrl(convertToEmbedUrl(videoId));
    }
  }, [VideoUrl]);

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* navbar */}
      <Navbar classPageActive={location.pathname.includes("/KelasSaya/KelasBerjalan") || location.pathname.includes(`/Detailkelas/${classCode}`)} />
      {/* dekstop */}
      <div className="pt-[5rem] md:flex flex-col h-screens items-center hidden">
        <div className="bg-purple-100 w-full shadow-md mb-2">
          <div className="flex flex-row px-[3.5%]">
            <div className=" w-[65%] mt-[3%]">
              <BackLink />
              <div className="px-5 my-4">
                <div className="flex justify-between items-center">
                  <p className="text-purple-700 font-bold ">{Class.categorys?.categoryName}</p>
                  <div className="flex flex-row justify-center items-center text-sm">
                    <StarFilled className="w-4" style={{ color: "gold" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.averageRating?.toFixed(1)}</p>
                  </div>
                </div>
                <p className="text-black font-bold mt-1">{Class.className}</p>
                <p className="text-black text-sm mt-1">By : {Class.author}</p>
                <div className="flex gap-10 text-xs mt-2">
                  <div className="flex flex-row justify-center items-center">
                    <ShieldCheckIcon className="w-4" style={{ color: "green" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.levelName}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <ClipboardDocumentListIcon className="w-4" style={{ color: "green" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.module} Modul</p>
                  </div>
                  <div className="flex justify-center items-center gap-1 ">
                    <div className="flex flex-row justify-center items-center">
                      <ClockIcon className="w-4" style={{ color: "green" }} />
                      <p className="pl-[.1rem] font-semibold">{Class.totalDuration} Menit</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <CustomButtonDua button_text="Join Grup Telegram" iconPath={chat} onClick={openTelegramLink} />
                    {!isClassCodeExists && <CustomButtonDua button_text="Tambah Kelas Saya" iconPath={null} onClick={AddClass} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardDaftarMateri Kelas={Class} setIsModalOpen={setOpen} Id={selectedLesson} setId={setSelectedLesson} />
        <div className="flex flex-col items-start h-screens px-[5%] w-full">
          <div className=" flex flex-row">
            <div className="flex flex-col bg-white w-[50rem] shadow-2xl rounded-xl p-5 m-[7.5%] mt-3" style={{ border: ".1px solid grey" }}>
              <div className="flex justify-center items-center bg-current h-[327px] rounded-2xl mt-4">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={embedUrl}
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* rating add  */}
              <div className="flex flex-col mt-3 w-1/4">
                <h3 className="text-purple-700">Rate This Class</h3>
                <AddRating chapters={Class.chapters} classCode={classCode} />
              </div>
              <div className="mt-2">
                <h2 className="mb-3">Tentang kelas</h2>
                <p className="text-justify text-sm">{Class.description}</p>
              </div>
              <div className="mt-3">
                <h2 className="mb-3">Kelas Ini Ditujukan Untuk</h2>
                <div className="mt-2 text-justify">
                  <div className="flex-shrink-0 pr-4 ml-4 text-sm">
                    <ol className="flex flex-col gap-1 list-decimal">
                      <li>Anda yang ingin memahami poin penting design system</li>
                      <li>Anda yang ingin membantu perusahaan lebih optimal dalam membuat design produk</li>
                      <li>Anda yang ingin latihan membangun design system</li>
                      <li>Anda yang ingin latihan membangun design system</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalBeliKelas open={open} setOpen={setOpen} Class={Class} classCode={classCode} />

      {/* mobile */}
      <div className="pt-[6rem] flex flex-col h-screens items-center md:hidden">
        <div className="bg-purple-100 w-full shadow-md mb-2">
          <div className="flex flex-col my-[3%]">
            <BackLink />
            <div className="w-full">
              <div className="pl-8 pr-4 my-1">
                <div className="flex justify-between items-center">
                  <p className="text-purple-700 font-bold ">{Class.categorys?.categoryName}</p>
                  <div className="flex flex-row justify-center items-center text-sm">
                    <StarFilled className="w-4" style={{ color: "gold" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.averageRating?.toFixed(1)}</p>
                  </div>
                </div>
                <p className="text-black font-bold mt-1">{Class.className}</p>
                <p className="text-black text-sm mt-1">By : {Class.author}</p>
                <div className="flex gap-8 text-xs mt-2">
                  <div className="flex flex-row justify-center items-center">
                    <ShieldCheckIcon className="w-4" style={{ color: "green" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.levelName}</p>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <ClipboardDocumentListIcon className="w-4" style={{ color: "green" }} />
                    <p className="pl-[.1rem] font-semibold">{Class.module} Modul</p>
                  </div>
                  <div className="flex justify-center items-center gap-1 ">
                    <div className="flex flex-row justify-center items-center">
                      <ClockIcon className="w-4" style={{ color: "green" }} />
                      <p className="pl-[.1rem] font-semibold">{Class.totalDuration} Menit</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2">
                    <CustomButtonDua button_text="Join Grup Chat" iconPath={chat} onClick={openTelegramLink} />
                    {!isClassCodeExists && <CustomButtonDua button_text="Tambah Kelas Saya" iconPath={null} onClick={AddClass} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-screens items-center justify-center px-3">
          <div className="flex justify-center items-center bg-current h-fit w-full mt-4">
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-row justify-center bg-">
            <h3 className="text-purple-700 pt-1">Rate This Class</h3>
            <AddRating chapters={Class.chapters} classCode={classCode} />
          </div>
        </div>
        <div className="bg-purple-50">
          <div className="mt-2 px-3">
            <h3 className="mb-2">Tentang Kelas</h3>
            <p className="text-justify text-sm">{Class.description}</p>
          </div>
          <CardDaftarMateri Kelas={Class} setIsModalOpen={setOpen} Id={selectedLesson} setId={setSelectedLesson} />
        </div>
      </div>
    </div>
  );
};
