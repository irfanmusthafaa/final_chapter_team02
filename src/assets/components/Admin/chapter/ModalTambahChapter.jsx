import React, { useEffect, useState } from "react";
import { Input, Radio, Select } from "antd";
import { toast } from "react-toastify";
import { useAddChapter } from "../../../../services/admin/chapter/post-chapter";

export const ModalTambahChapter = ({ Class }) => {
  const [ChapterName, setChapterName] = useState("");
  const [ClassCode, setClassCode] = useState("");
  const [IsFree, setIsFree] = useState(true);

  const { mutate: dataChapter, status, isSuccess, isError, error } = useAddChapter();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "chapterName") {
        setChapterName(e.target.value);
      }
    }
  };

  const classOptions =
    Class?.map((item) => ({
      value: item.classCode,
      label: `${item.classCode} - ${item.className}`,
    })) || [];

  useEffect(() => {
    if (isError) {
      toast.error(error.response.data.message);
    }
    if (isSuccess) {
      toast.success("Successfully Added Chapter");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [status]);

  const handleAddChapter = () => {
    if (!ChapterName || !ClassCode) {
      toast.error("Mohon Lengkapi Data !!");
      return;
    }
    dataChapter({
      chapterName: ChapterName,
      classCode: ClassCode,
      is_preview: IsFree,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[60%] my-7">
        <h3 className="text-center font-bold text-purple-700 text-lg mb-10">Tambah Chapter</h3>
        <div className="w-full flex flex-col  gap-3 ">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Nama Chapter</label>
            <Input
              onChange={handleInput}
              id="chapterName"
              className="border rounded-lg hover:border-purple-700"
              type="text"
              placeholder="Nama Chapter"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Kode Kelas</label>
            <Select
              onChange={(value) => setClassCode(value)}
              className="border rounded-lg hover:border-purple-700"
              placeholder="Kode Kelas"
              options={classOptions}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-sm">Tipe Kelas </label>
            <Radio.Group onChange={(e) => setIsFree(e.target.value === "gratis")} defaultValue="gratis">
              <Radio value="gratis" onChange={(e) => setIsFree(e.target.checked)}>
                Gratis
              </Radio>
              <Radio value="premium">Premium</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button
            className="w-full py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
            onClick={() => {
              handleAddChapter();
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};
