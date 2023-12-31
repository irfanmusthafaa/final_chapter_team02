import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { DetailPembayaran } from "../pages/DetailPembayaran";
import { SuksesPembayaran } from "../pages/SuksesPembayaran";
import { Notifikasi } from "../pages/Notifikasi";
import { AkunProfil } from "../pages/AkunProfil";
import { AkunUbahPassword } from "../pages/AkunUbahPassword";
import { AkunRiwayatPembayaran } from "../pages/AkunRiwayatPembayaran";
import { AdminLogin } from "../pages/Admin/AdminLogin";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { AdminKelolaKelas } from "../pages/Admin/AdminKelolaKelas";
import { ResetPass } from "../pages/Auth/ResetPass";
import { KelasBerjalan } from "../pages/KelasSaya/KelasBerjalan";
import { TopikKelas } from "../pages/KelasSaya/TopikKelas";
import { DetailKelasPage } from "../pages/DetailKelas/DetailKelasPage";
import { Login } from "../pages/Auth/Login";
import { Register } from "../pages/Auth/Register";
import { OTP } from "../pages/Auth/OTP";
import { NewPass } from "../pages/Auth/NewPass";
import { PasswordOTP } from "../pages/Auth/PasswordOTP";
import { ProtectedUser } from "../assets/components/protected/ProtectedUser";
import { AdminKategori } from "../pages/Admin/AdminKategori";
import { ProtectedAdmin } from "../assets/components/Admin/ProtectedAdmin";
import { AdminChapter } from "../pages/Admin/AdminChapter";
import { AdminLesson } from "../pages/Admin/AdminLesson";
import { AdminBank } from "../pages/Admin/AdminBank";
import { AdminUser } from "../pages/Admin/AdminUser";
import { AdminTransaksi } from "../pages/Admin/AdminTransaksi";
import { AdminNotification } from "../pages/Admin/AdminNotification";
import { Activation } from "../pages/Auth/Activation";
import { AdminResetPass } from "../pages/Admin/AdminResetPass";
import { AdminPasswordOTP } from "../pages/Admin/AdminPasswordOTP";
import { AdminNewPass } from "../pages/Admin/AdminNewPass";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/activation" element={<Activation />}></Route>
        <Route
          path="/detail-pembayaran/:classCode"
          element={
            <ProtectedUser>
              <DetailPembayaran />
            </ProtectedUser>
          }
        ></Route>
        <Route path="/sukses-pembayaran" element={<SuksesPembayaran />}></Route>
        <Route
          path="/notifikasi"
          element={
            <ProtectedUser>
              <Notifikasi />
            </ProtectedUser>
          }
        ></Route>
        <Route
          path="/profil"
          element={
            <ProtectedUser>
              <AkunProfil />
            </ProtectedUser>
          }
        ></Route>
        <Route
          path="/ubah-password"
          element={
            <ProtectedUser>
              <AkunUbahPassword />
            </ProtectedUser>
          }
        ></Route>
        <Route
          path="/riwayat-pembayaran"
          element={
            <ProtectedUser>
              <AkunRiwayatPembayaran />
            </ProtectedUser>
          }
        ></Route>
        <Route path="/reset-password" element={<ResetPass />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
        <Route
          path="/KelasSaya/KelasBerjalan"
          element={
            <ProtectedUser>
              <KelasBerjalan />
            </ProtectedUser>
          }
        ></Route>
        <Route path="/KelasSaya/TopikKelas" element={<TopikKelas />}></Route>
        <Route
          path="/Detailkelas/:classCode"
          element={
            <ProtectedUser>
              <DetailKelasPage />
            </ProtectedUser>
          }
        ></Route>
        <Route path="/new-password" element={<NewPass />}></Route>
        <Route path="/password-otp" element={<PasswordOTP />}></Route>

        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/reset-password-admin" element={<AdminResetPass />}></Route>
        <Route path="/new-password-admin" element={<AdminNewPass />}></Route>
        <Route path="/password-otp-admin" element={<AdminPasswordOTP />}></Route>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <AdminDashboard />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/kelas"
          element={
            <ProtectedAdmin>
              <AdminKelolaKelas />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/kategori"
          element={
            <ProtectedAdmin>
              <AdminKategori />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/chapter"
          element={
            <ProtectedAdmin>
              <AdminChapter />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/lesson"
          element={
            <ProtectedAdmin>
              <AdminLesson />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/bank"
          element={
            <ProtectedAdmin>
              <AdminBank />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/user"
          element={
            <ProtectedAdmin>
              <AdminUser />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/transaksi"
          element={
            <ProtectedAdmin>
              <AdminTransaksi />
            </ProtectedAdmin>
          }
        ></Route>
        <Route
          path="/admin/notifikasi"
          element={
            <ProtectedAdmin>
              <AdminNotification />
            </ProtectedAdmin>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
