import React, { useState, useEffect } from "react";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { Disclosure } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  HomeIcon,
  ListBulletIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../img/ppp.png";
import searchIcon from "../images/icon-search3.png";

const navigation = [
  { name: "Beranda", href: "/", current: location.pathname === "/", logo: <HomeIcon /> },
  {
    name: "Kursus",
    href: "/KelasSaya/TopikKelas",
    current: location.pathname === "/KelasSaya/TopikKelas",
    logo: <ListBulletIcon />,
  },
  {
    name: "Kelas",
    href: "/KelasSaya/KelasBerjalan",
    current: location.pathname === "/KelasSaya/KelasBerjalan",
    logo: <PlayCircleIcon />,
  },
  {
    name: "Notifikasi",
    href: "/notifikasi",
    current: location.pathname === "/notifikasi",
    logo: <BellIcon />,
  },
  { name: "Akun", href: "/profil", current: location.pathname === "/profil", logo: <UserCircleIcon /> },
];

const nav = [
  {
    name: "Daftar",
    href: "/register",
    current: location.pathname === "/register",
    logo: <PencilSquareIcon />,
  },
  {
    name: "Masuk",
    href: "/login",
    current: location.pathname === "/login",
    logo: <ArrowRightOnRectangleIcon />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    CookiesStorage.get(CookiesKey.AuthToken) ? true : false
  );

  const location = useLocation();

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const handleRegistPage = () => {
    navigate("/register");
  };

  const handleLoginPage = () => {
    navigate("/login");
  };

  useEffect(() => {

    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: location.pathname === item.href,
    }));

    const updatedNav = nav.map((item) => ({
      ...item,
      current: location.pathname === item.href,
    }));

  }, [location.pathname, navigation, nav]);

  return (
    <>
      <Disclosure as="nav" className="bg-purple-700 fixed w-full z-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-24 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center bg-purple-700 justify-center rounded-md p-1 text-gray-100 border-0 hover:bg-purple-900 hover:text-white">
                    <span className="absolute -inset-0.5" />
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 justify-between sm:items-stretch gap-4">
                  <div className="flex flex-shrink-0 items-center gap-1 md:gap-4">
                    <img
                      className="h-16 w-auto"
                      src={image}
                      alt="Your Company"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cari Kelas..."
                        className="bg-white border-none focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[170px] h-[32px] md:w-[450px] "
                      />
                      <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
                        <img
                          src={searchIcon}
                          alt="Search Icon"
                          className="h-6 w-6 cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    {isLoggedIn ? (
                      <div className="flex justify space-x-4 pt-4">
                        {navigation.map((item) => (
                          <div
                            key={item.name}
                            onClick={() => handleNavigation(item.href)}
                            className={classNames(
                              item.current
                                ? "bg-purple-900 text-white"
                                : "hover:bg-purple-900 text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            style={{ cursor: "pointer" }}
                          >
                            <div className="flex flex-row items-center gap-2">
                              <div className="flex flex-row w-6">
                                {item.logo}
                              </div>
                              {item.current && item.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-row gap-2 pt-[1rem] ">
                        {nav.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={() => handleNavigation(item.href)}
                      className={classNames(
                        item.current
                          ? "bg-purple-900 text-white"
                          : "text-gray-300 hover:bg-purple-900 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      style={{ cursor: "pointer", width: "full" }}
                    >
                      <div className="flex flex-row gap-2">
                        <div className="flex flex-row w-6">{item.logo}</div>
                        {item.name}
                      </div>
                    </Disclosure.Button>
                  ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="">
              {isLoggedIn ? (
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={() => handleNavigation(item.href)}
                      className={classNames(
                        item.current
                          ? "bg-purple-900 text-white"
                          : "text-gray-300 hover:bg-purple-900 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      style={{ cursor: "pointer", width: "full" }}
                    >
                      <div className="flex flex-row gap-2">
                        <div className="flex flex-row w-6">{item.logo}</div>
                        {item.name}
                      </div>
                    </Disclosure.Button>
                  ))}
                </div>
              ) : (
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {nav.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      onClick={() => handleNavigation(item.href)}
                      className={classNames(
                        item.current
                          ? "bg-purple-900 text-white"
                          : "text-gray-300 hover:bg-purple-900 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      style={{ cursor: "pointer", width: "full" }}
                    >
                      <div className="flex flex-row gap-2">
                        <div className="flex flex-row w-6">{item.logo}</div>
                        {item.name}
                      </div>
                    </Disclosure.Button>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};
