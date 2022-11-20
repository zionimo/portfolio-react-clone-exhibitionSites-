import React from "react";
import NavbarComp from "../components/NavbarComp";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* 네브바 */}
      <NavbarComp />
      {/* Outlet으로 네브바 아래 화면 구성 */}
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
