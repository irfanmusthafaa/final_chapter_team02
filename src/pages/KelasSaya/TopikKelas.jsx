import React, { useEffect, useMemo, useState } from "react";
import { FilterKelas } from "../../assets/components/FilterKelas";
import searchIcon from "../../assets/images/icon-search2.png";
import { Navbar } from "../../assets/components/Navbar";
import { NavButton } from "../../assets/components/button/buttton_navigasi/ButtonNav";
import { CardTopikKelas } from "../../assets/components/card/card_kelas_saya/CardTopikKelas";
import { fetchDataCategory, useCategoryDataQuery } from "../../services/category/get-data-category";
import { useClassDataQuery } from "../../services/class/get-data-class";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";

export const TopikKelas = () => {
  const [Kategori, setKategori] = useState("");
  const [Level, setLevel] = useState("");
  const [IsFree, setIsFree] = useState(null);
  const [Latest, setLatest] = useState(null);
  const [Popular, setPopular] = useState(null);
  const [Promo, setPromo] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const [activeButton, setActiveButton] = useState("ALL");

  const [Category, setCategory] = useState([]);
  const { data: dataCategory } = useCategoryDataQuery();

  const [Class, setClass] = useState([]);
  const { data: dataClass } = useClassDataQuery({
    categoryId: Kategori,
    levelName: Level,
    isFree: IsFree,
    latest: Latest,
    popular: Popular,
    promo: Promo,
  });

  useEffect(() => {
    setCategory(dataCategory);
    if (dataClass) {
      setClass(dataClass.result);
    }
  }, [dataCategory, dataClass, Kategori, Level, Latest, Popular, Promo]);

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
    setIsFree(buttonText);
    if (buttonText === "ALL") {
      setIsFree(null);
    } else if (buttonText === "Kelas Premium") {
      setIsFree(false);
    } else if (buttonText === "Kelas Gratis") {
      setIsFree(true);
    }
  };

  return (
    <div className="bg-purple-100">
      <Navbar />

      {/* dekstop */}
      <div className="pt-[6rem] md:flex flex-col h-screens items-center hidden">
        <div className="flex flex-col h-screens mt-[4%]">
          <div className="flex items-center h-full">
            <div className="font-bold text-2xl">
              <h2 className="text-purple-700">Topik Kelas</h2>
            </div>
            <div className="ms-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari Kelas..."
                  className="bg-purple-100 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px]"
                />
                <button className="absolute bg-transparent border-none -ms-[15%] inset-y-0 items-center">
                  <div className="flex">
                    <img
                      src={searchIcon}
                      alt="Search Icon"
                      className="h-6 w-6 cursor-pointer"
                    />
                  </div>
                </button>
              </div>
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
                // setIsFree={setIsFree}
              />

              {console.log(Kategori, "ini Kategori ")}
              {console.log(Level, "ini Level ")}
              {console.log(Latest, "ini yang terbaru ")}
              {console.log(Popular, "ini Popular ")}
              {console.log(Promo, "ini Promo ")}
            </div>
            <div className="">
              <div className="flex flex-row gap-5">
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
                {console.log(IsFree, "ini is free")}
              </div>
              <div className="grid mt-[4%] grid-cols-2 gap-4">
                {Class?.map((item, index) => (
                  <CardTopikKelas
                    key={index}
                    class={item}
                    category={Category}
                    free={IsFree}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="pt-[7rem] flex flex-col h-screens items-center md:hidden">
        <h1 className="text-purple-700">Topik Kelas</h1>
        <div className="flex flex-col w-full h-screens mt-[4%]">
          <div className="flex h-full">
            <div className="w-5/6 ms-auto pl-2">
              <div className="relative cursor-pointer">
                <input
                  type="text"
                  placeholder="Cari Kelas..."
                  className="bg-purple-100 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px]"
                />
                <button className="absolute bg-transparent border-none -ms-[15%] inset-y-0 items-center">
                  <div className="flex">
                  <img
                      src={searchIcon}
                      alt="Search Icon"
                      className="h-6 w-6 ml-2 cursor-pointer"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div>
              <button
                className="flex justify-between gap-2 border-none  text-white bg-purple-700 hover:bg-purple-900 cursor-pointer rounded-full p-3 mr-2 "
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
              <div className="flex flex-row gap-2 md:gap-5 justify-center items-center">
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
                {console.log(IsFree, "ini is free")}
              </div>
              <div className="flex flex-col justify-center items-center mt-3">
                  {Class?.map((item, index) => (
                    <CardTopikKelas
                      key={index}
                      class={item}
                      category={Category}
                      free={IsFree}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
