import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { CheckCircleOutlined, CheckOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { UpdatePayment } from "../../../../services/admin/payment/put-payment";

export const TablePayment = ({ searchTerm, Payment }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  useEffect(() => {
    if (record && record.id) {
      handleUpdatePayment();
    }
  }, [record]);

  const columns = [
    {
      title: "ID Payment",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Kategori",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Kelas Premium",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Id User",
      dataIndex: "idUser",
      key: "idUser",
    },
    {
      title: "Nama User",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Metode Pembayaran",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <p className={`${status ? "text-green-500" : "text-red-500"}  font-bold`}>{status ? "SUKSES" : "PENDING"}</p>,
    },
    {
      title: "Aksi",
      key: "aksi",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              handleUpdatePayment();
              setOpenUpdate(true);
              setRecord(record);
            }}
            className="bg-blue-500 text-white border-none hover:bg-blue-700  hover:border-0 hover:text-white hover:border-none rounded-full"
          >
            <CheckCircleOutlined />
            Konfirmasi Pembayaran
          </Button>
        </Space>
      ),
    },
  ];

  const dynamicData =
    Payment?.filter((item) => item.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      id: item.id,
      //   categoryName: item.fullName,
      class: item.class?.className,
      idUser: item.users.id,
      fullName: item.users.fullName,
      paymentMethod: item.paymentMethod,
      status: item.status,
    })) || [];

  const handleUpdatePayment = () => {
    const id = record.id;
    console.log(id, "id");
    if (id) {
      UpdatePayment(id, {
        status: true,
      });
      toast.success("Payment has been approved");
      setOpenUpdate(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Data Tidak Berhasil di Update");
    }
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} />
      {/* <ModalUpdateBank openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} /> */}
    </>
  );
};
