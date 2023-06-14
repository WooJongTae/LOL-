import React, { useState } from "react";
import "./Header.css";
import name from "./svg/name";
function Header() {
  const headerNameLists = [
    [
      "리그 오브 레전드",
      "발로란트",
      "전략적 팀 전투",
      "레전드 오브 룬테라",
      "리그 오브 레전드:와이들 리프트",
    ],
    [
      "시간/교차",
      "마법공학 아수라장",
      "마력 척결관",
      "몰락한 왕",
      "누누의 노래",
      "RIOT FORGE의 게임",
    ],
    ["리그 오브 레전드 e스포츠", "발로란트 e스포츠"],
    ["엔터테인먼트", "아케인", "유니버스", "라이엇 게임즈 뮤직"],
    ["라이엇 게임즈", "라이엇 스토어", "라이엇 모바일", "라이엇 고객지원"],
  ];
  const svg1 = name.svg1;
  const [logo, setLogo] = useState(false);
  const [onSearch, setOnSearch] = useState(false);
  const [isHovered, setIsHovered] = useState(0);

  const handleMouseEnter = (num) => {
    setIsHovered(num);
  };

  const handleMouseLeave = (num) => {
    setIsHovered(num);
  };

  function logoClick() {
    setLogo(!logo);
  }

  function SearchTrue() {
    console.log(onSearch);
    setOnSearch(true);
  }

  function SearchFalse(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(onSearch);
    setOnSearch(false);
  }
  // 돋보기 앱솔하고 라이트0하기
  return logo ? (
    <div className="Header_container">
      <div className="Header_on">
        <div className="Header_on_flex">
          <div className="Header_on_flex_div" onClick={logoClick}>
            <svg
              width="85"
              height="27"
              class="_32ANSIZormifc9Vc6VVwrx"
              viewBox="0 0 587.93 165"
              onClick={logoClick}
            >
              <title>mainLogoRiotFist21</title>
              <path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path>
            </svg>
            <svg
              className="Header_flex_button VgEtjftuMCXm2-Qtk5J7P app-switcher-riot-logo-up"
              viewBox="0 0 8 5"
            >
              <title>mainMenuUpNonHoverNonBg</title>
              <path d="M7.3 2.9L4.7.3c-.4-.4-1-.4-1.4 0L.7 2.9c-.6.6-.2 1.7.7 1.7h5.2c.9 0 1.3-1.1.7-1.7z"></path>
            </svg>
          </div>
          <div className="Header_delete" onClick={logoClick}>
            X
          </div>
        </div>
      </div>
      <div className="list">
        <div className="list_margin">
          <div className="Game_list">
            <div>
              <p>게임</p>
              <ul>
                {headerNameLists[0].map((headerNameList) => (
                  <li>
                    <a href="#">{headerNameList}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div>
                <p>RIOT FORGE</p>
                <ul>
                  {headerNameLists[1].map((headerNameList) => (
                    <li>
                      <a href="#">{headerNameList}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>E스포츠</p>
                <ul>
                  {headerNameLists[2].map((headerNameList) => (
                    <li>
                      <a href="#">{headerNameList}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p>엔터테인먼트</p>
                <ul>
                  {headerNameLists[3].map((headerNameList) => (
                    <li>
                      <a href="#">{headerNameList}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p>기타</p>
                <ul>
                  {headerNameLists[4].map((headerNameList) => (
                    <li>
                      <a href="#">{headerNameList}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Game_image">
          <div>
            <img
              src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt127ae5655236be81/645553aeac434f394d6c918d/Conv_RiotBar-Promo-Card-Image-660x428.jpg??&format=pjpg&quality=85"
              alt="이미지1"
            />
            <p>시간/교차: 리그 오브 레전드 이야기™</p>
          </div>
          <div>
            <img
              src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt7c7ad2e8705d9d21/6402a0e894e69a2df810fdf5/030723_Mageseeker_RiotBar_Promo_Card.jpg??&format=pjpg&quality=85"
              alt="이미지2"
            />
            <p>
              마법의 힘을 해방하세요. 액션 RPG에서 사일러스를 플레이해
              데마시아를 폭정으로부터 구원하세요. 지금 플레이하세요!
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="Header">
      <div className="Header_flex">
        <svg
          width="85"
          height="27"
          class="_32ANSIZormifc9Vc6VVwrx"
          viewBox="0 0 587.93 165"
          onClick={logoClick}
        >
          <title>mainLogoRiotFist21</title>
          <path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path>
        </svg>
        <svg class="Header_flex_button" viewBox="0 0 8 5">
          <title>mainMenuDownNonHover</title>
          <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
        </svg>
      </div>
      <div className="Header_logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="league"
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
        >
          <g>
            <path
              d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z"
              fill="#C28F2C"
            ></path>{" "}
            <path
              d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z"
              fill="#C28F2C"
            ></path>
          </g>
        </svg>
        <div className="Header_text">
          <div
            className="Header_text_area"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <p>
              게임정보
              <svg
                width="10"
                height="5"
                class="_16evwnRjE9JvfFbOuuC-EF _1lBECl9xmO0n7vnCvf6_dD"
                viewBox="0 0 8 5"
              >
                <title>mainNavArrowDown</title>
                <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
              </svg>
            </p>
            <div
              className="Header_div"
              style={{ display: 1 == isHovered ? "block" : "none" }}
            >
              <ul>
                <li>기본정보</li>
                <li>챔피언</li>
                <li>패치 노트</li>
              </ul>
            </div>
          </div>
          <div
            className="Header_text_area"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <p>
              새소식
              <svg
                width="10"
                height="5"
                class="_16evwnRjE9JvfFbOuuC-EF _1lBECl9xmO0n7vnCvf6_dD"
                viewBox="0 0 8 5"
              >
                <title>mainNavArrowDown</title>
                <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
              </svg>
            </p>
            <div
              className="Header_div"
              style={{ display: 2 == isHovered ? "block" : "none" }}
            >
              <ul>
                <li>전체</li>
                <li>게임 업데이트</li>
                <li>공지</li>
                <li>개발자 블로그</li>
                <li>세계관</li>
                <li>미디어</li>
                <li>라이엇 스토어</li>
                <li>E스포츠</li>
                <li>라이엇 게임즈</li>
                <li>커뮤니티</li>
                <li>티모 문화유산 원정대</li>
              </ul>
            </div>
          </div>
          <div className="Header_text_area">
            <p>다운로드</p>
            <ul>
              <li></li>
            </ul>
            {/* hover때보이게 */}
          </div>
          <div className="Header_text_area">
            <p>
              E스포츠
              <span class="_2XlrdzwlJjmQ0YwnWigGtH desktop-link-item-icon-linkout">
                <svg width="7" height="7" class="" viewBox="0 0 16 16">
                  <title>mainNavLinkOut</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
          <div
            className="Header_text_area"
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <p>
              이벤트
              <svg
                width="10"
                height="5"
                class="_16evwnRjE9JvfFbOuuC-EF _1lBECl9xmO0n7vnCvf6_dD"
                viewBox="0 0 8 5"
              >
                <title>mainNavArrowDown</title>
                <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
              </svg>
              <div
                className="Header_div"
                style={{ display: 5 == isHovered ? "block" : "none" }}
              >
                <ul>
                  <li>
                    2022 DRX 스킨 출시 기념 이벤트
                    <svg width="7" height="7" class="" viewBox="0 0 16 16">
                      <title>mainNavLinkOut</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                      ></path>
                    </svg>
                  </li>
                  <li>
                    5월에는 PC방에서 더 꿀잼!
                    <svg width="7" height="7" class="" viewBox="0 0 16 16">
                      <title>mainNavLinkOut</title>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </p>
          </div>
          <div
            className="Header_text_area"
            onMouseEnter={() => handleMouseEnter(6)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <p>
              알아보기
              <svg
                width="10"
                height="5"
                class="_16evwnRjE9JvfFbOuuC-EF _1lBECl9xmO0n7vnCvf6_dD"
                viewBox="0 0 8 5"
              >
                <title>mainNavArrowDown</title>
                <path d="M.707 1.707l2.586 2.586a1 1 0 001.414 0l2.586-2.586C7.923 1.077 7.477 0 6.586 0H1.414C.524 0 .077 1.077.707 1.707z"></path>
              </svg>
              <div
                className="Header_div"
                style={{ display: 6 == isHovered ? "block" : "none" }}
              >
                <ul>
                  <li>LOL 디스플레이</li>
                  <li>모바일 상점</li>
                  <li>라이엇 모바일</li>
                  <li>아바타 생성기</li>
                </ul>
              </div>
            </p>
          </div>
          <div className="Header_text_area">
            <p>
              유니버스
              <span class="_2XlrdzwlJjmQ0YwnWigGtH desktop-link-item-icon-linkout">
                <svg width="7" height="7" class="" viewBox="0 0 16 16">
                  <title>mainNavLinkOut</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
          <div className="Header_text_area">
            <p>
              라이엇 스토어
              <span class="_2XlrdzwlJjmQ0YwnWigGtH desktop-link-item-icon-linkout">
                <svg width="7" height="7" class="" viewBox="0 0 16 16">
                  <title>mainNavLinkOut</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                  ></path>
                </svg>
              </span>
            </p>
          </div>
          <div
            className="Header_text_area"
            onMouseEnter={() => handleMouseEnter(9)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <p>
              더보기
              <span class="_2XlrdzwlJjmQ0YwnWigGtH desktop-link-item-icon-linkout">
                <svg width="7" height="7" class="" viewBox="0 0 16 16">
                  <title>mainNavLinkOut</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 00-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158z"
                  ></path>
                </svg>
              </span>
              <div
                className="Header_div"
                style={{ display: 9 == isHovered ? "block" : "none" }}
              >
                <ul>
                  <li>라이엇 스토어</li>
                </ul>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className="Header_right">
        <div className="Header_right_div" onClick={SearchTrue}>
          <form action="POST">
            <input className={onSearch ? "inputOn" : ""} />
            {onSearch ? (
              <button
                type="button"
                className="Cancel"
                onClick={(e) => {
                  SearchFalse(e);
                }}
              >
                X
              </button>
            ) : (
              ""
            )}
            <svg
              viewBox="0 0 19 20"
              className={onSearch ? "Search inputOn" : "Search"}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 18.6l-5.2-5.2C15.2 12 16 10.1 16 8c0-4.4-3.6-8-8-8S0 3.6 0 8s3.6 8 8 8c1.6 0 3.1-.5 4.3-1.3l5.3 5.3 1.4-1.4zM2 8c0-3.3 2.7-6 6-6 1.6 0 3.1.6 4.2 1.8C13.4 4.9 14 6.4 14 8s-.6 3.1-1.8 4.2C11.1 13.4 9.6 14 8 14c-3.3 0-6-2.7-6-6z"
              ></path>
            </svg>
          </form>
        </div>
        <div className="GlobeIcon">
          <a href="#">
            <svg width="14" height="14" class="" viewBox="0 0 16 16">
              <title>globeIcon</title>
              <path
                d="M7.992 0C3.576 0 0 3.584 0 8s3.576 8 7.992 8C12.416 16 16 12.416 16 8s-3.584-8-8.008-8zm5.544 4.8h-2.36c-.256-1-.624-1.96-1.104-2.848A6.424 6.424 0 0113.536 4.8zM8 1.632A11.27 11.27 0 019.528 4.8H6.472A11.27 11.27 0 018 1.632zM1.808 9.6A6.594 6.594 0 011.6 8c0-.552.08-1.088.208-1.6h2.704A13.212 13.212 0 004.4 8c0 .544.048 1.072.112 1.6H1.808zm.656 1.6h2.36c.256 1 .624 1.96 1.104 2.848A6.39 6.39 0 012.464 11.2zm2.36-6.4h-2.36a6.39 6.39 0 013.464-2.848A12.52 12.52 0 004.824 4.8zM8 14.368A11.27 11.27 0 016.472 11.2h3.056A11.27 11.27 0 018 14.368zM9.872 9.6H6.128A11.77 11.77 0 016 8c0-.544.056-1.08.128-1.6h3.744C9.944 6.92 10 7.456 10 8s-.056 1.072-.128 1.6zm.2 4.448a12.52 12.52 0 001.104-2.848h2.36a6.424 6.424 0 01-3.464 2.848zM11.488 9.6c.064-.528.112-1.056.112-1.6s-.048-1.072-.112-1.6h2.704c.128.512.208 1.048.208 1.6s-.08 1.088-.208 1.6h-2.704z"
                fill="#E8E8E8"
              ></path>
            </svg>
          </a>
        </div>
        <div className="Header_information">
          <div className="Login">로그인</div>
          <div className="Register">회원가입</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
