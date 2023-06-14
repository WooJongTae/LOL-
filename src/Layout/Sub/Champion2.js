import React, { useState } from "react";
import "./Champion2.css";
import { useEffect } from "react";
import SubData from "./SubData";
function Champion2() {
  const { ChampionColor } = SubData;
  const [Champion, setChampion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChampion((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  // 함수등록 함수실행
  // useEffect(() => {
  //   const imageTime = setInterval(() => {
  //     setChampion((prevChampion) => {
  //       console.log(Champion);
  //       if (prevChampion === 3) {
  //         return 0;
  //       } else {
  //         return prevChampion + 1;
  //       }
  //     });
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   const imageTime = setInterval(() => {
  //     if (Champion === 3) {
  //       setChampion(0);
  //       console.log(Champion);
  //     }
  //     setChampion((prev) => prev + 1);

  //     console.log(Champion);
  //   }, 2000);
  // }, [Champion]);

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const imageTime = setInterval(() => {
  //     setChampion((prevChampion) => (prevChampion + 1) % ChampionColor.length);
  //   }, 1000);

  //   return () => {
  //     clearInterval(imageTime);
  //   };
  // }, []);

  return (
    <div className="Mobile_Champion2">
      <div className="inner">
        <span className="Champion2_skin">챔피언 스킨</span>
        <div>
          <div className="Champion2_center">
            <img className="img_main" src={ChampionColor[Champion]} alt="아" />
          </div>
          <div className="Mobile_Champion_change">
            <p>개성있는</p>
            <h1>챔피언</h1>
            <p>스킨으로 좋아하는 챔피언의 외형을 변경해 보세요</p>
            <div class="Mobile_button">지금 플레이하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Champion2;
