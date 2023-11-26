import React from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import searchIcon from '../../assets/images/icon/icon.png';
import { Button } from 'antd'

export const KelasSayaPage = () => {
  return (
    <div className='bg-purple-300'>
        {/* navbar */}
        <div className='h-[5rem] bg-purple-700'>ini navbar</div>
        {/* content */}
        <div className='flex flex-col h-screens items-center'>
            <div className='flex flex-col h-screens mt-[2%]'>
                <div className='flex '>
                    <div>Kelas Berjalan</div>
                    <div className=''>
                        <div className='relative'>
                            <input
                                type="text"
                                placeholder="Cari Kelas..."
                                className="bg-purple-50 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px] "
                            />
                            <div className="absolute inset-y-0 ps-[85%] flex items-center pointer-events-none ">
                                <img
                                src={searchIcon}
                                alt="Search Icon"
                                className="h-6 w-6 cursor-pointer"
                                />
                            </div>
                        </div>
                         
                      
                    </div>
                    
                </div>
                <div className='flex flex-row h-[100%] gap-10'>
                    <div>
                        <FilterKelas/>
                    </div>
                    <div className=''>
                        
                        <div className='flex flex-row gap-5'>
                            <Button className='px-8'>ALL</Button>
                            <Button className='px-12'>In Progress</Button>
                            <Button className='px-12'>Selesai</Button>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
