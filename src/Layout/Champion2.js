import React from "react";
import "./Champion2.css";
function Champion2() {
  return (
    <div className="Champion2">
      <span className="Champion2_skin">챔피언 스킨</span>
      <div>
        <div className="Champion2_center">
          <img
            className="img_main"
            src="/images/assassin-two-3a0fb5383eca19a4bc9b3c53310380bf.png"
            alt="아"
          />
        </div>
        <div className="Champion_change">
          <p>개성있는</p>
          <h1>챔피언</h1>
          <p>스킨으로 좋아하는 챔피언의 외형을 변경해 보세요</p>
          <div class="button bottom">BUTTON</div>
        </div>
      </div>
    </div>
  );
}

export default Champion2;
