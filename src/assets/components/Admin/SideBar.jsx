import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImage from "../../images/logo3.png";

export const SideBar = () => {
  return (
    <div className="bg-purple-700 h-screen w-[20%]">
      <div className="flex flex-col pt-[2rem] justify center items-center">
        <img src={logoImage} className="w-1/2" placeholder="logo" />
        <div className="w-full flex flex-col justify-center items-center mt-16 overflow-hidden">
          <a href="/" className="w-full pl-24 py-4 bg-purple-500 font-semibold text-white no-underline">
            Dashboard
          </a>
          <a href="/" className="w-full pl-24 py-4 bg-transparent hover:bg-purple-500 font-semibold text-white no-underline">
            Kelola Kelas
          </a>
          <a href="/" className="w-full pl-24 py-4 bg-transparent hover:bg-purple-500  font-semibold text-white no-underline">
            Keluar
          </a>
        </div>
      </div>
    </div>
  );
};
