import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDeleteClass } from "../../../../services/admin/class/delete-class";
import { ModalUpdateKelas } from "./ModalUpdateKelas";
import { toast } from "react-toastify";

export const TableKelas = ({ searchTerm, Category, Class }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [DeleteClassId, setDeleteClassId] = useState(null);

  const { mutate: DeleteClass, isSuccess, isError, status } = useDeleteClass();

  useEffect(() => {
    if (isError) {
      toast.error("Failed Delete Class ");
    }
    if (isSuccess) {
      toast.success("Success Delete Class ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  const handleDelete = () => {
    if (DeleteClassId) {
      DeleteClass(DeleteClassId);
      setDeleteClassId(null);
    }
  };
  const columns = [
    {
      title: "Kode Kelas",
      dataIndex: "kodeKelas",
      key: "kodeKelas",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
    },
    {
      title: "Nama Kelas",
      dataIndex: "namaKelas",
      key: "namaKelas",
    },
    {
      title: "Tipe Kelas",
      dataIndex: "tipeKelas",
      key: "tipeKelas",
      render: (isFree) => <p className={`${isFree ? "text-green-500" : "text-blue-500"}  font-bold`}>{isFree ? "GRATIS" : "PREMIUM"}</p>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Harga Kelas",
      dataIndex: "hargaKelas",
      key: "hargaKelas",
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
              setDeleteClassId(record.kodeKelas); // Set the ID to be deleted
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
    Class?.filter((item) => item.className.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.classCode, // Assuming 'id' is a unique identifier for each item
      kodeKelas: item.classCode,
      kategori: item.categorys.categoryName,
      namaKelas: item.className,
      tipeKelas: item.isFree,
      level: item.levelName,
      hargaKelas: item.price,
    })) || [];

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} />
      <ModalUpdateKelas openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} Category={Category} />
      <Modal title="Konfirmasi Hapus" open={DeleteClassId !== null} onOk={handleDelete} onCancel={() => setDeleteClassId(null)}>
        <p>Anda yakin ingin menghapus kelas ini?</p>
      </Modal>
    </>
  );
};
