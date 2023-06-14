import React, { useState } from "react";
import "./Round.css";
import SubData2 from "./SubData2";
function Round() {
  const [clickImage, setClickImage] = useState(0);
  const [className, setClassName] = useState("trans0");

  const { RoundVideo, backImages, backGround, roundTexts, roundFields } =
    SubData2;

  const imageNumber = (num) => {
    setClickImage(num);
  };
  const translateClick = (trans) => {
    setClassName(trans);
  };
  return (
    <div
      className="Round"
      style={{
        // backgroundImage: `url($backImage[clickImage])`,  참고해라
        backgroundImage: `url(${backGround[clickImage]})`,
      }}
    >
      <div className="inner">
        <div className="Round_text2">
          <p>다양하게</p>
          <p>플레이</p>
          <div>지금 플레이하기</div>
        </div>
        <span className="Game_mode">게임모드</span>
        <div className="Round_flex">
          <video
            className="Round_video"
            autoPlay
            muted
            loop
            src={RoundVideo[clickImage]}
          ></video>
          <div className={`Round_sub_flex ${className}`}>
            {backImages.map((backImage, i) => (
              <div
                className={
                  clickImage == i
                    ? `Round_img_${i + 1} On`
                    : `Round_img_${i + 1} `
                }
                onClick={() => {
                  imageNumber(i);
                  translateClick(`trans${i}`);
                }}
              >
                <img src={backImage} alt={`img-${i + 1}`} />
              </div>
            ))}
          </div>

          <div>
            {roundFields.map((roundField, i) => (
              <div className={clickImage == i ? "field On" : "field"}>
                {roundField}
              </div>
            ))}
          </div>
          <div>
            {roundTexts.map((roundText, i) => (
              <div
                className={clickImage == i ? "Round_text On " : "Round_text"}
              >
                <p>{roundText.p1}</p>
                <p>{roundText.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Round;
