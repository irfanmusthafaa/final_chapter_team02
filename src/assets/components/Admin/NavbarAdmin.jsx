import React, { useEffect, useState } from "react";
import searchIcon from "../../images/icon-search3.png";
import { useGetProfileAdmin } from "../../../services/admin/get-profil-admin";
import { Avatar, Button, Popover, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { CookiesKey, CookiesStorage } from "../../../utils/cookies";

export const NavbarAdmin = () => {
  const [Profile, setProfile] = useState({});

  const { data: dataProfile, isLoading, isError } = useGetProfileAdmin();

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
    <div className="">
      <p className="flex justify-center items-center gap-2 mb-2">
        <FontAwesomeIcon icon={faUser} /> <p>{Profile?.email}</p>
      </p>

      <Button
        onClick={handleLogout}
        className={`flex justify-start items-center gap-2  text-sm  cursor-pointer font-semibold text-slate-700 no-underline hover:text-red-500`}
      >
        <FontAwesomeIcon icon={faSignOut} /> <p>Keluar</p>
      </Button>
    </div>
  );

  const profilePicture = Profile?.profilePicture;

  return (
    <div className="bg-purple-200 h-16 flex justify-between items-center px-10 ">
      <div>
        <h3 className="text-purple-700 font-bold text-sm md:text-lg">Hi, {Profile?.fullName}!</h3>
      </div>
      <div>
        <Popover content={content} title="Akun" trigger="hover">
          <Avatar src={profilePicture ? profilePicture : null} shape="square" size={40} icon={!profilePicture && <UserOutlined />} />
        </Popover>
      </div>
    </div>
  );
};
