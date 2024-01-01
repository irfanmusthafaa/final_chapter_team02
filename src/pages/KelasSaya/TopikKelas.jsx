import React, { useEffect, useState } from "react";
import { FilterKelas } from "../../assets/components/FilterKelas";
import { Navbar } from "../../assets/components/Navbar";
import { NavButton } from "../../assets/components/button/buttton_navigasi/ButtonNav";
import { CardTopikKelas } from "../../assets/components/card/card_kelas_saya/CardTopikKelas";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
import { useClassDataQuery } from "../../services/class/get-data-class";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Pagination } from "antd";
import { useLocation } from "react-router-dom";
import { MiniSearch } from "../../assets/components/search/MiniSearch";
import { MiniSearchMobile } from "../../assets/components/search/MiniSearchMobile";

export const TopikKelas = () => {

  const [Kategori, setKategori] = useState("");
  const [Level, setLevel] = useState("");
  const [IsFree, setIsFree] = useState(null);
  const [Latest, setLatest] = useState(null);
  const [Popular, setPopular] = useState(null);
  const [Promo, setPromo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("ALL");
  const [Category, setCategory] = useState([]);
  const { data: dataCategory } = useCategoryDataQuery();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');
  const [Search, setSearch] = useState(searchParam?searchParam:null);
  const [Class, setClass] = useState([]);
  const { data: dataClass } = useClassDataQuery({
    categoryId: Kategori,
    levelName: Level,
    isFree: IsFree,
    latest: Latest,
    popular: Popular,
    promo: Promo,
    search:Search,
    page:currentPage
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCategory(dataCategory);
    dataClass ? setClass(dataClass.result) : null;
  }, [dataCategory,currentPage, dataClass, Kategori, Level, Latest, Popular, Promo]);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    setIsFree(buttonText);
    buttonText === "ALL" ? setIsFree(null)
    : buttonText === "Kelas Premium" ? setIsFree(false)
    : buttonText === "Kelas Gratis" ? setIsFree(true)
    : null;

  };

  

  return (
    <div className="bg-purple-100">
      <Navbar />

      {/* dekstop */}
      <div className="pt-[6rem] md:flex flex-col h-screens items-center pb-2 hidden">
        <div className="flex flex-col h-screens mt-[4%]">
          <div className="flex items-center h-full">
            <div className="font-bold text-2xl">
              <h2 className="text-purple-700">Topik Kelas</h2>
            </div>
            <div className="ms-auto">
              {/* search bar  */}
              <MiniSearch
                search={Search}
                setSearch={setSearch}
              />
            </div>
          </div>
          <div className="flex flex-row h-[100%] gap-10 mt-[2%]">
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
                  button_text={<div className="px-10">ALL</div>}
                  onClick={() => handleButtonClick("ALL")}
                  isActive={activeButton === "ALL"}
                />
                <NavButton
                  button_text={<div className="px-20" style={{ whiteSpace: 'nowrap' }}>Kelas Premium</div>}
                  onClick={() => handleButtonClick("Kelas Premium")}
                  isActive={activeButton === "Kelas Premium"}
                />
                <NavButton
                  button_text={<div className="px-20" style={{ whiteSpace: 'nowrap' }}>Kelas Gratis</div>}
                  onClick={() => handleButtonClick("Kelas Gratis")}
                  isActive={activeButton === "Kelas Gratis"}
                />
              </div>
              <div className="grid mt-[4%] grid-cols-2 gap-5">
                {Class?.map((item, index) => (
                  <CardTopikKelas
                    key={index}
                    class={item}
                    category={Category}
                    free={IsFree}
                  />
                ))}
              </div>
              <br/>
              <div className="flex item-center justify-center">
                <Pagination
                  simple
                  defaultCurrent={currentPage}
                  total={dataClass?.pagination.total_items}
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
        <h1 className="text-purple-700">Topik Kelas</h1>
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
                // setIsFree={setIsFree}
              />
            </Modal>
            <div className="mt-2">
              <div className="flex flex-row gap-3 mx-5 md:gap-5 justify-center items-center">
                <NavButton
                  button_text="ALL"
                  onClick={() => handleButtonClick("ALL")}
                  isActive={activeButton === "ALL"}
                />
                <NavButton
                  button_text="Kelas Premium"
                  onClick={() => handleButtonClick("Kelas Premium")}
                  isActive={activeButton === "Kelas Premium"}
                />
                <NavButton
                  button_text="Kelas Gratis"
                  onClick={() => handleButtonClick("Kelas Gratis")}
                  isActive={activeButton === "Kelas Gratis"}
                />
              </div>
              <div className="flex flex-col justify-center items-center my-5 gap-5">
                  {Class?.map((item, index) => (
                    <CardTopikKelas
                      key={index}
                      class={item}
                      category={Category}
                      free={IsFree}
                    />
                  ))}
              </div>
              <div className="flex item-center justify-center">
                <Pagination
                  simple
                  defaultCurrent={currentPage}
                  total={dataClass?.pagination.total_items}
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
