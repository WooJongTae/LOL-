import React, { useState } from "react";
import "./Champion.css";
import SubData from "./SubData";
function Champion() {
  const { ArrayImage, ArrayMovie, ChampionName, ChampionEx, championLogos } =
    SubData;

  const [number, setNumber] = useState(0);
  console.log(number);

  const imageChange = (num) => {
    setNumber(num);
  };

  return (
    <div className="Champion">
      <div className="inner">
        <div className="Champion_container">
          <div className="Champion_text">
            <p>챔피언을</p>
            <h1>선택하세요</h1>
            <p>
              적진으로 돌격하거나 팀원을 보조하는 등, 소환사의 협곡에는 다양한
              역할군이 있습니다.
            </p>
            <div className="Champion_div">
              <div>
                <span>더 많은 챔피언 알아보기</span>
              </div>
              <div>
                <span>지금 플레이하기</span>
              </div>
            </div>
          </div>
          <div className="Champion_img">
            <div className="line"></div>
            <div className="line_circle"></div>
            <div className="Champion_ul">
              <ul>
                {championLogos.map((championLogo, i) => (
                  <li onClick={() => imageChange(i)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className={
                        i === number ? "Class_image" : "Class_image_none"
                      }
                    >
                      <path d={championLogo.path1}></path>
                      <path d={championLogo.path2}></path>
                    </svg>
                    <svg
                      className={i === number ? "svg_hover" : "svg_hover_none"}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path d={championLogo.path3}></path>
                      <path d={championLogo.path4}></path>
                    </svg>
                    <span>{championLogo.name}</span>
                    <div></div>
                    <div
                      className={i === number ? "circle On" : "circle"}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
            <img className="img_screen" src={ArrayImage[number]} alt="imgs" />
          </div>
          <div className="img_screen_name">
            <h1>{ChampionName[number]}</h1>
            <br />
            <p>{ChampionEx[number]}</p>
          </div>
          <div className="champion_video_position">
            <video src={ArrayMovie[number]} loop muted autoPlay />
            <div className="border_video"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Champion;
