import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { Notifikasi } from "../pages/Notifikasi";
import { AkunProfil } from "../pages/AkunProfil";
import { AkunUbahPassword } from "../pages/AkunUbahPassword";
import { AkunRiwayatPembayaran } from "../pages/AkunRiwayatPembayaran";
import { AdminLogin } from "../pages/Admin/AdminLogin";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { AdminKelolaKelas } from "../pages/Admin/AdminKelolaKelas";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { ResetPass } from "../pages/ResetPass";


export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
        <Route path="/profil" element={<AkunProfil />}></Route>
        <Route path="/ubah-password" element={<AkunUbahPassword />}></Route>
        <Route path="/riwayat-pembayaran" element={<AkunRiwayatPembayaran />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin/kelas" element={<AdminKelolaKelas />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reset-password" element={<ResetPass/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
