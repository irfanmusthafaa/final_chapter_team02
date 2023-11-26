import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { KelasSayaPage } from "../pages/KelasSaya";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/kelasSaya" element={<KelasSayaPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
