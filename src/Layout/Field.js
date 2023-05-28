import React from "react";
import "./Field.css";

const Field = React.memo(() => {
  return (
    <div className="Field">
      <div className="Field_area">
        <div className="Field_position">
          <p className="position_play">플레이 방법</p>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/player-guide-map-1440-32575baa2f8d2b2bfd5cfd07e11d1361.png"
            }
            alt="imgs1"
          />
        </div>
      </div>
      <div className="Field_area" id="Field2">
        <div className="text">
          <p>전설의</p>
          <p>시작</p>
          <p>
            리그 오브 레전드가 처음이신가요? 가장 인기 있는 게임 모드를 간략히
            배워 보세요.
          </p>
          <div className="box_area">
            <div className="div_box">시작하기</div>
            <div className="div_box">무료로 플레이하기</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Field;
