import React from "react";
import { Nav } from "../assets/components/Nav";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import { HeroSection } from "../assets/components/HeroSection";

export const Beranda = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <KategoriBelajar />
      <KursusPopuler />
    </>
  );
};
