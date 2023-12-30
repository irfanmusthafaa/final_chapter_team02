import React from "react";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import { HeroSection } from "../assets/components/HeroSection";
import { Navbar } from "../assets/components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "../assets/components/Footer";

export const Beranda = () => {
  return (
    <div className=" w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <KategoriBelajar />
      <KursusPopuler />
      <Footer />
    </div>
  );
};
