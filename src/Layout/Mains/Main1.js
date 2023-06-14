import React from "react";
import "./Main1.css";
function Main1() {
  const mainLists = [
    {
      src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1d186491a32f5edb/645c2455562ac16e655fafce/Snow-Moon-Morgana---Final.jpg?quality=90&crop=1%3A1&width=720",
      explainP: "게임 업데이트",
      explainH1: "13.10 패치 상점 소식",
      explainP2: "서리달 스킨들과 시간/교차 출시 기념 세트를 확인해보세요.",
    },
    {
      src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt968c4eac9bbbb90a/645ad96cebd99b5596ab88b9/TFT_MID823_Comms_ArticleBanner_CNMechaCG_1920x1080_v001_ALyu.jpg?quality=90&crop=1%3A1&width=720",
      explainP: "미디어",
      explainH1: "메카 프라임 제로 | 결투장 쇼케이스",
      explainP2: "기계 로봇을 꽉 붙잡으세요!",
    },
    {
      src: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1eeaac899d50c2da/64513e7b207f424ce6bf5216/TFT_MID823_Comms_ArticleBanner_TreasureTroves_1920x1080_v001_ALyu.jpg?quality=90&crop=1%3A1&width=720 720w, https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1eeaac899d50c2da/64513e7b207f424ce6bf5216/TFT_MID823_Comms_ArticleBanner_TreasureTroves_1920x1080_v001_ALyu.jpg?quality=90&crop=1%3A1&width=480 480w, https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1eeaac899d50c2da/64513e7b207f424ce6bf5216/TFT_MID823_Comms_ArticleBanner_TreasureTroves_1920x1080_v001_ALyu.jpg?quality=90&crop=1%3A1&width=240 240w",
      explainP: "개발자 블로그",
      explainH1: "전략적 팀 전투 보물 왕국 — 새로운 개인화 차원문!",
      explainP2:
        " 알은 가고 새것이 옵니다. 전략적 팀 전투의 새로운 전리품<br/>체계, 보물 왕국에 관한 핵심 정보를 전부 알려드립니다!",
    },
  ];
  return (
    <div className="position_main">
      <div className="Main">
        <div className="inner">
          <div className="container">
            <h3>주목할 만한 소식</h3>
            <div className="container_margin">
              {mainLists.map((mainList) => (
                <div className="part">
                  <div className="part_img">
                    <img src={mainList.src} />
                  </div>
                  <div className="explain">
                    <p>{mainList.explainP}</p>
                    <h1>{mainList.explainH1}</h1>
                    <p>{mainList.explainP2}</p>
                  </div>
                </div>
              ))}
              <p className="look">모두 보기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
