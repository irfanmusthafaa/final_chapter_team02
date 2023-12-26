import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Modal, Radio, Select, message } from "antd";
import { toast } from "react-toastify";
import { UpdateChapter } from "../../../../services/admin/chapter/put-chapter";
import { UpdateBank } from "../../../../services/admin/bank/put-bank";

export const ModalUpdateBank = ({ record, openUpdate, setOpenUpdate }) => {
  const [BankType, setBankType] = useState("");
  const [BankName, setBankName] = useState("");
  const [BankNumber, setBankNumber] = useState(0);

  useEffect(() => {
    setBankType(record.bankType);
    setBankName(record.bankName);
    setBankNumber(record.bankNumber);
  }, [record.bankType, record.bankName, record.bankNumber]);

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

  const handleUpdateBank = () => {
    if (!BankType || !BankName || !BankNumber) {
      toast.error("Please Complete Data !!");
      return;
    }
    const id = record.id;
    if (id) {
      UpdateBank(id, {
        bankType: BankType,
        bankName: BankName,
        bankNumber: BankNumber,
      });
      toast.success("Update Bank Success");
      setOpenUpdate(false);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Data Tidak Berhasil di Update");
    }
  };

  return (
    <Modal
      centered
      open={openUpdate}
      onOk={() => setOpenUpdate(false)}
      onCancel={() => setOpenUpdate(false)}
      footer={null}
      width={700}
      className="mt-10"
    >
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="w-[60%]  my-7">
          <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Ubah Bank</h3>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Bank</label>
              <Input
                onChange={handleInput}
                id="bankType"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Bank"
                value={BankType}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Atas Nama</label>
              <Input
                onChange={handleInput}
                id="bankName"
                className="border rounded-lg hover:border-purple-700"
                type="text"
                placeholder="Atas Nama"
                value={BankName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-sm">Nomor Rekening</label>
              <Input
                onChange={handleInput}
                id="bankNumber"
                className="border rounded-lg hover:border-purple-700"
                type="number"
                placeholder="Nomor Rekening"
                value={BankNumber}
              />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
              onClick={() => {
                handleUpdateBank();
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
