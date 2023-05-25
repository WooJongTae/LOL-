import React from "react";
import "./Round.css";
function Round() {
  return (
    <div className="Round">
      <span className="Game_mode">게임모드</span>
      <div className="Round_flex">
        <video
          className="Round_video"
          autoPlay
          muted
          loop
          src="https://assets.contentstack.io/v3/assets/blt731acb42bb3d1659/blt368bbe12c8917439/5d87c69c5b3acf6e5c6efa6a/howlingabyss.mp4"
        ></video>
        <div className="Round_sub_flex ">
          <div className="Round_img_1 On">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt09b786139c8ce289/5d87c2420ca4b562bfff0abe/summonersrift.jpg"
              alt="img-1"
            />
          </div>
          <div className="Round_img_2">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blta1f5513b0207fc88/5d87c2428dbc4162c496928b/howlingabyss.jpg"
              alt="img-2"
            />
          </div>
          <div className="Round_img_3">
            <img
              src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt7bb04c5fde905d4b/5e17889f9bcbce578d63ee51/teamfighttactics.jpg"
              alt="img-3"
            />
          </div>
        </div>
        <div>
          <div className={true ? "field On" : "field"}>소환사의 협곡</div>
          <div className={false ? "field On" : "field"}>무작위 총력전</div>
          <div className={false ? "field On" : "field"}>전략적 팀 전투</div>
        </div>
        <div>
          <div className={true ? "Round_text On " : "Round_text"}>
            <p>최고의 인기 게임 모드</p>
            <p>
              공격로에서 상대를 격파하고 5:5 팀 전투에 뛰어들어 적 넥서스를
              파괴해 보세요.
            </p>
          </div>
          <div className={false ? "Round_text " : "Round_text"}>
            <p>모두 무작위, 단일 공격로</p>
            <p>
              얼어붙은 다리 위에서 펼쳐지는 박진감 넘치는 5:5 게임 모드입니다.
              무작위 챔피언으로 팀을 구성해 적의 넥서스를 파괴해 보세요.
            </p>
          </div>
          <div className={false ? "Round_text " : "Round_text"}>
            <p>8인 난투전</p>
            <p>
              챔피언들로 전략적인 팀을 구성해 결투장으로 진격시키세요. 총 7명의
              상대와 겨루어 끝까지 살아남아야 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Round;
