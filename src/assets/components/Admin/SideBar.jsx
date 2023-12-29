import React, { useState, useEffect } from "react";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";
import logoImage from "../../images/icon-tech-2.png";
import logoImage2 from "../../img/ppp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Bars3Icon,
  BellIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  HomeIcon,
  ListBulletIcon,
  UsersIcon,
  VideoCameraIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const SideBar = () => {
  const location = useLocation();

  const menus = [
    {
      label: "Dashboard",
      link: "/admin/dashboard",
      current: location.pathname === "/admin/dashboard",
      logo: <HomeIcon />,
    },
    {
      label: "Transaksi",
      link: "/admin/transaksi",
      current: location.pathname === "/admin/transaksi",
      logo: <DocumentTextIcon />,
    },
    {
      label: "Kategori",
      link: "/admin/kategori",
      current: location.pathname === "/admin/kategori",
      logo: <DocumentDuplicateIcon />,
    },
    {
      label: "Kelas",
      link: "/admin/kelas",
      current: location.pathname === "/admin/kelas",
      logo: <DocumentCheckIcon />,
    },
    {
      label: "Chapter",
      link: "/admin/chapter",
      current: location.pathname === "/admin/chapter",
      logo: <ListBulletIcon />,
    },
    {
      label: "Lesson",
      link: "/admin/lesson",
      current: location.pathname === "/admin/lesson",
      logo: <VideoCameraIcon />,
    },
    {
      label: "Notifikasi",
      link: "/admin/notifikasi",
      current: location.pathname === "/admin/notifikasi",
      logo: <BellIcon />,
    },
    {
      label: "User",
      link: "/admin/user",
      current: location.pathname === "/admin/user",
      logo: <UsersIcon />,
    },
    {
      label: "Bank",
      link: "/admin/bank",
      current: location.pathname === "/admin/bank",
      logo: <CreditCardIcon />,
    },
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
