import React from "react";
import MobileHeader from "./Mobile/MobileHeader";
import "./Layout.css";
import Footers from "../Layout/Footers/Footers";
import Mains from "./Mains/Mains";
import Sub2 from "./Sub2/Sub2";
import MobileSub from "./Mobile/MobileSub";
function MobileLayout() {
  return (
    <div className="div_flex">
      <MobileHeader />
      <Mains />
      <MobileSub />
      <Sub2 />
      <Footers />
    </div>
  );
}
export default MobileLayout;
