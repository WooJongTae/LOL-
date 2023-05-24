import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="Banner">
      <iframe
        className="Banner_image"
        src="https://www.youtube.com/embed/6k8bHfBKDT4"
        title="YouTube video player"
        auto
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="Banner_position">
        <img
          className="Logo"
          src="/images/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
          alt="logo"
        />
        <iframe
          className="Banner_image2"
          src="https://www.youtube.com/embed/6k8bHfBKDT4"
          title="YouTube video player"
          auto
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="Banner_position_line"></div>
        <div className="play">
          <span>무료로 플레이하기</span>
          <div className="play_line"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
