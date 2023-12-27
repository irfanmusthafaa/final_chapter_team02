import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { ModalUpdateKategori } from "./ModalUpdateKategori";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDeleteCategory } from "../../../../services/admin/category/delete-category";

export const TableKategori = ({ searchTerm, Category }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [deleteCategoryId, setDeleteCategoryId] = useState(null);

  const { mutate } = useDeleteCategory();

  const handleDelete = () => {
    if (deleteCategoryId) {
      mutate(deleteCategoryId);
      setDeleteCategoryId(null);
      toast.success("Success Delete Category ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
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
            className="bg-amber-500 text-white border-none hover:bg-amber-900 hover:border-0 hover:text-white hover:border-none rounded-full"
          >
            <EditOutlined />
            Ubah
          </Button>
          <Button
            className="bg-red-600 text-white hover:bg-red-900 hover:border-0 rounded-full"
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

  const paginationConfig = {
    pageSize: 4, // Menetapkan jumlah data per halaman
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} scroll={{ x: true }} pagination={paginationConfig} />
      <ModalUpdateKategori openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} />
      <Modal title="Konfirmasi Hapus" open={deleteCategoryId !== null} onOk={handleDelete} onCancel={() => setDeleteCategoryId(null)}>
        <p>Anda yakin ingin menghapus kategori ini?</p>
      </Modal>
    </>
  );
};
