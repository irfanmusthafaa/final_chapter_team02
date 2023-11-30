/* eslint-disable react/prop-types */
import React from "react";
import iconEdit from "../images/ic-edit.png";

export const MenuAkun = ({ menus }) => {
  return (
    <div className="flex flex-col ">
      {menus.map((menu, index) => (
        <a
          key={index}
          href={menu.link}
          style={{ borderBottom: "1px solid rgb(209 213 219)" }}
          className={`py-4 no-underline text-base flex  items-center gap-3 ${menu.textColor}  hover:font-bold`}
        >
          {/* <FontAwesomeIcon icon={faEdit} /> */}
          <img src={menu.img} alt="ic edit" />
          {menu.label}
        </a>
      ))}
    </div>
  );
};
