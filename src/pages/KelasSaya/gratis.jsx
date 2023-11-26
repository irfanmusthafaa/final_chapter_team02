import React from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import { Button } from 'antd'

export const Gratis = () => {
  return (
    <div className='bg-purple-100'>
        {/* navbar */}
        <div className='h-[5rem] bg-purple-700'>ini navbar</div>
        {/* content */}
        <div className='flex flex-col h-screens items-center'>
            <div className='flex flex-col h-screens mt-[2%]'>
                <div className='flex '>
                    <h1>Kelas Berjalan</h1>
                    <div className='bg-blue-500'>a </div>
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
                            kontent kelas gratis 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
