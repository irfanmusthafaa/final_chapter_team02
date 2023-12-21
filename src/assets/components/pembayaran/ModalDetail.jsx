import React from "react";
import { Input, Radio, Select } from "antd";

export const ModalDetail = () => {
    
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%]  mt-7">
        <h2 className="text-center font-bold text-purple-700 text-lg mb-6">
          Detail Pembayaran
        </h2>
        <div className="w-full flex flex-col  gap-3 ">
        <label className="font-semibold text-sm">Bank Transfer / Credit Card </label>
        <Radio.Group 
        // onChange={(e) => setIsFree(e.target.value === "gratis")} 
        defaultValue="gratis">
              <Radio value="gratis" 
            //   onChange={(e) => setIsFree(e.target.checked)}
              >
                Bank Transfer
              </Radio>
              <Radio value="premium">Credit Card</Radio>
            </Radio.Group>
        <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Nama Bank / Credit Card</label>
            <Select
              className="border rounded-lg hover:border-purple-700"
              placeholder="Nama Bank / Credit Card"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Input Credit Card Number</label>
            <Input
              id="chapterName"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Jika memilih Bank Transfer diisi (-)"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
