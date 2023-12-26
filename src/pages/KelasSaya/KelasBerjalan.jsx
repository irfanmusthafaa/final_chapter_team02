import React, { useEffect, useState } from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import searchIcon from "../../assets/images/icon-search2.png";
import { Nav } from '../../assets/components/Nav';
import { NavButton } from '../../assets/components/button/buttton_navigasi/ButtonNav';
import { CardKelasBerjalan } from '../../assets/components/card/card_kelas_saya/CardKelasBerjalan';
import { useCategoryDataQuery } from '../../services/category/get-data-category';
import { useClassDataQuery } from '../../services/class/get-data-class';
import { useLearningDataQuery } from '../../services/learning/get-data-learning';

export const KelasBerjalan= () => {

    const [Kategori, setKategori] = useState("");
    const [Level, setLevel] = useState("");
    const [Latest, setLatest] = useState(null);
    const [Popular, setPopular] = useState(null);
    const [Promo, setPromo] = useState(null);
    const [inProgress, setInProgress] = useState(null);
    

    const [activeButton, setActiveButton] = useState('ALL');

    const [Category, setCategory] = useState([]);
    const { data: dataCategory } = useCategoryDataQuery();

    const [Class, setClass] = useState([]);
    const { data: dataLearning } = useLearningDataQuery({
        categoryId: Kategori,
        levelName: Level,
        latest: Latest,
        popular: Popular,
        promo: Promo,
        inProgress:inProgress
    }); 

    useEffect(() => {
        setCategory(dataCategory);
        if (dataLearning) {
            setClass(dataLearning);
        }
    }, [dataCategory, dataLearning, Kategori, Level, Latest, Popular, Promo]);
    
    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        setInProgress(buttonText);
        if (buttonText === "ALL") {
            setInProgress(null);
        } else if (buttonText === "In Progress") {
            setInProgress(true);
        } else if (buttonText === "Selesai") {
            setIsFree(true);
        }
    };

  return (
    <div className='bg-purple-100'>
        <Nav />
        {/* content */}
        {console.log(inProgress, "ini inprogress daata")}
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
                        <FilterKelas
                            category={Category}
                            kategori={Kategori}
                            level={Level}
                            latest={Latest}
                            popular={Popular}
                            promo={Promo}
                            setKategori={setKategori}
                            setLevel={setLevel}
                            setLatest={setLatest}
                            setPopular={setPopular}
                            setPromo={setPromo}
                            // setIsFree={setIsFree}
                        />
                    </div>
                   
                    <div className="">
                        <div className="flex flex-row gap-5">
                            <NavButton
                            button_text="ALL"
                            onClick={() => handleButtonClick("ALL")}
                            isActive={activeButton === "ALL"}
                            />
                            <NavButton
                            button_text="In Progress"
                            onClick={() => handleButtonClick("In Progress")}
                            isActive={activeButton === "In Progress"}
                            />
                            <NavButton
                            button_text="Selesai"
                            onClick={() => handleButtonClick("Selesai")}
                            isActive={activeButton === "Selesai"}
                            />
                        </div>
                        <div className="grid mt-[4%] grid-cols-2 gap-4">
                            {activeButton === "ALL" ? 
                                Class?.map((Class, index) => (
                                    <CardKelasBerjalan
                                        key={index}
                                        class={Class}
                                        category={Category}
                                    />
                                ))
                            : activeButton === "In Progress" ?
                                Class?.filter(Class => Class.presentase < 100).map((Class, index) => (
                                    <CardKelasBerjalan
                                        key={index}
                                        class={Class}
                                        category={Category}
                                    />
                                ))
                            : activeButton === "Selesai" ?
                                Class?.filter(Class => Class.presentase === 100).map((Class, index) => (
                                    <CardKelasBerjalan
                                        key={index}
                                        class={Class}
                                        category={Category}
                                    />
                                ))
                            : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
