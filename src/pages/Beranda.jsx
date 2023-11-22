import { Button, Flex } from "antd";
import React from "react";

export const Beranda = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Halaman Beranda!</h1>
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
