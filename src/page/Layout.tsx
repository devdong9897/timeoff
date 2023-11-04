import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { LayoutWrap } from "../styles/LayoutStyle";

const Layout = () => {
  return (
    <LayoutWrap>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;
