import { Button, Modal, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { useDeleteNotification } from "../../../../services/admin/notifications/delete-notification";

export const TableNotification = ({ Lesson, Notification }) => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const [record, setRecord] = useState("");

  const [DeleteNotificationId, setDeleteNotificationId] = useState(null);

  const { mutate } = useDeleteNotification();

  const formatDateTime = (dateTimeString) => {
    const options = { day: "numeric", month: "short", hour: "numeric", minute: "numeric" };
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleDateString("id-ID", options);
  };

  const handleDelete = () => {
    if (DeleteNotificationId) {
      mutate(DeleteNotificationId);
      setDeleteNotificationId(null);
      toast.success("Success Delete Notification ");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Deskripsi",
      dataIndex: "deskripsi",
      key: "deskripsi",
    },
    {
      title: "Time",
      dataIndex: "dateTime",
      key: "dateTime",
    },
    {
      title: "UserId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Aksi",
      key: "aksi",
      render: (_, record) => (
        <Space size="middle">
          <Button
            className="bg-red-600 text-white hover:bg-red-900 hover:border-0 rounded-full"
            onClick={() => {
              setDeleteNotificationId(record.id); // Set the ID to be deleted
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
    Notification?.map((item) => ({
      key: item.id,
      id: item.id,
      title: item.title,
      body: item.body,
      deskripsi: item.deskripsi,
      dateTime: formatDateTime(item.dateTime),
      userId: item.userId,
    })) || [];

  const paginationConfig = {
    pageSize: 10, // Menetapkan jumlah data per halaman
    showQuickJumper: true,
    // showSizeChanger: true,
    // ... properti pagination lainnya
  };

  return (
    <>
      <Table columns={columns} dataSource={dynamicData} scroll={{ x: true }} pagination={paginationConfig} />
      <Modal title="Konfirmasi Hapus" open={DeleteNotificationId !== null} onOk={handleDelete} onCancel={() => setDeleteNotificationId(null)}>
        <p>Anda yakin ingin menghapus notifikasi ini?</p>
      </Modal>
    </>
  );
};
