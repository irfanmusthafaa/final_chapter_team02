import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { ModalUpdateLesson } from "./ModalUpdateLesson";
import { useDeleteLesson } from "../../../../services/admin/lesson/delete-lesson";

export const TableLesson = ({ searchTerm, Lesson, Chapter }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [DeleteLessonId, setDeleteLessonId] = useState(null);

  const { mutate } = useDeleteLesson();

  const handleDelete = () => {
    if (DeleteLessonId) {
      mutate(DeleteLessonId);
      setDeleteLessonId(null);
      toast.success("Success Delete Lesson ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const columns = [
    {
      title: "ID Lesson",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Judul Lesson",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Learning Material",
      dataIndex: "learningMaterial",
      key: "learningMaterial",
    },
    {
      title: "Link",
      dataIndex: "linkLearningMaterial",
      key: "linkLearningMaterial",
    },
    {
      title: "ID Chapter",
      dataIndex: "chapterId",
      key: "chapterId",
    },
    {
      title: "Durasi",
      dataIndex: "duration",
      key: "duration",
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
              setDeleteLessonId(record.id); // Set the ID to be deleted
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
    Lesson?.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map((item) => ({
      key: item.id,
      id: item.id,
      title: item.title,
      learningMaterial: item.learningMaterial,
      linkLearningMaterial: item.linkLearningMaterial,
      chapterId: item.chapterId,
      duration: item.duration,
    })) || [];

  const paginationConfig = {
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };
  return (
    <>
      <Table columns={columns} dataSource={dynamicData} scroll={{ x: true }} pagination={paginationConfig} />
      <ModalUpdateLesson openUpdate={openUpdate} setOpenUpdate={setOpenUpdate} record={record} Chapter={Chapter} />
      <Modal title="Konfirmasi Hapus" open={DeleteLessonId !== null} onOk={handleDelete} onCancel={() => setDeleteLessonId(null)}>
        <p>Anda yakin ingin menghapus lesson ini?</p>
      </Modal>
    </>
  );
};
