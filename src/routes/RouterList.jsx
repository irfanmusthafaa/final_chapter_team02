import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Beranda } from "../pages/Beranda";
import { Register } from "../pages/Register";
import { OTP } from "../pages/OTP";

export const RouterList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/otp" element={<OTP />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
