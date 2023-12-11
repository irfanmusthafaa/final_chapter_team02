import React, { useEffect, useState } from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import searchIcon from "../../assets/images/icon-search2.png";
import { Nav } from '../../assets/components/Nav';
import { NavButton } from '../../assets/components/button/buttton_navigasi/ButtonNav';
import { CardKelasBerjalan } from '../../assets/components/card/card_kelas_saya/CardKelasBerjalan';
import { useCategoryDataQuery } from '../../services/category/get-data-category';
import { useClassDataQuery } from '../../services/class/get-data-class';

export const KelasBerjalan= () => {

    const [Filter, setFilter]= useState('');
    const [Kategori, setKategori]= useState('');
    const [Level, setLevel]= useState('');
    const [IsFree, setIsFree]= useState(null);
    

    const [activeButton, setActiveButton] = useState('ALL');

    const [Category, setCategory] = useState([]);
    const { data: dataCategory } = useCategoryDataQuery();

    const [Class, setClass] = useState([]);
    const [tes, setTes] = useState(1);
    const [tes1, setTes1] = useState('IntermediateLevel');
    const { data: dataClass } = useClassDataQuery({
        categoryId: Kategori ? Kategori : '',
        levelName: Level ? Level : '',
        isFree: IsFree
    }); 

    useEffect(()=>{
        setCategory(dataCategory);
        if (dataClass) {
            setClass(dataClass.result);
        }
        
    }, [dataCategory, dataClass, tes, Kategori])
    
    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        setIsFree(buttonText)
        if (buttonText === 'ALL') {
            // setIsFree(null);
        } else if (buttonText === 'In Progress') {
            // setIsFree(false);
        } else if (buttonText === 'Selesai') {
            // setIsFree(true);
        }

    };

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
                        <FilterKelas category={Category}/>
                    </div>
                    <div className=''>
                        
                        <div className='flex flex-row gap-5'>
                            <NavButton button_text="ALL"  onClick={() => handleButtonClick('ALL')} isActive={activeButton === 'ALL'}/>
                            <NavButton button_text="In Progress" onClick={() => handleButtonClick('In Progress')} isActive={activeButton === 'In Progress'}/>
                            <NavButton button_text="Selesai" onClick={() => handleButtonClick('Selesai')} isActive={activeButton === 'Selesai'}/>
                        
                        </div>
                        <div className='grid mt-[4%] grid-cols-2 gap-4'>
                            {/* content */}
                            {/* <CardKelasBerjalan {...contentData}/> */}
                            
                            {Class.map((item) => (
                                <CardKelasBerjalan key={item.id} class={item} category={Category} free={IsFree}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
