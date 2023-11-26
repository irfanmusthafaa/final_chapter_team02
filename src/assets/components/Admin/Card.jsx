import React from "react";
import userIcon from "../../images/Users.png";

export const Card = () => {
  return (
    <div className="flex justify-between   w-full  gap-3 ">
      <div className="bg-purple-500 p-6 rounded-2xl box-border w-1/3">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div>
            <p className="text-white text-2xl">450</p>
            <p className="text-white text-xl font-bold">Active Users</p>
          </div>
        </div>
      </div>
      <div className="bg-green-500 p-6 rounded-2xl box-border w-1/3">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div>
            <p className="text-white text-2xl">25</p>
            <p className="text-white text-xl font-bold">Active Class</p>
          </div>
        </div>
      </div>
      <div className="bg-purple-700 p-6 rounded-2xl box-border w-1/3">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-2xl w-10 px-3 py-3 text-center">
            <img src={userIcon} alt="user icon" />
          </div>
          <div>
            <p className="text-white text-2xl">20</p>
            <p className="text-white text-xl font-bold">Premium Class</p>
          </div>
        </div>
      </div>
    </div>
  );
};
