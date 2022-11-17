import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Divider, Space } from "@mantine/core";

export default function SharedLayout() {
  return (
    <div className="container">
      <Header />
      <Divider />
      <Space h="sm" />
      <Outlet />
      <Space h="md" />
      <Footer />
    </div>
  );
}
