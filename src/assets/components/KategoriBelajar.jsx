import img from "../images/card.png";

export const KategoriBelajar = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  py-7 gap-3 bg-purple-100">
        <div className="flex w-4/5 justify-between items-center ">
          <h3 className="text-xl font-bold">Kategori Belajar</h3>
          <a href="/" className="text-purple-700 no-underline font-bold text-sm hover:text-purple-900">
            Lihat Semua
          </a>
        </div>
        <div className="flex flex-wrap  justify-between w-4/5 ">
          <div className="flex flex-col justify-center items-center gap-2   ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  ">
            <img src={img} placeholder="img" className="w-full object-cover" />
            <p className="text-sm font-semibold text-black">UI/UX Desain</p>
          </div>
        </div>
      </div>
    </>
  );
};
