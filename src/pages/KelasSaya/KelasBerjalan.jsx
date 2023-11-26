import React, { useState } from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import searchIcon from "../../assets/images/icon-search2.png";
import { Button } from 'antd'
import { Nav } from '../../assets/components/Nav';
import { NavPrimaryButton } from '../../assets/components/button/buttton_navigasi/ButtonNavPrimary';
import img from '../../assets/images/kursus.png'
import { CardKelasBerjalan } from '../../assets/components/card/card_kelas_saya/CardKelasBerjalan';

export const KelasBerjalan= () => {

     const [activeButton, setActiveButton] = useState('ALL');

    // const [PilihKelas, setPilihKelas] = useState(null);

    //SEMENTARA
    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        console.log('Tombol diklik!');

    };
//DATA SEMENTARA
const contentData = {
    img: img,
    title: 'UI/UX Design',
    author: 'Angela Doe',
    deskripsi: 'ini mempelajari ui/ux fundamental',
    rating: '4.5', // Change this to your actual rating
    level: 'Intermediate',
    modules: 8,
    durasi: '12',
  };


    // INI UNTUK NANTI API
//    const handleButtonClick = (kelas) => {
//     // ini akan menerima parameter

//     // Contoh api requestnya
//     Axios.get(`https://ContohApi/api/data?category=${kelas}`)
//         .then(response => {
//             // Lakukan sesuatu dengan data yang diterima dari API
//             console.log('Data from API:', response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     };

  return (
    <div className='bg-purple-100'>
        <Nav />
        {/* content */}
        <div className='flex flex-col h-screens items-center'>
            <div className='flex flex-col h-screens mt-[4%]'>
                <div className='flex items-center h-full'>
                    <div className=''><p>Kelas Berjalan</p></div>
                    <div className='ms-auto'>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Cari Kelas..."
                                className="bg-purple-100 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px]"
                            />
                             <button className='absolute bg-transparent border-none -ms-[15%] inset-y-0 items-center'>
                                <div className='flex'>
                                    <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                                </div>
                            </button>
                            
                        </div>
                         
                      
                    </div>
                    
                </div>
                <div className='flex flex-row h-[100%] gap-10 mt-[2%]'>
                    <div>
                        <FilterKelas/>
                    </div>
                    <div className=''>
                        
                        <div className='flex flex-row gap-5'>
                            <NavPrimaryButton button_text="ALL"  onClick={() => handleButtonClick('ALL')} isActive={activeButton === 'ALL'}/>
                            <NavPrimaryButton button_text="In Progress" onClick={() => handleButtonClick('In Progress')} isActive={activeButton === 'In Progress'}/>
                            <NavPrimaryButton button_text="Selesai" onClick={() => handleButtonClick('Selesai')} isActive={activeButton === 'Selesai'}/>
                        
                        </div>
                        <div className='grid mt-[4%] grid-cols-2 gap-4'>
                            {/* content */}
                            <CardKelasBerjalan {...contentData}/>
                            
                            <CardKelasBerjalan {...contentData}/>
                            
                            <CardKelasBerjalan {...contentData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
