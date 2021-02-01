import React from "react";
import "./Main.css";
import Track from "./Track";
import From from "../backgrounds/from.jpg";
import Music from "../music/sitg.mp3";

function Main() {
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
      src: "./music/sitg.mp3",
    },
    {
      key: 3,
      title: "Soundscape 3",
      length: "22mins",
      background:
        "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      src: "/music/sitg.mp3",
    },
  ];
  return (
    <div className="main">
      {infos.map((info) => (
        <Track
          title={info.title}
          length={info.length}
          background={info.background}
          src={info.src}
          key={info.key}
        />
      ))}
    </div>
  );
}

export default Main;
