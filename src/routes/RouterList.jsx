import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { DetailPembayaran } from "../pages/DetailPembayaran";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/detail-pembayaran" element={<DetailPembayaran/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
