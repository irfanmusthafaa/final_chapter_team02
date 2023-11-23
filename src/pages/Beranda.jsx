import React from "react";
import { Header } from "../assets/components/Header";
import { Button, Flex } from "antd";

export const Beranda = () => {
  return (
    <>
      <Header />

      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </>
  );
};
