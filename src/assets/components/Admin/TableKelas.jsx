import { Button, Space, Table } from "antd";

export const TableKelas = () => {
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
      render: (text) => <p className={`${text == "GRATIS" ? "text-green-500" : "text-blue-500"}  font-bold`}>{text}</p>,
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
          <Button className="bg-purple-700 text-white border-none hover:bg-purple-900 hover:text-white hover:border-none rounded-full">Ubah</Button>
          <Button className="bg-red-600 text-white hover:bg-red-900 rounded-full">Hapus</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      kodeKelas: "UIUX123",
      kategori: "UI/UX Desain",
      namaKelas: "Belajar Web Designer dengan Figma",
      tipeKelas: "GRATIS",
      level: "Beginner",
      hargaKelas: "Rp, 0",
    },
    {
      key: "2",
      kodeKelas: "UIUX123",
      kategori: "UI/UX Desain",
      namaKelas: "Belajar Web Designer dengan Figma",
      tipeKelas: "PREMIUM",
      level: "Beginner",
      hargaKelas: "Rp, 0",
    },
    {
      key: "3",
      kodeKelas: "UIUX123",
      kategori: "UI/UX Desain",
      namaKelas: "Belajar Web Designer dengan Figma",
      tipeKelas: "PREMIUM",
      level: "Beginner",
      hargaKelas: "Rp, 0",
    },
    {
      key: "4",
      kodeKelas: "UIUX123",
      kategori: "UI/UX Desain",
      namaKelas: "Belajar Web Designer dengan Figma",
      tipeKelas: "GRATIS",
      level: "Beginner",
      hargaKelas: "Rp, 0",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
