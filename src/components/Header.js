import { Avatar } from "@material-ui/core";
import { AirlineSeatFlat, Favorite, QueueMusic } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AirlineSeatFlat />
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
