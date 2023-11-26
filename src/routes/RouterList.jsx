import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { KelasBerjalan } from "../pages/KelasSaya/KelasBerjalan";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/kelasSaya" element={<KelasBerjalan />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
