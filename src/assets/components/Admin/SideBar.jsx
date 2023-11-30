import logoImage from "../../images/icon-tech-2.png";

export const SideBar = ({ menus }) => {
  return (
    <div className="bg-purple-700  w-[20%]  ">
      <div className="flex flex-col pt-[2rem] justify center items-center">
        <img src={logoImage} width={150} placeholder="logo" />
        <div className="w-full flex flex-col justify-center items-center mt-16 overflow-hidden">
          {menus.map((menu, index) => (
            <a key={index} href={menu.link} className={`w-full pl-24 py-4 ${menu.bgColor} font-semibold text-white no-underline`}>
              {menu.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
