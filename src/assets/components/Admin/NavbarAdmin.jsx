import React, { useEffect, useState } from "react";
import searchIcon from "../../images/icon-search3.png";
import { useGetProfileAdmin } from "../../../services/admin/get-profil-admin";
import { Button, Popover, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";

export const NavbarAdmin = () => {
  const [Profile, setProfile] = useState({});

  const { data: dataProfile, isLoading, isError } = useGetProfileAdmin();

  console.log(Profile, "profile");

  useEffect(() => {
    if (!isLoading && !isError) {
      setProfile(dataProfile || {});
    }
  }, [dataProfile, isLoading, isError]);

  const handleLogout = () => {
    CookiesStorage.remove(CookiesKey.TokenAdmin);
    CookiesStorage.remove(CookiesKey.Admin);
    window.location.href = "/admin/login";
  };

  const content = (
    <div>
      <a
        onClick={handleLogout}
        className={`w-full flex gap-1 items-center text-sm  cursor-pointer font-semibold text-slate-700 no-underline hover:text-red-500`}
      >
        <FontAwesomeIcon icon={faSignOut} className="w-[30%]" /> <p>Keluar</p>
      </a>
    </div>
  );

  return (
    <div className="bg-purple-200 h-16 flex justify-between items-center px-16">
      <div>
        <h3 className="text-purple-700 font-bold">Hi, {Profile?.fullName}!</h3>
      </div>
      <div>
        <Popover content={content} title="Akun" trigger="hover">
          <Button>
            <UserOutlined />
            {Profile?.fullName}
          </Button>
        </Popover>
        {/* <div className="relative">
          <input
            type="text"
            placeholder="Cari"
            className="bg-white border-none  focus:border-2 focus:border:border-black focus:bg-white focus:outline-none rounded-xl pl-5 pr-10 py-2 w-[200px] h-[32px] "
          />
          <button className="absolute bg-transparent border-none inset-y-0 -ml-10 ">
            <img src={searchIcon} alt="Search Icon" className="h-6 w-6 cursor-pointer" />
          </button>
        </div> */}
      </div>
    </div>
  );
};
