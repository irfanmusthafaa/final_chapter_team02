import { LogoutOutlined } from "@ant-design/icons";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";
import logoImage from "../../images/icon-tech-2.png";
import logoImage2 from "../../img/ppp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faSignOut,
  faSignOutAlt,
  faBell,
  faUsers,
  faFileInvoice,
  faCreditCard,
  faVideo,
  faRectangleList,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const location = useLocation();
  const activePage = location.pathname.substring(1);

  const menus = [
    { label: "Dashboard", link: "/admin/dashboard", active: "admin/dashboard", icon: faHome },
    { label: "Transaksi", link: "/admin/transaksi", active: "admin/transaksi", icon: faFileInvoice },
    { label: "Kategori", link: "/admin/kategori", active: "admin/kategori", icon: faLayerGroup },
    { label: "Kelas", link: "/admin/kelas", active: "admin/kelas", icon: faRectangleList },
    { label: "Chapter", link: "/admin/chapter", active: "admin/chapter", icon: faList },
    { label: "Lesson", link: "/admin/lesson", active: "admin/lesson", icon: faVideo },
    { label: "Notifikasi", link: "/admin/notifikasi", active: "admin/notifikasi", icon: faBell },
    { label: "User", link: "/admin/user", active: "admin/user", icon: faUsers },
    { label: "Bank", link: "/admin/bank", active: "admin/bank", icon: faCreditCard },
  ];

  return (
    <div className="bg-purple-700 min-h-screen w-[20%]  ">
      <div className="flex flex-col pt-[2rem] justify center items-center">
        <img src={logoImage} width={150} placeholder="logo" className="hidden md:flex" />
        <img src={logoImage2} width={50} placeholder="logo" className="flex md:hidden" />
        <div className="w-full flex flex-col justify-center items-center mt-10 overflow-hidden">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.link}
              className={`${
                activePage === menu.active ? "bg-purple-500" : "bg-purple-700"
              } w-full flex flex-col md:flex-row gap-1 items-center text-sm text-[12px] md:text-sm   py-4  font-semibold text-white no-underline`}
            >
              <FontAwesomeIcon icon={menu.icon} className="w-[30%]" /> <p>{menu.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
