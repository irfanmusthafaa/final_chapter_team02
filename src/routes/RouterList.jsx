import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { AdminLogin } from "../pages/Admin/AdminLogin";
import { AdminDashboard } from "../pages/Admin/AdminDashboard";
import { AdminKelolaKelas } from "../pages/Admin/AdminKelolaKelas";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboard />}></Route>
        <Route path="/admin/kelas" element={<AdminKelolaKelas />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
