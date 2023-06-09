import React from "react";
import { useMediaQuery } from "react-responsive";
import Banner from "./Banner";
import Main1 from "./Main1";
import Social from "./Social";
import MobileBanner from "../Mains/MobileBanner";

function Mains() {
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const isDesktopOrLaptop2 = useMediaQuery({ query: "(min-width:768px)" });
  return (
    <div>
      {isMobile && <MobileBanner />}
      {isDesktopOrLaptop2 && <Banner />}
      <Main1 />
      <Social />
    </div>
  );
}

export default Mains;
