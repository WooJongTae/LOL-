import React, { useState } from "react";
import "./MobileChampion.css";
function MobileChampion() {
  const ArrayImage = [
    "https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    "https://www.leagueoflegends.com/static/fighter-7a08920b696ecdb673edeeae1d3c616e.png",
    "https://www.leagueoflegends.com/static/mage-3bfa6dfe620adafe5e539c2e470f4acc.png",
    "https://www.leagueoflegends.com/static/marksman-b339ed8fd7e04ff2c3fca022c5d299fb.png",
    "https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png",
    "https://www.leagueoflegends.com/static/tank-1245abc326bd98c567ab22659719a1a3.png",
  ];

  const ChampionName = [
    "아칼리",
    "야스오",
    "럭스",
    "징크스",
    "쓰레쉬",
    "레오나",
  ];

  const ChampionEx = [
    "섬기는 이 없는 암살자",
    "용서받지 못한 자",
    "광명의 소녀",
    "난폭한 말괄량이",
    "지옥의 간수",
    "여명의 빛",
  ];
  const [number, setNumber] = useState(0);

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
            <div className="Champion_ul">
              <ul>
                <li onClick={() => imageChange(0)}>
                  <span>암살자</span>
                </li>
                <li onClick={() => imageChange(1)}>
                  <span>전사</span>
                  <div className={1 === number ? "circle On" : "circle"}></div>
                </li>
                <li onClick={() => imageChange(2)}>
                  <span>마법사</span>
                  <div className={2 === number ? "circle On" : "circle"}></div>
                </li>
                <li onClick={() => imageChange(3)}>
                  <span>원거리 딜러</span>
                  <div className={3 === number ? "circle On" : "circle"}></div>
                </li>
                <li onClick={() => imageChange(4)}>
                  <span>서포터</span>
                  <div className={4 === number ? "circle On" : "circle"}></div>
                </li>
                <li onClick={() => imageChange(5)}>
                  <span>탱커</span>
                  <div className={5 === number ? "circle On" : "circle"}></div>
                </li>
              </ul>
            </div>
            <img className="img_screen" src={ArrayImage[number]} alt="imgs" />
            <div className="img_circle"></div>
          </div>
          <div className="img_screen_name">
            {/* 여기 하드코딩 const로 배열만들어서넣기 이미지도 */}
            <h1>{ChampionName[number]}</h1>
            <br />
            <p>{ChampionEx[number]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileChampion;
