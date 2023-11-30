import React from "react";
import { Input } from "antd";
const { TextArea } = Input;

export const ModalTambahKelas = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  mt-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Kelas</h3>
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm ">Nama Kelas</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Nama Kelas" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Kategori</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Kategori" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Kode Kelas</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Kode Kelas" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Tipe Kelas</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Tipe Kelas" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Level</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Level" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Harga</label>
            <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Harga" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Materi</label>
            <TextArea rows={4} className="border rounded-lg hover:border-purple-700" type="text" placeholder="Materi" />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="w-full py-3  cursor-pointer bg-red-600 hover:bg-red-700 text-white font-medium border-0  rounded-full mt-2">
            Upload Video
          </button>
          <button className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
