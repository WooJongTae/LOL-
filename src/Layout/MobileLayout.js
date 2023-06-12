import React from "react";
import MobileHeader from "./Mobile/MobileHeader";
import "./Layout.css";
import Footers from "../Layout/Footers/Footers";
import Mains from "./Mains/Mains";
import Sub from "./Sub/Sub";
import Sub2 from "./Sub2/Sub2";
function MobileLayout() {
  return (
    <div className="div_flex">
      <MobileHeader />
      <Mains />
      <Sub />
      <Sub2 />
      <Footers />
    </div>
  );
}
export default MobileLayout;
