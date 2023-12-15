import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useClassDataQuery } from "../../../../services/class/get-data-class";
import { useCategoryDataQuery } from "../../../../services/category/get-data-category";
import { ModalUpdateKategori } from "./ModalUpdateKategori";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDeleteCategory } from "../../../../services/admin/category/delete-category";

export const TableKategori = ({ searchTerm, Category }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [deleteCategoryId, setDeleteCategoryId] = useState(null); // New state to store the ID to be deleted

  const { mutate } = useDeleteCategory();

  const handleDelete = () => {
    if (deleteCategoryId) {
      mutate(deleteCategoryId);
      setDeleteCategoryId(null); // Reset deleteCategoryId after deletion
    }
  };

  const columns = [
    {
      title: "ID Kategori",
      dataIndex: "idKategori",
      key: "idKategori",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nama Kategori",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Gambar",
      dataIndex: "thumbnailPictureCategory",
      key: "thumbnailPictureCategory",
      render: (text) => <img src={text} alt="img" className="w-[150px] h-[80px] object-cover" />,
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
            className="bg-purple-700 text-white border-none hover:bg-purple-900 hover:text-white hover:border-none rounded-full"
          >
            <EditOutlined />
            Ubah
          </Button>
          <Button
            className="bg-red-600 text-white hover:bg-red-900 rounded-full"
            onClick={() => {
              setDeleteCategoryId(record.idKategori); // Set the ID to be deleted
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
    Category?.filter((item) => item.categoryName.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      idKategori: item.id,
      categoryName: item.categoryName,
      thumbnailPictureCategory: item.thumbnailPictureCategory,
    })) || [];

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} />
      <Modal
        centered
        open={openUpdate}
        onOk={() => setOpenUpdate(false)}
        onCancel={() => setOpenUpdate(false)}
        footer={null}
        width={700}
        className="mt-10"
      >
        <ModalUpdateKategori record={record} />
      </Modal>
      {/* Confirm Delete Modal */}
      <Modal title="Konfirmasi Hapus" open={deleteCategoryId !== null} onOk={handleDelete} onCancel={() => setDeleteCategoryId(null)}>
        <p>Anda yakin ingin menghapus kategori ini?</p>
      </Modal>
    </>
  );
};
