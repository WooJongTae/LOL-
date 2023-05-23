import React from "react";
import "./Service.css";

// 임폴트해보기
function Service() {
  return (
    <div className="Container">
      <div className="Container_width">
        <h1>언제나 리그 오브 레전드와 함께</h1>
        <div className="explain">
          리그 오브 레전드 앱을 다운로드해 친구들과 대화하고 최신 게임 및
          e스포츠 소식을 확인해 보세요.
        </div>
        <div className="imgs">
          <a href="#">
            <img
              className="imgs1"
              src="/images/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.27a03284.svg"
              alt="img"
            />
          </a>
          <a href="#">
            <img
              className="imgs2"
              src="/images/ko_get.6d161200.svg"
              alt="img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
