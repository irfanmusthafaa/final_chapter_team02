import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { toast } from "react-toastify";
import { useAddBank } from "../../../../services/admin/bank/post-bank";

export const ModalTambahBank = () => {
  const [BankType, setBankType] = useState("");
  const [BankName, setBankName] = useState("");
  const [BankNumber, setBankNumber] = useState(0);

  const { mutate: dataBank, status, isSuccess, isError, error } = useAddBank();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "bankType") {
        setBankType(e.target.value);
      }
      if (e.target.id === "bankName") {
        setBankName(e.target.value);
      }
      if (e.target.id === "bankNumber") {
        setBankNumber(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Bank");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  console.log(BankType, "BankType");
  console.log(BankName, "BankName");
  console.log(BankNumber, "BankNumber");

  const handleAddBank = () => {
    if (!BankType || !BankName || !BankNumber) {
      toast.error("Please Complete Data !!");
      return;
    }
    dataBank({
      bankType: BankType,
      bankName: BankName,
      bankNumber: BankNumber,
    });
  };
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Bank</h3>
        <div className="w-full flex flex-col  gap-3 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Bank</label>
            <Input onChange={handleInput} id="bankType" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Bank" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Atas Nama</label>
            <Input onChange={handleInput} id="bankName" className="border rounded-lg hover:border-purple-700" type="text" placeholder="Atas Nama" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Nomor Rekening</label>
            <Input
              onChange={handleInput}
              id="bankNumber"
              className="border rounded-lg hover:border-purple-700"
              type="number"
              placeholder="Nomor Rekening"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
            onClick={() => {
              handleAddBank();
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
