import React, { useEffect, useState } from 'react'
import { FilterKelas } from '../../assets/components/FilterKelas'
import { Nav } from '../../assets/components/Nav';
import { NavButton } from '../../assets/components/button/buttton_navigasi/ButtonNav';
import { CardKelasBerjalan } from '../../assets/components/card/card_kelas_saya/CardKelasBerjalan';
import { useCategoryDataQuery } from '../../services/category/get-data-category';
import { useLearningDataQuery } from '../../services/learning/get-data-learning';
import { MiniSearch } from '../../assets/components/search/MiniSearch';
import { Pagination } from 'antd';


export const KelasBerjalan= () => {

    const [Kategori, setKategori] = useState("");
    const [Level, setLevel] = useState("");
    const [Latest, setLatest] = useState(null);
    const [Popular, setPopular] = useState(null);
    const [Promo, setPromo] = useState(null);
    const [inProgress, setInProgress] = useState(null);
    const [Search, setSearch] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    

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
        inProgress:inProgress,
        search:Search,
        page:currentPage
    }); 

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        setCategory(dataCategory);
        if (dataLearning) {
            setClass(dataLearning.allLearning);
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
        <div className='pt-[6rem] md:flex flex-col h-screens items-center hidden'>
            <div className='flex flex-col h-screens mt-[4%]'>
                <div className='flex items-center h-full'>
                    <div className=''><p>Kelas Berjalan</p></div>
                    <div className='ms-auto'>
                        {/* search bar  */}
                        <MiniSearch
                            search={Search}
                            setSearch={setSearch}
                        />
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
                        <div className="grid mt-[4%] grid-cols-2 gap-5">
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
                        <br/>
                        <div className="flex item-center justify-center">
                            <Pagination
                                simple
                                defaultCurrent={currentPage}
                                total={dataLearning?.pagination.total_items}
                                onChange={handlePageChange}
                            />
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
