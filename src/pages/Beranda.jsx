import React from "react";
import { Header } from "../assets/components/Header";
import { Button, Flex } from "antd";
import { Hero } from "../assets/components/Hero";
import { Nav } from "../assets/components/Nav";
import { KategoriBelajar } from "../assets/components/KategoriBelajar";
import { KursusPopuler } from "../assets/components/KursusPopuler";
import { HeroSection } from "../assets/components/HeroSection";

export const Beranda = () => {
  return (
    <>
      {/* <Header /> */}
      <Nav />
      <HeroSection />
      {/* <Hero /> */}
      <KategoriBelajar />
      <KursusPopuler />
    </>
  );
};
