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
        <Route path="/notifikasi" element={<Notifikasi />}></Route>
        <Route path="/profil" element={<AkunProfil />}></Route>
        <Route path="/ubah-password" element={<AkunUbahPassword />}></Route>
        <Route path="/riwayat-pembayaran" element={<AkunRiwayatPembayaran />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
