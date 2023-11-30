import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";

import { KelasBerjalan } from "../pages/KelasSaya/KelasBerjalan";
import { TopikKelas } from "../pages/KelasSaya/TopikKelas";
import { DetailKelasPage } from "../pages/DetailKelas/DetailKelasPage";
import App from "../assets/components/modal/ModalSatu";


export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/KelasSaya/KelasBerjalan" element={<KelasBerjalan />}></Route>
        <Route path="/KelasSaya/TopikKelas" element={<TopikKelas />}></Route>
        <Route path="/Detailkelas" element={<DetailKelasPage />}></Route>
        <Route path="TesModal" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
