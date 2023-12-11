/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/icon-tech.png";
import searchIcon from "../images/icon-search3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faList, faSignIn, faUser } from "@fortawesome/free-solid-svg-icons";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

export const Nav = ({ text }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(CookiesStorage.get(CookiesKey.AuthToken) ? true : false); // Track login state

  const location = useLocation(); // Get the current location from React Router
  const activePage = location.pathname.substring(1);

  // const handleMenuClick = (page) => {
  //   setActivePage(page);
  // };
  return (
    <>
      <nav className=" flex flex-wrap items-center justify-between px-16 py-7  bg-purple-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex   gap-10">
              <a href="/" className="flex justify-center items-center gap-2">
                <img src={logo} placeholder="logo" width={150} />
              </a>
              <div className="lg:flex sm:hidden">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari Kelas..."
                    className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[300px] h-[32px] "
                  />
                  <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
                    <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            {isLoggedIn ? (
              <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <div className="flex justify-center items-center gap-1">
                  <Link to="/KelasSaya/KelasBerjalan">
                    <button
                      className={`${
                        activePage !== "notifikasi" &&
                        activePage !== "profil" &&
                        activePage !== "ubah-password" &&
                        activePage !== "riwayat-pembayaran"
                          ? "bg-purple-900 rounded-xl px-5 no-underline  "
                          : "bg-transparent"
                      }  cursor-pointer border-none flex justify-center font-bold items-center gap-2 p-3 text-white hover:bg-purple-900`}
                    >
                      <FontAwesomeIcon icon={faList} />
                      {`${
                        activePage !== "notifikasi" &&
                        activePage !== "profil" &&
                        activePage !== "ubah-password" &&
                        activePage !== "riwayat-pembayaran"
                          ? "Kelas"
                          : ""
                      }`}
                    </button>
                  </Link>
                  <Link to="/notifikasi">
                    <button
                      className={`${
                        activePage === "notifikasi" ? "bg-purple-900 rounded-xl px-5 no-underline  " : "bg-transparent"
                      }  cursor-pointer border-none flex justify-center font-bold items-center gap-2 p-3 text-white hover:bg-purple-900`}
                    >
                      <FontAwesomeIcon icon={faBell} />
                      {`${activePage === "notifikasi" ? "Notifikasi" : ""}`}
                    </button>
                  </Link>
                  <Link to="/profil">
                    <button
                      className={`${
                        activePage === "profil" || activePage === "ubah-password" || activePage === "riwayat-pembayaran"
                          ? "bg-purple-900 rounded-xl px-5 no-underline  "
                          : "bg-transparent"
                      }  cursor-pointer border-none flex justify-center font-bold items-center gap-2 p-3 text-white hover:bg-purple-900`}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      {`${activePage === "profil" || activePage === "ubah-password" || activePage === "riwayat-pembayaran" ? "Akun" : ""}`}
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <div className="flex justify-center items-center gap-2">
                  <button className="bg-transparent cursor-pointer border-none flex justify-center font-bold items-center gap-2 p-3 text-white hover:opacity-75">
                    {" "}
                    <FontAwesomeIcon icon={faSignIn} /> Masuk
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
