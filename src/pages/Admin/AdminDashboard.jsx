import { SideBar } from "../../assets/components/Admin/SideBar";
import { NavbarAdmin } from "../../assets/components/Admin/NavbarAdmin";
import { Card } from "../../assets/components/Admin/Card";
import { Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import iconPrefix from "../../assets/images/icon-prefix2.png";
import { TableDashboard } from "../../assets/components/Admin/TableDashboard";

export const AdminDashboard = () => {
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "1st menu item",
      key: "1",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <div className="flex flex-row">
        <SideBar />
        <NavbarAdmin />
      </div>
      <div className="">
      <Card />
      </div>
    </>
  );
};
