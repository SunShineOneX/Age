import React from "react";
import "./Home.css";
function IntroImage() {
  return (
    <div>
      <img src={require("../assets/AGE.png")} />
      <div class="audio">
      <audio id="audio-src" src={require("../assets/got-intro.mp3")} controls="play" autoplay=""></audio>
      </div>
    </div>
  );
}

export default IntroImage;
