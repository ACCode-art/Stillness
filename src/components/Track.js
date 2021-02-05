import { Pause, PlayArrowOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Track.css";
import { Link } from "react-router-dom";

function Track({
  title,
  length,
  background,
  src,
  value,
  setInfo,
  setIsPlaying,
  play,
}) {
  let audio = new Audio(src);

  let volume = value / 100;

  function nowPlaying() {
    setInfo(src);
    console.log(src);
  }

  function yes() {
    setIsPlaying(true);
  }

  // path to player

  return (
    <Link to="/player">
      <div
        className="track"
        style={{
          backgroundImage: `url(${background})`,
        }}
        onMouseEnter={nowPlaying}
      >
        <p>{title}</p>
      </div>
    </Link>
  );
}

export default Track;
