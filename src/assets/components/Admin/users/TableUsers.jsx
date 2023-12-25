import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

export const TableUsers = ({ searchTerm, Users }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const columns = [
    {
      title: "ID User",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nama",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "No Telp",
      dataIndex: "noTelp",
      key: "noTelp",
    },
    {
      title: "Kota",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Negara",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Foto",
      dataIndex: "profilePicture",
      key: "profilePicture",
    },
    // {
    //   title: "Aksi",
    //   key: "aksi",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <Button
    //         onClick={() => {
    //           setOpenUpdate(true);
    //           setRecord(record);
    //         }}
    //         className="bg-amber-500 text-white border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
    //       >
    //         <EditOutlined />
    //         Ubah
    //       </Button>
    //     </Space>
    //   ),
    // },
  ];

  const dynamicData =
    Users?.filter((item) => item.fullName.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      id: item.id,
      fullName: item.fullName,
      email: item.email,
      noTelp: item.noTelp,
      city: item.city,
      country: item.country,
      profilePicture: item.profilePicture,
    })) || [];

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} />
    </>
  );
};
