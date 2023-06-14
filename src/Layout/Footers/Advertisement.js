import React from "react";
import "./Advertisement.css";
import Video from "../svg/VideoLink";

const AdvertisementVideo = Video.AdvertisementVideo;

function Advertisement() {
  return (
    <div className="Container2">
      <div className="video">
        <div className="center_text">
          <span>무료로 플레이하기</span>
          <div className="center_line"></div>
        </div>
        <video src={AdvertisementVideo} playsInline muted autoPlay loop></video>
      </div>
    </div>
  );
}

export default Advertisement;
