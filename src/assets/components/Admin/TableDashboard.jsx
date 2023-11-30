import { Table } from "antd";

export const TableDashboard = () => {
  // For Tabel
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Kategori",
      dataIndex: "kategori",
      key: "kategori",
    },
    {
      title: "Kelas Premium",
      dataIndex: "kelasPremium",
      key: "kelasPremium",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className={`${text == "Sudah Bayar" ? "text-green-500" : "text-red-500"}  font-bold`}>{text}</p>,
    },
    {
      title: "Metode Pembayaran",
      dataIndex: "metodePembayaran",
      key: "metodePembayaran",
    },
    {
      title: "Tanggal Bayar",
      dataIndex: "tanggalBayar",
      key: "tanggalBayar",
    },
  ];
  const data = [
    {
      key: "1",
      id: "12345",
      kategori: "UI/UX Desain",
      kelasPremium: "Belajar Web Desainer dengan Figma",
      status: "Sudah Bayar",
      metodePembayaran: "credit card",
      tanggalBayar: "21 Sep 2023",
    },
    {
      key: "2",
      id: "12345",
      kategori: "UI/UX Desain",
      kelasPremium: "Belajar Web Desainer dengan Figma",
      status: "Belum Bayar",
      metodePembayaran: "credit card",
      tanggalBayar: "21 Sep 2023",
    },
    {
      key: "3",
      id: "12345",
      kategori: "UI/UX Desain",
      kelasPremium: "Belajar Web Desainer dengan Figma",
      status: "Sudah Bayar",
      metodePembayaran: "credit card",
      tanggalBayar: "21 Sep 2023",
    },
    {
      key: "4",
      id: "12345",
      kategori: "UI/UX Desain",
      kelasPremium: "Belajar Web Desainer dengan Figma",
      status: "Sudah Bayar",
      metodePembayaran: "credit card",
      tanggalBayar: "21 Sep 2023",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
