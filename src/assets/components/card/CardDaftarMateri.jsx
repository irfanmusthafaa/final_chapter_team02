import React from 'react'
import { BarProgres } from '../barProgres'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faLock } from '@fortawesome/free-solid-svg-icons'

export const CardDaftarMateri = (props) => {
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
                            <div key={lesson.id} className="flex items-center gap-3 transition-transform transform hover:scale-105 cursor-pointer" style={{ borderBottom: "1px solid #B19CD9", boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.08)" }}>
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-200 font-semibold text-sm flex items-center justify-center rounded-full mb-1">
                                    {lessonIndex + 1}
                                </div>
                                <p className="hover:underline text-sm">{lesson.title}</p>
                                <FontAwesomeIcon icon={props.Kelas.is_buy ? faCirclePlay : faLock} className='absolute right-0 mr-8 h-5 w-5 transition-transform transform hover:scale-105' style={{ color: "#73CA5C" }} />
                            </div>
                        ))}

                    </div>
                        
                ))}
                                    
            </div>

        </div>  

    )
}
