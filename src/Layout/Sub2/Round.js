import React, { useState } from "react";
import "./Round.css";
function Round() {
  const [clickImage, setClickImage] = useState(0);
  const [className, setClassName] = useState("trans0");
  const roundFields = ["소환사의 협곡", "무작위 총력전", "전략적 팀 전투"];
  console.log(clickImage);
  const RoundVideo = [
    "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt04d1a8eb899e9dd4/5d87c234c7fab32df76ddee5/summonersrift.mp4",
    "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4",
    "https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt358cbfdb47618c25/5d87c2345b3acf6e5c6efa5e/teamfighttactics.mp4",
  ];
  const backImages = [
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt09b786139c8ce289/5d87c2420ca4b562bfff0abe/summonersrift.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta1f5513b0207fc88/5d87c2428dbc4162c496928b/howlingabyss.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7bb04c5fde905d4b/5e17889f9bcbce578d63ee51/teamfighttactics.jpg",
  ];

  const backGround = [
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc28d43095579c8b5/5d87c24e8d8a3163705e3070/summonersrift.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt13186c22cf0a2f30/5d87c24e3166f22df2ab8dc4/howlingabyss.jpg",
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltf930a7a2b83fff60/5e17887df980a27e5b76ac2f/teamfighttactics.jpg",
  ];

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
            <div className={clickImage == 0 ? "Round_text On " : "Round_text"}>
              <p>최고의 인기 게임 모드</p>
              <p>
                공격로에서 상대를 격파하고 5:5 팀 전투에 뛰어들어 적 넥서스를
                파괴해 보세요.
              </p>
            </div>
            <div className={clickImage == 1 ? "Round_text On " : "Round_text"}>
              <p>모두 무작위, 단일 공격로</p>
              <p>
                얼어붙은 다리 위에서 펼쳐지는 박진감 넘치는 5:5 게임 모드입니다.
                무작위 챔피언으로 팀을 구성해 적의 넥서스를 파괴해 보세요.
              </p>
            </div>
            <div className={clickImage == 2 ? "Round_text On " : "Round_text"}>
              <p>8인 난투전</p>
              <p>
                챔피언들로 전략적인 팀을 구성해 결투장으로 진격시키세요. 총
                7명의 상대와 겨루어 끝까지 살아남아야 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Round;