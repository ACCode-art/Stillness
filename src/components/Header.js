import { Avatar, Slider } from "@material-ui/core";
import {
  AirlineSeatFlat,
  Favorite,
  QueueMusic,
  VolumeDown,
  VolumeUp,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [value, setValue] = useState(1);
  const changeVolume = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="header">
      <div className="header__left">
        <AirlineSeatFlat />
        <p>Stillness</p>
      </div>
      <div className="header__center">
        <VolumeDown className="header__centerVolumeLeft" />
        <Slider value={value} onChange={changeVolume} />
        <VolumeUp className="header__centerVolumeRight" />
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
