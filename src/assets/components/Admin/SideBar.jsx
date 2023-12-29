import React, { useState, useEffect } from "react";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";
import { Disclosure } from "@headlessui/react";
import { useLocation } from "react-router-dom";
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
import logoImage from "../../images/icon-tech-2.png";

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

  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.TokenAdmin);
    CookiesStorage.remove(CookiesKey.Admin);
    window.location.href = "/admin/login";
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  useEffect(() => {
    const updatedMenu = menus.map((item) => ({
      ...item,
      current: location.pathname === item.link,
    }));
  }, [location.pathname, menus]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure
        as="div"
        className="bg-purple-700 absolute top-0 md:w-[20%] h-screen"
      >
        {({ open }) => (
          <>
            <div className="">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute left-1 top-3 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center bg-purple-700 justify-center rounded-md p-1 text-gray-100 border-0 hover:bg-purple-900 hover:text-white">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="md:flex flex-col justify pt-[35rem] hidden w-full px-2 gap-4">
                  <img src={logoImage} width={200} placeholder="logo" />
                  {menus.map((item) => (
                    <div
                      key={item.label}
                      onClick={() => handleNavigation(item.link)}
                      className={classNames(
                        item.current
                          ? "bg-purple-900 text-white"
                          : "hover:bg-purple-900 text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row w-6">{item.logo}</div>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden">
              <div className=" space-y-1 px-2 pb-3">
                {menus.map((item) => (
                  <Disclosure.Button
                    key={item.label}
                    as="a"
                    onClick={() => handleNavigation(item.link)}
                    className={classNames(
                      "flex",
                      item.current
                        ? "bg-purple-900 text-white"
                        : "text-gray-300 hover:bg-purple-900 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    style={{ cursor: "pointer", width: "full" }} // Adjust width based on whether the sidebar is open
                  >
                    <div className="flex flex-row gap-2">
                      <div className="flex flex-row w-6">{item.logo}</div>
                      {item.label}
                    </div>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
