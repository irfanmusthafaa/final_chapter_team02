import React, { useEffect, useState } from "react";
import userIcon from "../../images/Users.png";
import { useClassDataQuery } from "../../../services/class/get-data-class";
import { useGetAllUsers } from "../../../services/admin/users/get-all-users";

export const Card = () => {
  const [Class, setClass] = useState([]);
  const [Users, setUsers] = useState([]);

  const { data: dataClass } = useClassDataQuery();
  const { data: dataUsers } = useGetAllUsers();

  useEffect(() => {
    setClass(dataClass?.result);
    setUsers(dataUsers?.users);
  }, [dataClass, dataUsers]);

  const premiumClasses = Class?.filter((item) => !item.isFree);

  return (
    <div className="flex justify-center w-full pt-3 gap-1 md:gap-5 md:w-2/3 md:ml-[21rem]">
      <div className="bg-purple-500 p-6 rounded-2xl box-border w-[32%] md:w-[40rem]">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl">{Users?.length}</p>
            <p className="text-white text-xl font-bold text-center">Active Users</p>
          </div>
        </div>
      </div>
      <div className="bg-[#73CA5C] p-6 rounded-2xl box-border w-[32%] md:w-[40rem]">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl">{Class?.length}</p>
            <p className="text-white text-xl font-bold text-center">Active Class</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 p-6 rounded-2xl box-border w-[32%] md:w-[40rem]">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-white text-2xl">{premiumClasses?.length}</p>
            <p className="text-white text-xl font-bold text-center">Premium Class</p>
          </div>
        </div>
      </div>
    </div>
  );
};
