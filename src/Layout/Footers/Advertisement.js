import React from "react";
import "./Advertisement.css";

function Advertisement() {
  console.log(window.screenY);
  return (
    // 왜 css가 Container 일때 중첩되어 실행되는지
    <div className="Container2">
      <div className="video">
        <div className="center_text">
          <span>무료로 플레이하기</span>
          <div className="center_line"></div>
        </div>
        <video
          src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt441f3bc092c69d44/5f49597070ca0f65ba10a435/ss2020_kaisa_ez_1920x1080.mp4"
          playsInline
          muted
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
}

export default Advertisement;
