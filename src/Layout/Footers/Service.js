import React from "react";
import "./Service.css";
import FootersData from "./FootersData";
// 임폴트해보기
function Service() {
  const { serviceImages } = FootersData;

  return (
    <div className="Container">
      <div className="Container_width">
        <h1>언제나 리그 오브 레전드와 함께</h1>
        <div className="explain">
          리그 오브 레전드 앱을 다운로드해 친구들과 대화하고 최신 게임 및
          e스포츠 소식을 확인해 보세요.
        </div>
        <div className="imgs">
          {serviceImages.map((serviceImage) => (
            <a href="#">
              <img
                className="imgs1"
                src={process.env.PUBLIC_URL + serviceImage}
                alt="img"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
