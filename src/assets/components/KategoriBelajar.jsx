import { useEffect, useState } from "react";
import img from "../images/card.png";
import { useNavigate } from "react-router-dom";
import { useCategoryDataQuery } from "../../services/category/get-data-category";

export const KategoriBelajar = () => {
  const [Category, setCategory] = useState([]);

  const navigate = useNavigate();

  const { data: dataCategory } = useCategoryDataQuery();

  useEffect(() => {
    setCategory(dataCategory);
    // console.log(Category, "data category");
  }, [dataCategory]);

  console.log(Category, "data category");

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  py-7 gap-3 bg-purple-100">
        <div className="flex w-4/5 justify-between items-center ">
          <h3 className="text-xl font-bold">Kategori Belajar</h3>
          <a href="/" className="text-purple-700 no-underline font-bold text-sm hover:text-purple-900">
            Lihat Semua
          </a>
        </div>
        <div className="flex flex-wrap  justify-between w-4/5 mt-4 ">
          {Category?.map((data) => (
            <>
              <div key={data.id} className="flex flex-col justify-center items-center  ">
                <img src={data.thumbnailPictureCategory} placeholder="img" className="w-32 h-20 object-cover rounded-xl   " />
                <p className="text-xs font-semibold mt-3 text-black">{data.categoryName}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
