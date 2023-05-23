import React, { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import "./Layout.css";
import Main1 from "./Main1";
import Footer from "./Footer";
import Service from "./Service";
import Advertisement from "./Advertisement";
import Information from "./Information";
function Layout() {
  return (
    <div className="div_flex">
      <Header />
      <Banner />
      <Main1 />
      <Information />
      <Advertisement />
      <Service />
      <Footer />
    </div>
  );
}

export default Layout;
