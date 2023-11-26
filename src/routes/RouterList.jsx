import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { KelasBerjalan } from "../pages/KelasSaya/KelasBerjalan";
import { TopikKelas } from "../pages/KelasSaya/TopikKelas";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/kelasSaya/KelasBerjalan" element={<KelasBerjalan />}></Route>
        <Route path="/KelasSaya/TopikKelas" element={<TopikKelas />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
