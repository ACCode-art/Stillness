import { Pause, PlayArrowOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Track.css";

function Track({
  title,
  length,
  background,
  src,
  value,
  setInfo,
  setIsPlaying,
}) {
  let audio = new Audio(src);

  let volume = value / 100;

  console.log(`volume : ${volume}`);

  function playAudio() {
    audio.volume = volume;
    console.log(`length of track: ${Math.ceil(audio.duration / 100)} mins`);
    audio.play();

    let tyme = setInterval(() => {
      console.log(Math.ceil(audio.currentTime) / audio.duration);
    }, 1000);
  }
  function nowPlaying() {
    setInfo(title);
  }

  function stopAudio() {
    audio.pause();
    console.log("stop click");
  }

  function yes() {
    setIsPlaying(true);
  }

  return (
    <div
      className="track"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="track__info">
        <h2 onClick={yes}>{title}</h2>
        <p>{length}</p>
        <div className="track__infoButtons">
          <button onClick={playAudio}>
            <PlayArrowOutlined />
          </button>
          <button onClick={stopAudio}>
            <Pause />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Track;
