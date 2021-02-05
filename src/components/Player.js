import {
  ArrowBack,
  PauseCircleFilledOutlined,
  PlayCircleOutlineRounded,
} from "@material-ui/icons";
import React from "react";
import "./Player.css";
import { Link } from "react-router-dom";

function Player({ play, pause }) {
  // path from player in track component

  return (
    <div className="player">
      <div className="player__back">
        <Link to="/">
          <ArrowBack />
        </Link>
      </div>
      <div className="player__controls">
        <PlayCircleOutlineRounded onClick={play} />
        <PauseCircleFilledOutlined onClick={pause} />
      </div>
    </div>
  );
}

export default Player;
