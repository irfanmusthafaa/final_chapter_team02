import React, { useEffect, useState } from "react";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
import { useClassDataQuery } from "../../services/class/get-data-class";
import { BookmarkIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { StarFilled } from "@ant-design/icons";
import "../styles/index.css";

export const KursusPopuler = () => {
  const [Category, setCategory] = useState([]);
  const [Class, setClass] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  const { data: dataCategory } = useCategoryDataQuery();
  const { data: dataClass } = useClassDataQuery({ 
    categoryId: filterCategory,
    popular:true
  });

  useEffect(() => {
    setCategory(dataCategory);
    setClass(dataClass?.result);
  }, [dataCategory, dataClass]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Class.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Class.length) % Class.length);
  };

  const next = () => {
    setCurrentCategory((prevCategory) => (prevCategory + 1) % Category.length);
  };

  const prev = () => {
    setCurrentCategory((prevCategory) => (prevCategory - 1 + Category.length) % Category.length);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center py-7 gap-3">
        <div className="flex w-4/5 justify-between items-center ">
          <h3 className="text-xl font-bold">Kursus Populer</h3>
          <a href="/KelasSaya/TopikKelas" className="text-purple-700 no-underline font-bold text-sm hover:text-purple-900">
            Lihat Semua
          </a>
        </div>
        {/* filter */}
        <div className="md:flex flex-wrap gap-3 justify-between my-5 hidden">
          <button
            onClick={() => setFilterCategory("")}
            className="bg-purple-100 px-5 py-2 rounded-full font-bold border-none text-sm hover:bg-purple-700 hover:text-white"
          >
            All
          </button>
          {Category?.map((data) => (
            <>
              <button
                key={data.id}
                onClick={() => setFilterCategory(data.id)}
                className="bg-purple-100 px-5 py-2 rounded-full font-bold border-none text-sm hover:bg-purple-700 hover:text-white"
              >
                {data.categoryName}
              </button>
            </>
          ))}
        </div>
        {/* filter mobile */}
        <div className="flex flex-wrap gap-1 justify-center w-full md:hidden">
          <div className="flex slider-container pl-3">
            <div className="slider" style={{ transform: `translateX(-${currentCategory * 50}%)` }}>
              <button
                onClick={() => setFilterCategory("")}
                className=" bg-purple-100 w-fit h-fit mr-1 px-5 py-2 rounded-full font-bold border-none text-sm hover:bg-purple-700 hover:text-white"
              >
                All Programs
              </button>
              {Category?.map((data) => (
                <>
                  <button
                    key={data.id}
                    onClick={() => setFilterCategory(data.id)}
                    className="bg-purple-100 px-5 py-2 mr-1 rounded-full font-bold border-none text-sm hover:bg-purple-700 hover:text-white"
                  >
                    {data.categoryName}
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className=" flex flex-row gap-2">
            <button
              className="bg-gray-200 text-white rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[25px] h-[25px]"
              onClick={prev}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="bg-gray-200 text-white  rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[25px] h-[25px]"
              onClick={next}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        {/* card */}
        <div className="md:flex flex-col justify-between w-4/5 hidden">
          <div className="flex justify-center md:justify-between items-center w-full">
            <div className="slider-container">
              <div className="slider" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
                {Class?.map((data) => (
                  <div
                    key={data.classCode}
                    style={{ border: ".5px solid grey" }}
                    className="w-fit flex-col bg-white border-2 rounded-3xl pb-3 ml-3"
                  >
                    <img src={data.thumbnailPicture} placeholder="img" className="w-80 h-40 object-cover rounded-t-3xl" />
                    <div className="px-2 mt-2">
                      <div className="flex justify-between items-center">
                        <p className="text-purple-700 font-bold ">{data.categorys.categoryName}</p>
                        <div className="flex flex-row justify-center items-center">
                          <StarFilled className="w-4" style={{ color: "gold" }} />
                          <p className="pl-[.1rem] font-medium">{data.averageRating?.toFixed(1)}</p>
                        </div>
                      </div>
                      <p className="text-black font-bold mt-1">{data.className}</p>
                      <p className="text-black text-sm mt-1">{data.author}</p>
                      <div className="flex gap-2 justify-around text-xs mt-2">
                        <div className="flex flex-row justify-center items-center">
                          <ShieldCheckIcon className="w-4" style={{ color: "green" }} />
                          <p className="pl-[.1rem] font-semibold text-purple-900">{data.levelName}</p>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <BookmarkIcon className="w-4" style={{ color: "green" }} />
                          <p className="pl-[.1rem] font-semibold">{data.module} Modul</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <div className="flex flex-row justify-center items-center">
                            <ClockIcon className="w-4" style={{ color: "green" }} />
                            <p className="pl-[.1rem] font-semibold">{data.totalDuration} Menit</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="md:w-1/2 mt-2 py-2 flex justify-between items-center rounded-full px-3 border-0 cursor-pointer  bg-purple-700 font-semibold text-xs text-white hover:bg-purple-900 ">
                          <div className="flex justify-center items-center gap-1">
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M3.00004 1H4.04604L2.99704 4H1.19104L2.55304 1.276C2.5946 1.19305 2.65843 1.12331 2.73737 1.07456C2.81631 1.02582 2.90726 1 3.00004 1ZM1.22704 5L4.24104 9.687L2.97004 5H1.22704ZM4.00604 5L5.53604 10.645C5.56315 10.7474 5.62336 10.8379 5.70729 10.9025C5.79121 10.9671 5.89414 11.0021 6.00004 11.0021C6.10594 11.0021 6.20887 10.9671 6.29279 10.9025C6.37672 10.8379 6.43693 10.7474 6.46404 10.645L7.99804 5H4.00604ZM9.03404 5L7.76004 9.685L10.773 5H9.03304H9.03404ZM10.809 4H9.00604L7.95604 1H9.00004C9.09299 0.999818 9.18415 1.02555 9.26328 1.0743C9.34242 1.12305 9.4064 1.1929 9.44804 1.276L10.809 4ZM7.94704 4H4.05704L5.10504 1H6.89504L7.94704 4Z"
                                fill="#EBF3FC"
                              />
                            </svg>
                            Beli
                          </div>
                          <div>
                            <p className="pl-2">Rp {data.price}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-2 pt-2">
            <button
              className="bg-gray-200 text-white rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[30px] h-[30px]"
              onClick={prevSlide}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="bg-gray-200 text-white rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[30px] h-[30px]"
              onClick={nextSlide}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        {/* card mobile */}
        <div className="flex w-4/5 md:hidden">
          <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Class?.map((data) => (
                <div key={data.classCode} className="slide">
                  <div key={data.classCode} style={{ border: ".5px solid grey" }} className="w-[16.7rem] gap-1 p-2 border-2 rounded-3xl pb-3">
                    <img src={data.thumbnailPicture} placeholder="img" className="w-full h-40 rounded-t-3xl" />
                    <div className="px-2 mt-2">
                      <div className="flex justify-between items-center">
                        <p className="text-purple-700 font-bold ">{data.className}</p>
                        <div className="flex flex-row justify-center items-center">
                          <StarFilled className="w-4" style={{ color: "gold" }} />
                          <p className="pl-[.1rem] font-medium">{data.averageRating?.toFixed(1)}</p>
                        </div>
                      </div>
                      <p className="text-black font-bold mt-1">{data.description}</p>
                      <p className="text-black text-sm mt-1">{data.author}</p>
                      <div className="flex gap-2 justify-around text-xs mt-2">
                        <div className="flex flex-row justify-center items-center">
                          <ShieldCheckIcon className="w-4" style={{ color: "green" }} />
                          <p className="pl-[.1rem] font-semibold text-purple-900">{data.levelName}</p>
                        </div>
                        <div className="flex flex-row justify-center items-center">
                          <BookmarkIcon className="w-4" style={{ color: "green" }} />
                          <p className="pl-[.1rem] font-semibold">{data.module} Modul</p>
                        </div>
                        <div className="flex justify-center items-center gap-1 ">
                          <div className="flex flex-row justify-center items-center">
                            <ClockIcon className="w-4" style={{ color: "green" }} />
                            <p className="pl-[.1rem] font-semibold">{data.totalDuration}Tes</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="md:w-1/2 mt-2 py-2 flex justify-between items-center rounded-full px-3 border-0 cursor-pointer  bg-purple-700 font-semibold text-xs text-white hover:bg-purple-900 ">
                          <div className="flex justify-center items-center gap-1">
                            {" "}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M3.00004 1H4.04604L2.99704 4H1.19104L2.55304 1.276C2.5946 1.19305 2.65843 1.12331 2.73737 1.07456C2.81631 1.02582 2.90726 1 3.00004 1ZM1.22704 5L4.24104 9.687L2.97004 5H1.22704ZM4.00604 5L5.53604 10.645C5.56315 10.7474 5.62336 10.8379 5.70729 10.9025C5.79121 10.9671 5.89414 11.0021 6.00004 11.0021C6.10594 11.0021 6.20887 10.9671 6.29279 10.9025C6.37672 10.8379 6.43693 10.7474 6.46404 10.645L7.99804 5H4.00604ZM9.03404 5L7.76004 9.685L10.773 5H9.03304H9.03404ZM10.809 4H9.00604L7.95604 1H9.00004C9.09299 0.999818 9.18415 1.02555 9.26328 1.0743C9.34242 1.12305 9.4064 1.1929 9.44804 1.276L10.809 4ZM7.94704 4H4.05704L5.10504 1H6.89504L7.94704 4Z"
                                fill="#EBF3FC"
                              />
                            </svg>
                            Beli
                          </div>
                          <div>
                            <p className="pl-2">Rp {data.price}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-row justify-center gap-2 pt-2">
              <button
                className="bg-gray-200 text-white rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[2rem] h-[2rem]"
                onClick={prevSlide}
              >
                <ChevronLeftIcon />
              </button>
              <button
                className="bg-gray-200 text-white rounded-full text-black border-0 hover:bg-purple-700 hover:text-white w-[2rem] h-[2rem]"
                onClick={nextSlide}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};