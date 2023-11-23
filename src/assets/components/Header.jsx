import React, { useEffect, useState } from "react";
import { Navbar, Collapse, IconButton } from "@material-tailwind/react";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo1.png";
const { Search } = Input;

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <h1 className="flex items-center gap-x-2 p-1 font-medium text-sm">
        <a href="#" className="flex items-center">
          Home
        </a>
      </h1>
      <h1 className="flex items-center gap-x-2 p-1 font-medium text-sm">
        <a href="#" className="flex items-center">
          Home
        </a>
      </h1>
      <h1 className="flex items-center gap-x-2 p-1 font-medium text-sm">
        <a href="#" className="flex items-center">
          Home
        </a>
      </h1>
      <h1 className="flex items-center gap-x-2 p-1 font-medium text-sm">
        <a href="#" className="flex items-center">
          Home
        </a>
      </h1>
      <h1 className="flex items-center gap-x-2 p-1 font-medium text-sm">
        <a href="#" className="flex items-center">
          Home
        </a>
      </h1>
    </ul>
  );
  return (
    // <Navbar fullWidth={true} className="container bg-purple-700 mx-auto border-none max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
    <Navbar className=" bg-purple-700 w-max-screen right-0 py-2 px-4 lg:px-8 lg:py-4">
      <div className="container  flex items-center justify-around text-blue-gray-900">
        <h1 className="mr-4 cursor-pointer py-1.5 font-medium text-sm">
          <div className="flex gap-10">
            <div className="flex justify-center items-center gap-2">
              <img src={logo} placeholder="logo" width={30} />
              <span className="text-lg text-white font-normal">TechAcademy</span>
            </div>
            <div className="flex">
              <Space.Compact style={{ width: "150%" }}>
                <Input
                  placeholder="Cari kursus terbaik..."
                  className=" bg-white px-5 border-r-0 rounded-xl hover:border-r-white focus:hover:border-r-white"
                />
                <Button className="bg-white border-l-0 text-purple-700 rounded-xl" size="large" icon={<SearchOutlined />} />
              </Space.Compact>
            </div>
          </div>
        </h1>

        <div className="hidden lg:block">
          {/* <Search
            size="large"
            className="rounded-full bg-red-400 p-5"
            placeholder="Cari kursus terbaik..."
            allowClear
            onSearch={onSearch}
            style={{
              width: 400,
            }}
          /> */}
        </div>

        <div className="flex justify-center items-center gap-2">
          <button className="bg-transparent cursor-pointer border-none flex justify-center items-center gap-2 p-3 text-white hover:font-bold">
            {" "}
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M8.83325 14.1666L12.9999 9.99992L8.83325 5.83325"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M13 10H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M13 2.5H16.3333C16.7754 2.5 17.1993 2.67559 17.5118 2.98816C17.8244 3.30072 18 3.72464 18 4.16667V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H13"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            Masuk
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};
