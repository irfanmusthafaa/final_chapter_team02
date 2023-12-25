import React, { useEffect, useState } from 'react'
import { Nav } from '../../assets/components/Nav'
import { CustomButtonSatu } from '../../assets/components/button/CustomButtonSatu'
import chat from '../../assets/images/icon/gridicons_chat.svg'
import { BackLink } from '../../assets/components/link/BackLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { useClassDetailQuery } from '../../services/class/get-detail-class';
import { CustomButtonDua } from '../../assets/components/button/CustomButtonDua';
import { CardDaftarMateri } from '../../assets/components/card/CardDaftarMateri';
import { useLessonDetailQuery } from '../../services/lesson/get-detail-lesson';
import next from "../../assets/images/icon/circle-arrow-right-solid.svg";
import { CardModal } from '../../assets/components/card/CardModal';
import { joinMyClass, useJoinClassQuery } from '../../services/class/join-my-class';
import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';
import { ModalBeliKelas } from '../../assets/components/modal/ModalBeliKelas';

export const DetailKelasPage = () => {


const { classCode } = useParams();

const [Class, setClass] = useState([]);

const { data: dataClass } = useClassDetailQuery(classCode); 

const [selectedLesson, setSelectedLesson] = useState(
  Class.chapters?.Lessons?.[0]?.id
);



const [lesson, setLesson] = useState([]);

const { data: dataLesson } = useLessonDetailQuery(selectedLesson); 



useEffect(() => {
    if (dataClass) {
        setClass(dataClass);
    }

    if (dataLesson) {
        setLesson(dataLesson);
    }
}, [dataClass, dataLesson]);


const openTelegramLink = () => {
    window.open(Class.linkSosmed, "_blank");
};

// const { mutate, data, isLoading, error } = useJoinClassQuery(classCode);
const joinClass = useMutation(() => joinMyClass(classCode));

const AddClass = async () => {
    try {
        joinClass.mutate();
    } catch (error) {
      console.error('Error joining class:', error);
    }
};
const VideoUrl = lesson.linkLearningMaterial;

const [embedUrl, setEmbedUrl] = useState('');

  useEffect(() => {
    const getVideoId = (url) => {
        try {
            const videoId = url.split('v=')[1];
            return videoId;
        } catch (error) {
            console.error('Invalid URL or unable to extract video ID:', error.message);
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



const semuaChapterIsPreview = Class.chapters?.every((chapter) => chapter.is_preview);

if (semuaChapterIsPreview) {
  console.log('Oke, semua chapter memiliki is_preview bernilai true.');
} else {
  console.log(semuaChapterIsPreview,'Tidak semua chapter memiliki is_preview bernilai true.');
}

const [open, setOpen] = useState(false);
  
  return (
    <div className='bg-white'>
        {/* navabar */}
        <Nav/>
        
        <div className='flex flex-col h-screens items-center'>
            <div className='bg-purple-100 w-full'>
                <div className='flex flex-row px-[5%]'>
                        <div className='w-[55%] mt-[3%]'>
                            <BackLink/>
                            <div className="px-4 my-4">
                                
                                <div className="flex justify-between items-center">
                                    <p className="text-purple-700 font-bold ">{Class.categorys?.categoryName}</p>
                                    <p className="text-xs flex justify-center items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M7.0001 10.0742L9.42094 11.5384C9.86427 11.8067 10.4068 11.41 10.2901 10.9084L9.64844 8.15503L11.7893 6.30003C12.1801 5.96169 11.9701 5.32003 11.4568 5.27919L8.63927 5.04003L7.53677 2.43836C7.33844 1.96586 6.66177 1.96586 6.46344 2.43836L5.36094 5.03419L2.54344 5.27336C2.0301 5.31419 1.8201 5.95586 2.21094 6.29419L4.35177 8.14919L3.7101 10.9025C3.59344 11.4042 4.13594 11.8009 4.57927 11.5325L7.0001 10.0742Z"
                                            fill="#F9CC00"
                                        />
                                        </svg>{" "}
                                        {Class.averageRating}
                                    </p>
                                </div>
                                <p className="text-black font-bold mt-1">{Class.className}</p>
                                <p className="text-black text-sm mt-1">By : {Class.author}</p>
                                <div className="flex gap-5 text-xs mt-1">
                                    <div className="flex justify-center items-center gap-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path
                                            d="M10.5 5.5C10.5 8.275 8.58 10.87 6 11.5C3.42 10.87 1.5 8.275 1.5 5.5V2.5L6 0.5L10.5 2.5V5.5ZM6 10.5C7.875 10 9.5 7.77 9.5 5.61V3.15L6 1.59L2.5 3.15V5.61C2.5 7.77 4.125 10 6 10.5ZM7.525 8L5.985 7.075L4.45 8L4.855 6.25L3.5 5.08L5.29 4.925L5.985 3.275L6.685 4.92L8.475 5.075L7.115 6.25L7.525 8Z"
                                            fill="#73CA5C"
                                        />
                                        </svg>
                                        <p className="font-semibold text-purple-900">{Class.levelName}</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <g clipPath="url(#clip0_76_2206)">
                                            <path d="M3.33337 1.7334H9.33337V2.25007H3.33337V1.7334Z" fill="#73CA5C" />
                                            <path
                                            d="M9.66664 2.66675H3.28664C3.20158 2.66554 3.11764 2.64712 3.03988 2.61259C2.96213 2.57806 2.89218 2.52815 2.83424 2.46585C2.7763 2.40355 2.73159 2.33017 2.70278 2.25012C2.67398 2.17007 2.66168 2.08501 2.66664 2.00008C2.66623 1.83107 2.73003 1.6682 2.84513 1.54444C2.96023 1.42067 3.11804 1.34525 3.28664 1.33341H9.66664C9.75505 1.33341 9.83983 1.2983 9.90235 1.23578C9.96486 1.17327 9.99998 1.08849 9.99998 1.00008C9.99998 0.911676 9.96486 0.826891 9.90235 0.764379C9.83983 0.701867 9.75505 0.666748 9.66664 0.666748H3.28664C2.94117 0.678847 2.6139 0.824646 2.37386 1.0734C2.13382 1.32214 1.99977 1.6544 1.99998 2.00008C1.99675 2.05448 1.99675 2.10902 1.99998 2.16341C1.99677 2.18998 1.99677 2.21684 1.99998 2.24341V10.0001C1.99977 10.3458 2.13382 10.678 2.37386 10.9268C2.6139 11.1755 2.94117 11.3213 3.28664 11.3334H9.66664C9.75505 11.3334 9.83983 11.2983 9.90235 11.2358C9.96486 11.1733 9.99998 11.0885 9.99998 11.0001V3.02341C10.0002 2.93273 9.96581 2.84537 9.90389 2.77912C9.84197 2.71286 9.75714 2.67268 9.66664 2.66675ZM9.33331 10.6667H3.28664C3.11804 10.6549 2.96023 10.5795 2.84513 10.4557C2.73003 10.332 2.66623 10.1691 2.66664 10.0001V3.18341C2.85617 3.28797 3.07028 3.33977 3.28664 3.33341H9.33331V10.6667Z"
                                            fill="#73CA5C"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_76_2206">
                                            <rect width="12" height="12" fill="white" />
                                            </clipPath>
                                        </defs>
                                        </svg>
                                        <p className="font-semibold">{Class.module} Modul</p>
                                    </div>
                                    <div className="flex justify-center items-center gap-1 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path
                                            d="M6.99996 12.8334C3.77821 12.8334 1.16663 10.2218 1.16663 7.00008C1.16663 3.77833 3.77821 1.16675 6.99996 1.16675C10.2217 1.16675 12.8333 3.77833 12.8333 7.00008C12.8333 10.2218 10.2217 12.8334 6.99996 12.8334ZM7.58329 7.00008V4.08342H6.41663V8.16675H9.91663V7.00008H7.58329Z"
                                            fill="#73CA5C"
                                        />
                                        </svg>
                                        <p className="font-semibold">{Class.totalDuration} Menit</p>
                                    </div>
                                </div>
                                <div>

                                <div className="flex justify-between items-center">
                                    <CustomButtonDua button_text="Join Grup Telegram" iconPath={chat} onClick={openTelegramLink}/>
                                    <CustomButtonDua button_text="Tamabah Kelas Saya" iconPath={null} onClick={AddClass}/>
                                </div>
                                
                        
                                
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>

            <CardDaftarMateri
                Kelas={Class}
                setIsModalOpen={setOpen}
                Id={selectedLesson} 
                setId={setSelectedLesson}
            />


            <div className='flex flex-col h-screens items-center justify-center px-[5%]'>
                
                <div className='flex flex-row px-4'>
                    <div className='flex flex-col bg-white w-[55%] gap-8 '>
                        <div className='flex justify-center items-center bg-current h-[327px] rounded-2xl mt-8'>
                            <iframe
                                className="w-full h-full rounded-2xl"
                                src={embedUrl}
                                title="YouTube Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className='mt-0 pt-0'>
                            <h3 className='mb-3'>Tentang kelas</h3>
                            <p className='text-left text-sm'> 
                                {Class.description}
                            </p>
                        </div>
                        <div className=''>
                            <h3 className='mb-3'>Kelas Ini Ditujukan Untuk</h3>
                            <div className="mt-2">
                                <div className="flex-shrink-0 pr-4 ml-5 text-sm">
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
         <ModalBeliKelas
         
            Class={Class}
         />
          
                
                    
                
            
    </div>
  )
}
