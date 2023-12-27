import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { ModalUpdateBank } from "./ModalUpdateBank";
import { useDeleteBank } from "../../../../services/admin/bank/delete-bank";

export const TableBank = ({ searchTerm, Bank }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [DeleteBankId, setDeleteBankId] = useState(null);

  const { mutate } = useDeleteBank();

  const handleDelete = () => {
    if (DeleteBankId) {
      mutate(DeleteBankId);
      setDeleteBankId(null);
      toast.success("Success Delete Bank ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const columns = [
    {
      title: "ID Bank",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Bank",
      dataIndex: "bankType",
      key: "bankType",
    },
    {
      title: "No Rekening",
      dataIndex: "bankNumber",
      key: "bankNumber",
    },
    {
      title: "Atas Nama",
      dataIndex: "bankName",
      key: "bankName",
    },
    {
      title: "Aksi",
      key: "aksi",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              setOpenUpdate(true);
              setRecord(record);
            }}
            className="bg-amber-500 text-white border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
          >
            <EditOutlined />
            Ubah
          </Button>
          <Button
            className="bg-red-600 text-white hover:bg-red-900 hover:border-0 rounded-full"
            onClick={() => {
              setDeleteBankId(record.id); // Set the ID to be deleted
            }}
          >
            <DeleteOutlined />
            Hapus
          </Button>
        </Space>
      ),
    },
  ];

  const dynamicData =
    Bank?.filter((item) => item.bankType.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      id: item.id,
      bankType: item.bankType,
      bankName: item.bankName,
      bankNumber: item.bankNumber,
    })) || [];

  const paginationConfig = {
    pageSize: 5, // Menetapkan jumlah data per halaman
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} scroll={{ x: true }} pagination={paginationConfig} />
      <ModalUpdateBank openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} />
      <Modal title="Konfirmasi Hapus" open={DeleteBankId !== null} onOk={handleDelete} onCancel={() => setDeleteBankId(null)}>
        <p>Anda yakin ingin menghapus bank ini?</p>
      </Modal>
    </>
  );
};
