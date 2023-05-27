import React, { useState } from "react";
import "./Social.css";

function Social() {
  const [image, setImage] = useState(0);
  const ArrayImage = [
    "	https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    "https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    "	https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    "	https://www.leagueoflegends.com/static/assassin-d64d3ffdda15e1eed637aefe6a2c7fee.png",
    "https://www.leagueoflegends.com/static/support-d63ae08baf517425864ddc020a5871d5.png",
    "	https://www.leagueoflegends.com/static/tank-1245abc326bd98c567ab22659719a1a3.png",
  ];

  const ArrayMovie = [
    "https://www.leagueoflegends.com/static/assassin-8bb741f0fe6d55c0844ede6e3fe1b5ad.webm",
    "https://www.leagueoflegends.com/static/fighter-56f0e81707c5104dd35ee7a2b1d8e72a.webm",
    "https://www.leagueoflegends.com/static/mage-8beae0975cae649908a0d539435306db.webm",
    "https://www.leagueoflegends.com/static/marksman-d7367883b0979249f9309c03efdd23d9.webm",
    "https://www.leagueoflegends.com/static/support-10b76f08757ee3ce7169c344108b457b.webm",
    "https://www.leagueoflegends.com/static/tank-7bc533fcd17c3eca769764141020debb.webm",
  ];
  return (
    <div className="Socials">
      <div className="area">
        <div className="area_flex">
          <div>
            <h1>공식 소셜 채널 살펴보기 ㅣ</h1>
          </div>
          <div className="Socials_img">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8.86 17.16"
                class="style__SocialIcon-nyu1wb-5-s gJEymj"
              >
                <path
                  class="st0"
                  d="M2.62 17.16v-.31-7.52-.1H.11C0 9.24 0 9.24 0 9.13V6.31c0-.09.03-.11.11-.11h2.51v-.09c0-.78 0-1.56.01-2.34.01-.63.13-1.24.4-1.81C3.4 1.2 3.99.64 4.78.32 5.31.09 5.87-.01 6.44 0c.65.01 1.31.04 1.96.06.12 0 .24.03.36.03.07 0 .09.03.09.1v2.54c0 .08-.02.1-.1.1-.5 0-.99-.01-1.49 0-.22.01-.45.04-.67.09-.43.09-.68.37-.76.8-.04.16-.06.34-.06.51-.01.64 0 1.27 0 1.91v.07h2.86c.12 0 .12 0 .11.11-.06.5-.13 1-.2 1.5l-.15 1.26c-.02.16-.02.16-.18.16H5.77V17.16H2.62z"
                ></path>
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40.47 40.47"
                class="style__SocialIcon-nyu1wb-5-Component hdGuQD"
              >
                <path
                  class="st0"
                  d="M33.47 9.43c0-1.35-1.09-2.43-2.43-2.43s-2.43 1.09-2.43 2.43 1.09 2.43 2.43 2.43 2.43-1.09 2.43-2.43"
                ></path>
                <path
                  class="st0"
                  d="M40.35 11.89c-.1-2.16-.44-3.63-.94-4.91a9.817 9.817 0 00-2.33-3.59c-1.12-1.12-2.25-1.81-3.58-2.33-1.29-.5-2.76-.84-4.91-.94C26.42.02 25.73 0 20.23 0c-5.49 0-6.19.02-8.34.12-2.15.1-3.62.44-4.91.94-1.33.52-2.46 1.21-3.58 2.33-1.13 1.13-1.82 2.26-2.34 3.59-.5 1.28-.84 2.76-.94 4.91-.1 2.16-.12 2.85-.12 8.35 0 5.49.02 6.18.12 8.34.1 2.15.44 3.62.94 4.91.52 1.33 1.21 2.46 2.34 3.58a9.989 9.989 0 003.58 2.34c1.29.5 2.76.84 4.91.94 2.16.1 2.85.12 8.34.12 5.5 0 6.19-.02 8.34-.12 2.16-.1 3.62-.44 4.91-.94 1.33-.52 2.46-1.21 3.58-2.34 1.13-1.12 1.82-2.26 2.33-3.58.5-1.29.84-2.76.94-4.91.1-2.16.12-2.85.12-8.34.02-5.5 0-6.19-.1-8.35zM36.7 28.41c-.09 1.97-.42 3.04-.69 3.76-.37.94-.81 1.62-1.52 2.33-.7.71-1.38 1.15-2.32 1.51-.71.28-1.79.61-3.76.7-2.13.09-2.77.11-8.17.11s-6.04-.02-8.17-.11c-1.97-.09-3.04-.42-3.76-.7-.95-.36-1.62-.8-2.33-1.51s-1.15-1.38-1.51-2.33c-.27-.71-.61-1.78-.69-3.76-.1-2.13-.12-2.78-.12-8.17 0-5.41.02-6.05.12-8.18.09-1.97.42-3.04.69-3.76.36-.94.8-1.61 1.51-2.32.7-.71 1.37-1.15 2.32-1.52.71-.28 1.78-.6 3.76-.7 2.13-.09 2.77-.12 8.17-.12 5.41 0 6.04.02 8.17.12 1.97.09 3.05.42 3.76.7.94.37 1.62.81 2.32 1.51.71.71 1.15 1.38 1.52 2.32.27.72.6 1.79.69 3.76.1 2.13.12 2.77.12 8.18.02 5.41-.01 6.05-.11 8.18z"
                ></path>
                <path
                  class="st0"
                  d="M20.23 9.84c-5.74 0-10.39 4.66-10.39 10.4 0 5.73 4.65 10.39 10.39 10.39s10.39-4.65 10.39-10.39-4.65-10.4-10.39-10.4zm0 17.14c-3.72 0-6.74-3.02-6.74-6.74 0-3.73 3.02-6.75 6.74-6.75s6.75 3.02 6.75 6.75c0 3.72-3.02 6.74-6.75 6.74z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
