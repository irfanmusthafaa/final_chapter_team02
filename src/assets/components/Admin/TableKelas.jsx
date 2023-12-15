import { Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useClassDataQuery } from "../../../services/class/get-data-class";
import { useCategoryDataQuery } from "../../../services/category/get-data-category";

export const TableKelas = ({ searchTerm }) => {
  const [Category, setCategory] = useState([]);
  const [Class, setClass] = useState([]);
  const [filterCategory, setFilterCategory] = useState(undefined);

  const { data: dataCategory } = useCategoryDataQuery();
  const { data: dataClass } = useClassDataQuery({ categoryId: filterCategory });

  useEffect(() => {
    setCategory(dataCategory);
    setClass(dataClass?.result);
  }, [dataCategory, dataClass]);

  console.log(Class, "data class");
  console.log(filterCategory, "filter cat");

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
      // render: (text) => <p className={`${text === false ? "text-green-500" : "text-blue-500"}  font-bold`}>{text}</p>,
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

  const dynamicData =
    // Class?.filter((item) => item.className.toLowerCase().includes(searchTerm.toLowerCase()))
    Class?.filter((item) => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      return Object.values(item).some((value) => typeof value === "string" && value.toLowerCase().includes(lowerSearchTerm));
    }).map((item) => ({
      key: item.id, // Assuming 'id' is a unique identifier for each item
      kodeKelas: item.classCode,
      kategori: item.categorys.categoryName,
      namaKelas: item.className,
      tipeKelas: item.isFree,
      level: item.levelName,
      hargaKelas: item.price,
    })) || [];

  // const data = [
  //   {
  //     key: "1",
  //     kodeKelas: "UIUX123",
  //     kategori: "UI/UX Desain",
  //     namaKelas: "Belajar Web Designer dengan Figma",
  //     tipeKelas: "GRATIS",
  //     level: "Beginner",
  //     hargaKelas: "Rp, 0",
  //   },
  //   {
  //     key: "2",
  //     kodeKelas: "UIUX123",
  //     kategori: "UI/UX Desain",
  //     namaKelas: "Belajar Web Designer dengan Figma",
  //     tipeKelas: "PREMIUM",
  //     level: "Beginner",
  //     hargaKelas: "Rp, 0",
  //   },
  //   {
  //     key: "3",
  //     kodeKelas: "UIUX123",
  //     kategori: "UI/UX Desain",
  //     namaKelas: "Belajar Web Designer dengan Figma",
  //     tipeKelas: "PREMIUM",
  //     level: "Beginner",
  //     hargaKelas: "Rp, 0",
  //   },
  //   {
  //     key: "4",
  //     kodeKelas: "UIUX123",
  //     kategori: "UI/UX Desain",
  //     namaKelas: "Belajar Web Designer dengan Figma",
  //     tipeKelas: "GRATIS",
  //     level: "Beginner",
  //     hargaKelas: "Rp, 0",
  //   },
  // ];

  return <Table columns={columns} dataSource={dynamicData} />;
};
