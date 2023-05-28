import React, { useState } from "react";
import Header from "./Header";
import "./Layout.css";
import Footer from "./Footer";
import Service from "./Service";
import Advertisement from "./Advertisement";
import Information from "./Information";
import Field from "./Field";
import Champion from "./Champion";
import Champion2 from "./Champion2";
import Round from "./Round";
import Mains from "./Mains/Mains";
function Layout() {
  return (
    <div className="div_flex">
      <Header />
      <Mains />
      <Champion />
      <Champion2 />
      <Round />
      <Field />
      <Information />
      <Advertisement />
      <Service />
      <Footer />
    </div>
  );
}

export default Layout;
