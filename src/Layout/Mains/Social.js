import React from "react";
import "./Social.css";
import MainData from "./MainData";

function Social() {
  // const [image, setImage] = useState(0);
  const { socialImgs } = MainData;
  return (
    <div className="position_socials">
      <div className="Socials">
        <div className="area">
          <div className="area_flex">
            <div>
              <h1>공식 소셜 채널 살펴보기 ㅣ</h1>
            </div>
            <div className="Socials_img">
              {socialImgs.map((socialImg) => (
                <a href="#">
                  <svg
                    xmlns={socialImg.xmlns}
                    viewBox={socialImg.viewBox}
                    class=""
                  >
                    <path class="" d={socialImg.path}></path>
                    <path class="" d={socialImg.path2}></path>
                    <path class="" d={socialImg.path3}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
