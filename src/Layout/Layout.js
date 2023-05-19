import React, { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import "./Layout.css";
function Layout() {
  return (
    <div className="div_flex">
      <Header />
      <Banner />
    </div>
  );
}

export default Layout;
