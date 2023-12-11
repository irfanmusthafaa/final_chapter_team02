import React, { useState } from "react";
import { Nav } from "../assets/components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import iconSignout from "../assets/images/ic_log-out.png";
import { Input, message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { MenuAkun } from "../assets/components/MenuAkun";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const AkunProfil = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-purple-700 font-bold" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-black " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-black " },
    // { label: "Keluar", link: "/login", img: iconSignout, textColor: "text-black " },
  ];

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Nav />
      <div className="bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} />
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[60%] bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Akun</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center  ">
        <div style={{ border: "1px solid #7E22CE" }} className="  w-[60%] border-t-0  rounded-b-2xl min-h-[500px]">
          <div className="flex">
            <div className="w-1/2  p-5 box-border">
              <MenuAkun menus={propsMenu} />
            </div>
            <div className="w-1/2">
              <div className="flex flex-col w-full px-3 justify-center items-center my-10 gap-3 ">
                <div>
                  <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: "100%",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </div>
                <div className="flex flex-col gap-1 w-3/4  ">
                  <label className="font-normal text-sm">Nama</label>
                  <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Nama" />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Email</label>
                  <Input className="border rounded-lg hover:border-purple-700" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">No Telepon</label>
                  <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="No Telepon" />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Negara</label>
                  <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Negara" />
                </div>
                <div className="flex flex-col gap-1 w-3/4">
                  <label className="font-normal text-sm">Kota</label>
                  <Input className="border rounded-lg hover:border-purple-700" type="text" placeholder="Kota" />
                </div>

                <button className="w-3/4 py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2">
                  Simpan Profil Saya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
