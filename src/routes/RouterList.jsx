import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { Notifikasi } from "../pages/Notifikasi";
import { AkunProfil } from "../pages/AkunProfil";
import { AkunUbahPassword } from "../pages/AkunUbahPassword";
import { AkunRiwayatPembayaran } from "../pages/AkunRiwayatPembayaran";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/notification" element={<Notifikasi />}></Route>
        <Route path="/akun/profil" element={<AkunProfil />}></Route>
        <Route path="/akun/ubah-password" element={<AkunUbahPassword />}></Route>
        <Route path="/akun/riwayat-pembayaran" element={<AkunRiwayatPembayaran />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
