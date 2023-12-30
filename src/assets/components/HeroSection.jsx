import { useNavigate } from "react-router-dom";
import image from "../img/1.png";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleIkutiKelas = () => {
    navigate("/KelasSaya/TopikKelas");
  };
  return (
    <>
      <div className="hidden md:flex w-full">
        <div className="w-full ">
          <div className="w-full h-screen bg-purple-700 flex ">
            <div className="flex  ">
              <div className=" flex flex-col justify-center items-center gap-1 w-[40%] pt-[2rem] h-screen ">
                <h1 className="text-white">Kuasai Skills Digital</h1>
                <h1 className="text-white">dan Gapai Masa Depan Mu</h1>
                <h1 className="text-white">#FirstStepForYourFuture</h1>
                <h1 className="text-amber-400">bersama TechAcademy</h1>
                <div
                  className="bg-white w-1/2 mt-5 flex justify-center items-center h-10 cursor-pointer text-purple-700 font-bold rounded-full hover:bg-purple-900 hover:text-white"
                  onClick={handleIkutiKelas}
                >
                  Ikuti Kelas
                </div>
              </div>
              <div className="w-[60%] flex justify-end items-end">
                <img src={image} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex w-full md:hidden">
        <div className="w-full relative">
          <div className="w-full h-screen bg-purple-700 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <img src={image} className="mx-5 w-[20rem] mt-5  h-[30%] bg-white rounded-lg" />

              <div className="w-[22.5rem] pt-8 flex flex-col items-center gap-1 ">
                <h2 className="text-white">Kuasai Skills Digital</h2>
                <h2 className="text-white">dan Gapai Masa Depan Mu</h2>
                <h2 className="text-white">#FirstStepForYourFuture</h2>
                <h2 className="text-amber-400">bersama TechAcademy</h2>
                <div
                  className="bg-white w-1/2 mt-5 flex justify-center items-center h-10 cursor-pointer text-purple-700 font-bold rounded-full hover:bg-purple-900 hover:text-white"
                  onClick={handleIkutiKelas}
                >
                  Ikuti Kelas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
