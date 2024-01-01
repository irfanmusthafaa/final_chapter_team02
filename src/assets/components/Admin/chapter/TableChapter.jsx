import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDeleteChapter } from "../../../../services/admin/chapter/delete-chapter";
import { ModalUpdateChapter } from "./ModalUpdateChapter";

export const TableChapter = ({ searchTerm, Chapter, Class }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [DeleteChapterId, setDeleteChapterId] = useState(null);

  const { mutate } = useDeleteChapter();

  const handleDelete = () => {
    if (DeleteChapterId) {
      mutate(DeleteChapterId);
      setDeleteChapterId(null);
      toast.success("Success Delete Chapter ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const columns = [
    {
      title: "ID Chapter",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Nama Chapter",
      dataIndex: "chapterName",
      key: "chapterName",
    },
    {
      title: "Kode Kelas",
      dataIndex: "classCode",
      key: "classCode",
    },
    {
      title: "Status",
      dataIndex: "is_preview",
      key: "is_preview",
      render: (is_preview) => <p className={`${is_preview ? "text-green-500" : "text-blue-500"}  font-bold`}>{is_preview ? "GRATIS" : "PREMIUM"}</p>,
    },
    {
      title: "Total Durasi",
      dataIndex: "totalDuration",
      key: "totalDuration",
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
              setDeleteChapterId(record.id); // Set the ID to be deleted
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
    Chapter?.filter((item) => item.classCode.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      id: item.id,
      chapterName: item.chapterName,
      classCode: item.classCode,
      is_preview: item.is_preview,
      totalDuration: item.totalDuration,
    })) || [];

  const paginationConfig = {
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} scroll={{ x: true }} pagination={paginationConfig} />
      <ModalUpdateChapter openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} Class={Class} />
      <Modal title="Konfirmasi Hapus" open={DeleteChapterId !== null} onOk={handleDelete} onCancel={() => setDeleteChapterId(null)}>
        <p>Anda yakin ingin menghapus chapter ini?</p>
      </Modal>
    </>
  );
};
