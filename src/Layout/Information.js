import React from "react";
import "./Information.css";
function Information() {
  return (
    <div className="Information_container">
      <div className="position">
        <span>추천</span>
      </div>
      <div className="text_header">
        <h1>더 자세히</h1>
        <h4>알아보기</h4>
      </div>
      <div className="Information_img">
        <div>
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9c75fd93a4a85975/646bc39e168829409a6d62d0/msi-2023-bracket-2-Textless_Thumb.jpg?quality=90&width=1380" />
          <p>
            탑 5 플레이 | 브래킷 스테이지
            <br /> 2주차
          </p>
        </div>
        <div>
          <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0060849db5c9144a/62bdda094673394f64680347/00_Header_SG2.jpg?quality=90&width=1380" />
          <p>별 수호자 지난 이야기</p>
        </div>
      </div>
    </div>
  );
}

export default Information;
