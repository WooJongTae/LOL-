import React, { useState } from "react";
import "./MobileChampion.css";
import SubData from "./SubData";

function MobileChampion() {
  // const ArrayImage = [
  //   "https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
  //   "https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png",
  //   "https://www.leagueoflegends.com/static/mage-3bfa6dfe620adafe5e539c2e470f4acc.png",
  //   "https://www.leagueoflegends.com/static/marksman-b339ed8fd7e04ff2c3fca022c5d299fb.png",
  //   "https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png",
  //   "https://www.leagueoflegends.com/static/tank-1245abc326bd98c567ab22659719a1a3.png",
  // ];
  const { ChampionName, ChampionEx, ArrayImages } = SubData;

  const [number, setNumber] = useState(0);

  const imageChange = (num) => {
    setNumber(num);
  };
  return (
    <div className="MobileChampion">
      <div className="inner">
        <div className="Champion_container">
          <div className="Mobile_Champion_text">
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
          <div className="Mobile_Champion_img">
            <div className="Mobile_Champion_ul">
              <ul>
                {ChampionName.map((name, i) => (
                  <li onClick={() => imageChange(i)}>
                    <span
                      className={
                        number === i
                          ? "mobile_champion_name_on"
                          : "mobile_champion_name"
                      }
                    >
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              className="Mobile_img_screen"
              src={ArrayImages[number]}
              alt="imgs"
            />
            <div className="Mobile_img_circle"></div>
          </div>
          <div className="Mobile_img_screen_name">
            {/* 여기 하드코딩 const로 배열만들어서넣기 이미지도 */}
            <h1 className="MobileChampionName">{ChampionName[number]}</h1>
            <br />
            <p className="MobileChampionNameEx">{ChampionEx[number]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileChampion;
