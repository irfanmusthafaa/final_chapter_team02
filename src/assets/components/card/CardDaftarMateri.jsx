import React, { useEffect, useState } from "react";
import { BarProgres } from "../BarProgres";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faLock } from "@fortawesome/free-solid-svg-icons";

export const CardDaftarMateri = (props) => {
  const handleKlikLesson = async (idLesson) => {
    try {
      props.setId(idLesson);
    } catch (error) {
      console.error("Kesalahan mengambil detail pelajaran:", error);
    }
  };

  const openModal = () => {
    props.setIsModalOpen(true);
  };

  return (
    <div className="absolute right-0 md:mr-[4%] md:mt-[5%] w-full md:w-[400px] bg-purple-50 md:bg-white shadow-xl md:rounded-2xl">
      <div className="flex flex-col p-4 mb-2 gap-2">
        <div className="flex flex-row justify-center items-center">
          <h2 className="w-full hidden">Materi Belajar</h2>
          <h3 className="w-full md:hidden">Materi Belajar</h3>
          <BarProgres presentase={props.showImage ? props.Kelas.presentase : props.realtimePresentase} />
        </div>
        {/* {console.log(props.videoUrl, "")} */}

        {props.Kelas.chapters
          ?.sort((a, b) => a.id - b.id)
          .map((chapter, chapterIndex) => (
            <div key={chapter.id} className="flex flex-col gap-3 bg-white px-2 md:px-0">
              <div className="flex justify-between">
                <h4 className="text-purple-700">{chapter.chapterName}</h4>
                <p className="text-sm font-semibold pr-2 text-blue-400">{chapter.totalDuration} Menit</p>
              </div>
              {chapter.Lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-3 transition-transform transform hover:scale-105 cursor-pointer"
                  style={{
                    borderBottom: "1px solid #B19CD9",
                    boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.08)",
                  }}
                  onClick={() => (chapter.is_preview ? handleKlikLesson(lesson.id) : openModal())}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 font-semibold text-sm flex items-center justify-center rounded-full mb-1">
                    {lessonIndex + 1}
                  </div>
                  <p className="hover:underline text-sm">{lesson.title}</p>

                  <FontAwesomeIcon
                    icon={chapter.is_preview ? faCirclePlay : faLock}
                    className="absolute right-0 mr-2 h-5 w-5 transition-transform transform hover:scale-105"
                    // style={chapter.is_preview ? { color: "#73CA5C" } : { color: "#A3A3A3" }}
                    style={
                      chapter.is_preview
                        ? {
                            color:lesson.linkLearningMaterial === props.videoUrl ? "#8A3FFF" : "#73CA5C",
                          }
                        : { color: "#A3A3A3" }
                    }

                  />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};
