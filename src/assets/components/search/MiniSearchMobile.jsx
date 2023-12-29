import React from 'react'
import searchIcon from "../../images/icon-search3.png";

export const MiniSearchMobile = (props) => {
  return (
    <div className="relative">
        <input
            type="text"
            placeholder="Cari Kelas..."
            className="bg-purple-100 border-purple-700 focus:bg-white focus:outline-none rounded-full px-4 w-[200px] h-[32px]"
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
        />
        <button className="absolute bg-transparent border-none -ms-[15%] inset-y-0 items-center">
            <div className="flex">
                <img
                    src={searchIcon}
                    alt="Search Icon"
                    className="h-6 ml-2"
                />
            </div>
        </button>
    </div>
  )
}
