import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import iconEdit from "../assets/images/ic-edit.png";
import iconSetting from "../assets/images/ic_settings.png";
import iconCart from "../assets/images/ic_cart-outline.png";
import { Input } from "antd";
import { MenuAkun } from "../assets/components/MenuAkun";
import { toast } from "react-toastify";
import { UpdateProfile } from "../services/profile/edit-profile";
import { useGetProfileUser } from "../services/profile/get-profil-user";

export const AkunProfil = () => {
  const [FullName, setFullName] = useState("");
  const [City, setCity] = useState("");
  const [Country, setCountry] = useState("");
  const [NoTelp, setNoTelp] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [Profile, setProfile] = useState({});

  const { data: dataProfile, isLoading, isError } = useGetProfileUser();

  useEffect(() => {
    if (!isLoading && !isError) {
      setProfile(dataProfile || {});
    }
  }, [dataProfile, isLoading, isError]);

  useEffect(() => {
    setFullName(Profile?.fullName);
    setCity(Profile?.city);
    setCountry(Profile?.country);
    setNoTelp(Profile?.noTelp);
  }, [Profile?.fullName, Profile?.city, Profile?.country, Profile?.noTelp, Profile?.profilePicture]);

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "fullName") {
        setFullName(e.target.value);
      }
      if (e.target.id === "city") {
        setCity(e.target.value);
      }
      if (e.target.id === "country") {
        setCountry(e.target.value);
      }
      if (e.target.id === "noTelp") {
        const numericValue = e.target.value.replace(/\D/g, "");

        // Memastikan panjang karakter tidak lebih dari 13
        if (numericValue.length <= 13) {
          setNoTelp(numericValue);
        }
        // setNoTelp(e.target.value);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Validasi tipe file (opsional)
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        toast.warning("Tipe file tidak didukung. Pilih file gambar (jpeg, png, gif).");
        return;
      }

      // Validasi ukuran file (opsional)
      const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSizeInBytes) {
        toast.error("Ukuran file terlalu besar. Pilih file yang lebih kecil.");
        return;
      }

      // Menampilkan gambar yang dipilih
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setAvatarFile(file); // Menyimpan objek File
      };
      reader.readAsDataURL(file);
    }
  };
  // End Avatar

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append("fullName", FullName);
    formData.append("city", City);
    formData.append("country", Country);
    formData.append("noTelp", NoTelp);
    if (avatarFile) {
      formData.append("profilePicture", avatarFile);
    } else if (Profile?.profilePicture) {
      // Jika avatarFile null, ambil dari nilai avatar yang sudah ada
      formData.append("profilePicture", Profile?.profilePicture);
    }

    try {
      await UpdateProfile(formData);
      toast.success("Update Profile Success");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Failed Update Profile");
    }
  };

  //Menu
  const propsMenu = [
    { label: "Profil Saya", link: "/profil", img: iconEdit, textColor: "text-purple-700 font-bold" },
    { label: "Ubah Password", link: "/ubah-password", img: iconSetting, textColor: "text-black " },
    { label: "Riwayat Pembayaran", link: "/riwayat-pembayaran", img: iconCart, textColor: "text-black " },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-[6rem] bg-purple-100 h-[150px] flex flex-col justify-between items-center ">
        <div className="w-[90%] md:w-[60%] mt-7">
          <a href="/" className="text-purple-700 hover:text-purple-900 font-bold no-underline flex gap-3">
            <FontAwesomeIcon icon={faArrowLeft} className="pt-1" />
            Kembali Ke Beranda
          </a>
        </div>
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%] bg-purple-700 rounded-t-2xl">
          {" "}
          <h3 className="text-white text-xl py-6 text-center">Akun</h3>
        </div>
      </div>
      {/* card bawah */}
      <div className="flex justify-center items-center mb-5">
        <div style={{ border: "1px solid #7E22CE" }} className="w-[90%] md:w-[60%] border-t-0 rounded-b-2xl min-h-[500px]">
          <div className="flex">
            <div className="w-1/2 py-5 px-3 md:p-5 box-border">
              <MenuAkun menus={propsMenu} />
            </div>
            <div className="w-1/2">
              <div className="flex flex-col px-3 justify-center items-center my-10 gap-3 ">
                <div>
                  <div>
                    <label htmlFor="avatarInput" className="cursor-pointer">
                      {avatar || Profile?.profilePicture ? (
                        <img
                          src={avatar || Profile?.profilePicture}
                          alt="Avatar Preview"
                          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span className="text-xs">Upload Image</span>
                        </div>
                      )}
                    </label>
                    <input type="file" id="avatarInput" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
                  </div>
                </div>

                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Nama</label>
                  <Input
                    id="fullName"
                    onChange={handleInput}
                    className="border rounded-lg hover:border-purple-700"
                    type="text"
                    placeholder="Nama"
                    value={FullName}
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">No Telepon</label>
                  <Input
                    id="noTelp"
                    onChange={handleInput}
                    className="border rounded-lg hover:border-purple-700"
                    type="number"
                    placeholder="No Telepon"
                    value={NoTelp}
                    maxLength={13}
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Negara</label>
                  <Input
                    id="country"
                    onChange={handleInput}
                    className="border rounded-lg hover:border-purple-700"
                    type="text"
                    placeholder="Negara"
                    value={Country}
                  />
                </div>
                <div className="flex flex-col gap-1 md:w-3/4">
                  <label className="font-normal text-sm">Kota</label>
                  <Input
                    id="city"
                    onChange={handleInput}
                    className="border rounded-lg hover:border-purple-700"
                    type="text"
                    placeholder="Kota"
                    value={City}
                  />
                </div>

                <button
                  onClick={() => handleUpdateProfile()}
                  className="w-full md:w-3/4 py-3  cursor-pointer bg-purple-700 hover:bg-purple-900 text-white font-medium border-0  rounded-full mt-2"
                >
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
