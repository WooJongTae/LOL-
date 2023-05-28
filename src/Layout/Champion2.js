import React, { useState } from "react";
import "./Champion2.css";
import { useEffect } from "react";
function Champion2() {
  const [Champion, setChampion] = useState(0);
  const ChampionColor = [
    "https://www.leagueoflegends.com/static/assassin-three-3b9f65b6c20d5779628f7a8b04b43819.png",
    "https://www.leagueoflegends.com/static/assassin-four-d763afcd430fe6194d5640d6bf2a5941.png",
    "https://www.leagueoflegends.com/static/assassin-two-3a0fb5383eca19a4bc9b3c53310380bf.png",
    "https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setChampion((prevCount) => (prevCount === 3 ? 0 : prevCount + 1));
      console.log(Champion);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
    <div className="Champion2">
      <span className="Champion2_skin">챔피언 스킨</span>
      <div>
        <div className="Champion2_center">
          <img className="img_main" src={ChampionColor[Champion]} alt="아" />
        </div>
        <div className="Champion_change">
          <p>개성있는</p>
          <h1>챔피언</h1>
          <p>스킨으로 좋아하는 챔피언의 외형을 변경해 보세요</p>
          <div class="button">지금 플레이하기</div>
        </div>
      </div>
    </div>
  );
}

export default Champion2;
