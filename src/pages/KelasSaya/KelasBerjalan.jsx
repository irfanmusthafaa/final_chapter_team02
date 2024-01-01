import React, { useEffect, useState } from "react";
import { FilterKelas } from "../../assets/components/FilterKelas";
import searchIcon from "../../assets/images/icon-search2.png";
import { Navbar } from "../../assets/components/Navbar";
import { NavButton } from "../../assets/components/button/buttton_navigasi/ButtonNav";
import { CardKelasBerjalan } from "../../assets/components/card/card_kelas_saya/CardKelasBerjalan";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
import { useLearningDataQuery } from "../../services/learning/get-data-learning";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { MiniSearch } from '../../assets/components/search/MiniSearch';
import { Pagination } from 'antd';
import { MiniSearchMobile } from "../../assets/components/search/MiniSearchMobile";

export const KelasBerjalan = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("ALL");
    const [Kategori, setKategori] = useState("");
    const [Level, setLevel] = useState("");
    const [Latest, setLatest] = useState(null);
    const [Popular, setPopular] = useState(null);
    const [Promo, setPromo] = useState(null);
    const [inProgress, setInProgress] = useState(null);
    const [Search, setSearch] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
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
        dataLearning ? setClass(dataLearning.allLearning) : null;
    }, [dataCategory, dataLearning, Kategori, Level, Latest, Popular, Promo]);
    
     const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
        setInProgress(buttonText);
        buttonText === "ALL" ? setInProgress(null) 
        : buttonText === "In Progress" || buttonText === "Selesai" ? setInProgress(true)
        : null;
    };

    return (
        <div className='bg-purple-100'>
            <Navbar />
            {/* content */}
            <div className='pt-[6rem] md:flex flex-col h-screens items-center hidden'>
                <div className='flex flex-col h-screens mt-[4%]'>
                    <div className='flex items-center h-full'>
                        <div className="font-bold text-2xl">
                            <h2 className="text-purple-700">Kelas Saya</h2>
                        </div>
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
                                    button_text={<>&nbsp;&nbsp;In Progress&nbsp;&nbsp;</>}
                                    onClick={() => handleButtonClick("In Progress")}
                                    isActive={activeButton === "In Progress"}
                                />
                                <NavButton
                                    button_text={<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Selesai&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
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
    
            {/* mobile */}
            <div className="pt-[7rem] flex flex-col h-screens items-center md:hidden">
                <h1 className="text-purple-700">Kelas Saya</h1>
                <div className="flex flex-col w-full h-screens mt-[4%]">
                    <div className="flex h-full mx-5">
                        <div className="w-5/6 ms-auto">
                        {/* search bar  */}
                        <MiniSearchMobile
                            search={Search}
                            setSearch={setSearch}
                        />
                        </div>
                        <div>
                        <button
                            className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-full p-3"
                            onClick={() => setFilterOpen(true)}
                        >
                            <FontAwesomeIcon icon={faFilter} />
                            Filter
                        </button>
                        </div>
                    </div>
                    <div className="flex flex-col h-full">
                        <Modal
                            centered
                            open={filterOpen}
                            onOk={() => setFilterOpen(false)}
                            onCancel={() => setFilterOpen(false)}
                            footer={null}
                            width={700}
                            className="mt-10"
                        >
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
                        </Modal>
                        <div className="mt-2">
                            <div className="flex flex-row gap-3 justify-center items-center">
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
                                    button_text={<>&nbsp;&nbsp;Selesai&nbsp;&nbsp;</>}
                                    onClick={() => handleButtonClick("Selesai")}
                                    isActive={activeButton === "Selesai"}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center my-5 gap-5">
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
    );
};
