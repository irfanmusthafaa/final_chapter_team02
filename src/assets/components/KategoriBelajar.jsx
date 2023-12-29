import { useEffect, useState } from "react";
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
      <div className="w-full flex flex-col justify-center items-center py-10 gap-3 bg-white">
        <div className="flex w-4/5 justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Kategori Belajar</h3>
          {/* <a href="/KelasSaya/TopikKelas" className="text-purple-700 no-underline font-bold text-sm hover:text-purple-900">
            Lihat Semua
          </a> */}
        </div>

        <div className="grid grid-cols-2  md:grid-cols-6 gap-4 px-4 w-4/5">
          {Category?.map((data) => (
            <div key={data.id} className="flex flex-col items-center mb-4">
              <img src={data.thumbnailPictureCategory} alt="Category Thumbnail" className="w-full h-24 object-cover rounded-xl mb-2" />
              <label className="text-xs md:text-sm font-semibold my-2 text-black">{data.categoryName}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
