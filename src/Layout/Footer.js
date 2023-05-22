import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer_service">
        <ul>
          <li>
            <a href="#">고객지원</a>
          </li>
          <li>
            <a href="#">학부모 전용 고객 센터</a>
          </li>
          <li>
            <a href="#">PC방</a>
          </li>
          <li>
            <a href="#">라이엇 모바일 컴패니언 앱 다운로드</a>
          </li>
        </ul>
      </div>
      <div className="Footer_icon">
        <ul>
          <li>
            <a href="#">
              <svg class="" viewBox="0 0 16.67 11.67">
                <title>youtube</title>
                <path d="M14.85.36a2.08 2.08 0 011.47 1.47 20.5 20.5 0 01.34 4 22.19 22.19 0 01-.34 4 2.1 2.1 0 01-1.47 1.47 51.13 51.13 0 01-6.52.34 48.46 48.46 0 01-6.52-.36A2.07 2.07 0 01.34 9.82a23.82 23.82 0 010-8A2.11 2.11 0 011.81.34a49.68 49.68 0 016.52-.35 48.31 48.31 0 016.52.37zm-3.84 5.48l-4.34 2.5v-5z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="" viewBox="0 0 13.26 13.3">
                <title>instagram</title>
                <path
                  d="M6.63 3.29a3.43 3.43 0 103.42 3.44 3.43 3.43 0 00-3.42-3.44zm0 5.65a2.22 2.22 0 112.22-2.22 2.21 2.21 0 01-2.22 2.22z"
                  fill="#fdfefe"
                  fill-rule="evenodd"
                ></path>

                <path
                  d="M6.63.05H3.88a5 5 0 00-1.62.31 3.31 3.31 0 00-1.18.77 3.31 3.31 0 00-.77 1.18 5.29 5.29 0 00-.35 1.62v5.5a5.22 5.22 0 00.35 1.62 3.35 3.35 0 00.77 1.19 3.42 3.42 0 001.18.76 4.75 4.75 0 001.62.31h5.5a4.75 4.75 0 001.58-.32 3.15 3.15 0 001.18-.76 3.35 3.35 0 00.82-1.18 5 5 0 00.31-1.61V3.93a5 5 0 00-.31-1.62 3.46 3.46 0 00-2-2A5 5 0 009.33.05a26.88 26.88 0 01-2.7 0zm0 1.2h2.69a3.78 3.78 0 011.24.23 2.21 2.21 0 011.27 1.27 3.67 3.67 0 01.23 1.23v5.39a3.78 3.78 0 01-.23 1.24 2.21 2.21 0 01-1.27 1.27 3.77 3.77 0 01-1.24.22H3.96a3.77 3.77 0 01-1.24-.22 2.21 2.21 0 01-1.27-1.27 3.78 3.78 0 01-.23-1.24V3.98a3.67 3.67 0 01.21-1.23A2.21 2.21 0 012.7 1.48a3.78 3.78 0 011.26-.23c.68.01.89 0 2.67 0z"
                  fill="#fdfefe"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="" viewBox="0 0 15 15">
                <title>facebook</title>
                <path d="M15 7.54A7.5 7.5 0 106.33 15V9.73h-1.9V7.54h1.9V5.91a2.65 2.65 0 012.83-3 12.09 12.09 0 011.68.14v1.86H9.9a1.09 1.09 0 00-1.23 1.18V7.5h2.08l-.33 2.19H8.67v5.27A7.54 7.54 0 0015 7.54z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="" viewBox="0 0 16.67 13.54">
                <title>twitter</title>
                <path d="M5.24 13.54a9.66 9.66 0 009.73-9.73v-.44a6.85 6.85 0 001.71-1.77 6.79 6.79 0 01-2 .54A3.45 3.45 0 0016.19.25a7.33 7.33 0 01-2.17.83 3.42 3.42 0 00-5.83 3.11 9.63 9.63 0 01-7-3.57 3.39 3.39 0 00-.37 2.49 3.43 3.43 0 001.43 2.08A3.5 3.5 0 01.7 4.76a3.4 3.4 0 002.74 3.35 3.34 3.34 0 01-1.54.06 3.41 3.41 0 001.21 1.7 3.48 3.48 0 002 .68 6.82 6.82 0 01-4.25 1.46 5.51 5.51 0 01-.81-.05 9.63 9.63 0 005.24 1.54"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg class="" viewBox="0 0 24 24">
                <title>reddit</title>
                <path
                  fill="#FFF"
                  d="M14.2 15.3c.1.1.1.2 0 .3-.5.5-1.2.7-2.2.7-1 0-1.8-.2-2.2-.7-.1-.1-.1-.2 0-.3.1-.1.2-.1.3 0 .4.4 1 .6 1.9.6.9 0 1.5-.2 1.9-.6h.3zm-3.4-2.4c0-.5-.4-.9-.9-.9s-.9.4-.9.9.4.9.9.9.9-.4.9-.9zM24 12c0 6.6-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0s12 5.4 12 12zm-5-.1c0-.9-.7-1.5-1.5-1.5-.4 0-.8.2-1.1.4-1.1-.7-2.5-1.1-4.1-1.2l.9-2.7 2.3.5c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3-.6-1.3-1.3-1.3c-.5 0-1 .3-1.2.8l-2.5-.6c-.1 0-.2 0-.3.1l-1 3c-1.7 0-3.2.5-4.3 1.2-.3-.3-.6-.4-1-.4-.8.1-1.5.8-1.5 1.7 0 .6.3 1.1.8 1.3 0 .2-.1.3-.1.5 0 2.3 2.8 4.1 6.3 4.1s6.3-1.9 6.3-4.1v-.5c.4-.2.7-.7.7-1.3zm-4.9.1c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c.1-.5-.4-.9-.9-.9z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="Footer_logo">
        <svg width="99" height="32" class="" viewBox="0 0 587.93 165">
          <title> Riot Games </title>
          <title>riotLogo-mobile21</title>
          <path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path>
        </svg>
      </div>
      <div className="Footer_explain">
        <p>
          ™ & © 2023 Riot Games, Inc. League of Legends and all related logos,
          characters, names and distinctive
          <br /> likenesses thereof are exclusive property of Riot Games, Inc.
          All Rights Reserved.
        </p>
        <p>
          라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층
          (삼성동, 파르나스타워)
          <br />
          대표자 : 조혁진 | 대표전화 : 02-3454-1560 | FAX : 02-3454-1565
          사업자등록번호 : 120-87-68488
          <br />
          통신판매업신고 : 2011-서울강남-02718
        </p>
      </div>
      <div className="Footer_explain2">
        <ul>
          <li>
            <a href="#">서비스 약관</a>
          </li>
          <li>
            <a href="#">개인정보 처리방침</a>
          </li>
          <li>
            <a href="#">서비스 상태</a>
          </li>
          <li>
            <a href="#">게임시간 선택제</a>
          </li>
          <li>
            <a href="#">사회공헌</a>
          </li>
          <li>
            <a href="#">사업자정보확인</a>
          </li>
          <li>
            <a href="#">쿠키 설정</a>
          </li>
        </ul>
      </div>
      <div className="Footer_img">
        <div>
          <a href="#">
            <img
              src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt347042469caad5ee/5e8639455bca9a639e7dd8c1/kr-rating.png?&amp;height=100&amp;disable=upscale"
              alt="Game Rating"
              title="Game Rating"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
