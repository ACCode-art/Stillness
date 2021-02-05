import { Avatar, Slider } from "@material-ui/core";
import {
  AirlineSeatFlat,
  Favorite,
  MusicNote,
  PlayArrow,
  QueueMusic,
  Stop,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ value, setValue, changeVolume, info, play, pause }) {
  console.log(`this is the ${value}`);
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <AirlineSeatFlat onClick={pause} />
        </Link>
        <p>Stillness</p>
      </div>

      <div className="header__right">
        <QueueMusic />
        <Favorite />
        <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fheroespatches%2Fimage%2Fupload%2Fv1483417095%2Fhero%2Fthrall.jpg&f=1&nofb=1" />
      </div>
    </div>
  );
}

export default Header;
