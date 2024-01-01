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
      dataIndex: "classCode",
      key: "classCode",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "categoryName",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Nama Kelas",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "Tipe Kelas",
      dataIndex: "isFree",
      key: "isFree",
      render: (isFree) => <p className={`${isFree ? "text-green-500" : "text-blue-500"}  font-bold`}>{isFree ? "GRATIS" : "PREMIUM"}</p>,
    },
    {
      title: "Level",
      dataIndex: "levelName",
      key: "levelName",
    },
    {
      title: "Harga Kelas",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Promo",
      dataIndex: "promo",
      key: "promo",
      // render: (text) => <p className="hidden">{text}</p>,
    },
    {
      // title: "Link Grup",
      dataIndex: "linkSosmed",
      key: "linkSosmed",
      render: (text) => <p className="hidden">{text}</p>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      // render: (text) => <p className="hidden">{text}</p>,
    },
    {
      // title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p className="hidden">{text}</p>,
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
              setDeleteClassId(record.classCode); // Set the ID to be deleted
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
      classCode: item.classCode,
      categoryName: item.categorys.categoryName,
      className: item.className,
      isFree: item.isFree,
      levelName: item.levelName,
      price: item.price,
      promo: item.promo,
      linkSosmed: item.linkSosmed,
      author: item.author,
      description: item.description,
    })) || [];

  const paginationConfig = {
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} size="small" scroll={{ x: true }} pagination={paginationConfig} />
      <ModalUpdateKelas openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} Category={Category} />
      <Modal title="Konfirmasi Hapus" open={DeleteClassId !== null} onOk={handleDelete} onCancel={() => setDeleteClassId(null)}>
        <p>Anda yakin ingin menghapus kelas ini?</p>
      </Modal>
    </>
  );
};
