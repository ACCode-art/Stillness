import { PlayArrowOutlined, Stop } from "@material-ui/icons";
import React from "react";
import "./Track.css";

function Track({ title, length, background, src }) {
  let audio = new Audio(src);

  function playAudio() {
    console.log(src);
    audio.play();
  }
  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
  }

  return (
    <div
      className="track"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="track__info">
        <h2>{title}</h2>
        <p>{length}</p>
        <div className="track__infoButtons">
          <button onClick={playAudio}>
            <PlayArrowOutlined />
          </button>
          <button onClick={stopAudio}>
            <Stop />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Track;
