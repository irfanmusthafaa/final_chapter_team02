import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { Notifikasi } from "../pages/Notifikasi";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/notification" element={<Notifikasi />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
