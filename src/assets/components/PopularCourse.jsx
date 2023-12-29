import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCategoryDataQuery } from "../../services/category/get-data-category";
import { useClassDataQuery } from "../../services/class/get-data-class";
import { BookmarkIcon, ChevronLeftIcon, ChevronRightIcon, ClockIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} color="#000" className=" w-5 h-5 rounded-full text-white bg-slate-600 hover:bg-black" size="10px" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} color="#000" className=" w-5 h-5 rounded-full text-white bg-slate-600 hover:bg-black" size="10px" />
    </div>
  );
}

export const PopularCourse = () => {
  const [Category, setCategory] = useState([]);
  const [Class, setClass] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  const navigate = useNavigate();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data: dataCategory } = useCategoryDataQuery();
  const { data: dataClass } = useClassDataQuery({
    categoryId: 2,
    popular: true,
    limit: 1000,
    page: 1,
  });

  useEffect(() => {
    setCategory(dataCategory);
    setClass(dataClass?.result);
  }, [dataCategory, dataClass]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(0);

  const nextSlide = () => {
    // Check if there is more data to show
    if (currentSlide < Class.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
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
      <div className="w-full bg-white flex justify-center items-center ">
        <div className=" w-4/5 ">
          <div className=" w-full">
            <Slider {...settings}>
              {Class?.map((data) => (
                <div
                  key={data.classCode}
                  style={{ border: "5px solid black", boxSizing: "border-box" }}
                  onClick={() => navigate(`/Detailkelas/${data.classCode}`)}
                  className="cursor-pointer  flex-col bg-white border-2 rounded-3xl pb-3 "
                >
                  <div className="w-full">
                    <img src={data.thumbnailPicture} placeholder="img" className="w-full h-40 object-cover rounded-t-3xl" />
                  </div>

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
                      <button className="w-2/3 mt-2 py-2 flex justify-between items-center rounded-full px-3 border-0 cursor-pointer  bg-purple-700 font-semibold text-xs text-white hover:bg-purple-900 ">
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
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
