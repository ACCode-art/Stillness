import React from "react";
import "./Main.css";
import Track from "./Track";
import From from "../backgrounds/from.jpg";
import Music from "../music/sitg.mp3";
import Red from "../music/Red is.mp3";
import Green from "../music/green.mp3";
import Lost from "../music/Lost In The City.mp3";
import Calls from "../music/9 Missed Calls.mp3";
import Departure from "../music/Departure.mp3";
import Garage from "../music/Garage Flowers.mp3";
import Shirt from "../music/Your Faviourite Shirt.mp3";
import Video from "../backgrounds/hello.mp4";

function Main({ value, setInfo, setIsPlaying, play }) {
  const infos = [
    {
      key: 1,
      title: "Soundscape 1",
      length: "30mins",
      background: From,
      src: Music,
    },
    {
      key: 2,
      title: "Soundscape 2",
      length: "42mins",
      background:
        "https://images.unsplash.com/photo-1574732040274-b19191964908?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      src: Red,
    },
    {
      key: 3,
      title: "Soundscape 3",
      length: "22mins",
      background:
        "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      src: Green,
    },
    {
      key: 4,
      title: "Lost In The City",
      length: "4mins",
      background:
        "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      src: Lost,
    },
    {
      key: 5,
      title: "9 Missed Calls",
      length: "4mins",
      background:
        "https://images.unsplash.com/photo-1609407773578-bb62b921be84?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      src: Calls,
    },
    {
      key: 6,
      title: "Departure",
      length: "4mins",
      background:
        "https://images.unsplash.com/photo-1517066843891-c08ec1576f16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
      src: Departure,
    },
    {
      key: 7,
      title: "Garage Flowers",
      length: "4mins",
      background:
        "https://images.unsplash.com/photo-1432634372475-07b399e372ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
      src: Garage,
    },
    {
      key: 8,
      title: "Your Favourite Shirt",
      length: "3mins",
      background:
        "https://images.unsplash.com/photo-1531169509526-f8f1fdaa4a67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      src: Shirt,
    },
  ];

  return (
    <div className="main">
      <video src={Video} autoPlay loop muted></video>
      <h2>Explore Music...</h2>
      <div className="main__container">
        {infos.map((info) => (
          <Track
            title={info.title}
            length={info.length}
            background={info.background}
            src={info.src}
            key={info.key}
            value={value}
            setInfo={setInfo}
            setIsPlaying={setIsPlaying}
            play={play}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
