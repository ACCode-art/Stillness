import {
  ArrowBack,
  PauseCircleFilledOutlined,
  PlayCircleOutlineRounded,
} from "@material-ui/icons";
import React from "react";
import "./Player.css";
import { Link } from "react-router-dom";
import { Slider } from "@material-ui/core";

function Player({ play, pause, tyme, hello }) {
  // path from player in track component

  return (
    <div className="player">
      <div className="player__back">
        <Link to="/">
          <ArrowBack onClick={pause} />
        </Link>
      </div>
      <div className="player__controls">
        <div className="player__controlsTop">
          <PlayCircleOutlineRounded
            onClick={function (event) {
              play();
              hello();
            }}
          />
          <PauseCircleFilledOutlined onClick={pause} />
        </div>
        <div className="player__controlsBottom">
          <Slider />
        </div>
        <p>{tyme * 100}%</p>
      </div>
    </div>
  );
}

export default Player;
