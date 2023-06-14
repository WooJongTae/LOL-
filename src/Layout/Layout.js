import React from "react";
import Header from "./Headers/Header";
import "./Layout.css";
import Footers from "../Layout/Footers/Footers";
import Mains from "./Mains/Mains";
import Sub from "./Sub/Sub";
import Sub2 from "./Sub2/Sub2";

function Layout() {
  return (
    <div className="div_flex">
      <Header />
      <Mains />
      <Sub />
      <Sub2 />
      <Footers />
    </div>
  );
}

export default Layout;
