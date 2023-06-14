import React from "react";
import "./Main1.css";
import MainData from "./MainData";
function Main1() {
  const { mainLists } = MainData;
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
