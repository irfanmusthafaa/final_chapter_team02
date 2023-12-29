/* eslint-disable react/prop-types */
import React from "react";
import iconLogout from "../images/ic_log-out.png";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

export const MenuAkun = ({ menus }) => {
  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.AuthToken);
    CookiesStorage.remove(CookiesKey.User);
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col ">
      {menus.map((menu, index) => (
        <a
          key={index}
          href={menu.link}
          style={{ borderBottom: "1px solid rgb(209 213 219)" }}
          className={`py-4 no-underline text-xs md:text-base flex items-center gap-3 ${menu.textColor} hover:font-bold`}
        >
          <img src={menu.img} alt="ic edit" />
          {menu.label}
        </a>
      ))}
      <a
        onClick={handleLogout}
        style={{ borderBottom: "1px solid rgb(209 213 219)" }}
        className={`py-4 no-underline text-xs md:text-base flex  items-center gap-3 cursor-pointer  hover:font-bold`}
      >
        <img src={iconLogout} alt="ic logout" />
        Keluar
      </a>
    </div>
  );
};
