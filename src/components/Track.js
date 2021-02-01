import React from "react";
import "./Track.css";

function Track({ title, length, background, src }) {
  let audio = new Audio({ src });

  function playAudio() {
    console.log(src);
    audio.play();
  }
  return (
    <div
      className="track"
      style={{
        backgroundImage: `url(${background})`,
      }}
      onClick={playAudio}
    >
      <div className="track__info">
        <h2>{title}</h2>
        <p>{length}</p>
      </div>
    </div>
  );
}

export default Track;
