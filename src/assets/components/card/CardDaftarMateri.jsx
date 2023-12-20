import React, { useEffect, useState } from 'react'
import { BarProgres } from '../barProgres'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faLock } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useClassDetailQuery } from '../../../services/class/get-detail-class'
import { useLessonDetailQuery } from '../../../services/lesson/get-detail-lesson'
import { CardModal } from './CardModal'
import { CustomButtonSatu } from '../button/CustomButtonSatu'


export const CardDaftarMateri = (props) => {

    const handleKlikLesson = async (idLesson) => {
        try {
            props.setId(idLesson);
        } catch (error) {
            console.error('Kesalahan mengambil detail pelajaran:', error);
        }
    }

   

    const openModal = () => {
        // Logika untuk membuka modal, Anda dapat menggunakan state atau library/modal yang telah Anda tentukan
        props.setIsModalOpen(true);
    };
   

    return (
    
        <div className='absolute right-0 mr-[10%] mt-[5%] w-[400px] bg-white shadow-xl rounded-2xl'>
                
            <div className='flex flex-col p-4 mb-2 gap-2'>
                <div className='flex flex-row justify-center items-center'>
                    <h2 className='w-full'>Materi Belajar</h2>
                    <BarProgres/>
                </div>

                {props.Kelas.chapters?.sort((a, b) => a.id - b.id).map((chapter, chapterIndex) => (
                    <div key={chapter.id}>
                        <div  className='flex justify-between'>
                            <h5>{chapter.chapterName}</h5>
                                <p className='text-sm pr-8'>{chapter.totalDuration}</p>
                        </div>

                        {chapter.Lessons.map((lesson, lessonIndex) => (
                            <div key={lesson.id} className="flex items-center gap-3 transition-transform transform hover:scale-105 cursor-pointer" 
                                style={{ 
                                    borderBottom: "1px solid #B19CD9", boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.08)" 
                                }}
                                onClick={() => (chapter.is_preview ? handleKlikLesson(lesson.id) : openModal()) }
                            >
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-200 font-semibold text-sm flex items-center justify-center rounded-full mb-1">
                                    {lessonIndex + 1}
                                </div>
                                <p className="hover:underline text-sm">{lesson.title}</p>
                                
                                <FontAwesomeIcon icon={chapter.is_preview ? faCirclePlay : faLock} className='absolute right-0 mr-8 h-5 w-5 transition-transform transform hover:scale-105' style={chapter.is_preview ? { color: "#73CA5C" }:{ color: "#A3A3A3" }} />
                            </div>
                        ))}

                    </div>
                        
                ))}
                                    
            </div>

           

            {/* <ModalSatu isOpen={isModalOpen} onClose={closeModal}>
                <div className="">
                    <div className="font-bold mb-4 text-center">
                        <p>Selangkah Lagi Menuju</p>
                        <p className="text-purple-900">Menuju Premium</p>
                    </div>

          <CardModal {...contentData} />
                    <div className="flex items-center justify-center mt-8">
                        <CustomButtonSatu button_text="Beli Sekarang" iconPath={next} onClick={closeModal} />
                    </div>
                </div>
            </ModalSatu> */}

        </div>
        
        

    )
}
