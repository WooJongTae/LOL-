import "./MobileBanner.css";
function MobileBanner() {
  // "/images/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
  return (
    <div className="Banner">
      <div className="inner">
        <video
          className="Banner_image"
          loop
          autoPlay
          muted
          src="https://www.leagueoflegends.com/static/hero-blurred-7572101a2ce5e003b66483b7fe5c5d36.webm"
        ></video>
        <div className="Banner_position">
          <div className="Logo_position">
            <img
              className="Logo"
              src={
                process.env.PUBLIC_URL +
                "/images/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png"
              }
              alt="logo"
            />
          </div>
          <div className="video_position">
            <div className="video_position_inner">
              <video
                className="Banner_image2"
                src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
                autoPlay
                loop
                muted
              ></video>
            </div>
          </div>
          {/* <div className="Banner_position_line"></div> */}
          <div className="play">
            <span>무료로 플레이하기</span>
            <div className="play_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBanner;
