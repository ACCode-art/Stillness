import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState(0.99);
  const changeVolume = (event, newValue) => {
    setValue(newValue);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const [info, setInfo] = useState("");

  const [songTitle, setSongtitle] = useState("");

  const [duration, setDuration] = useState(0);

  const [tyme, setTyme] = useState(0);

  // play functionality

  const currentTrack = new Audio(info);

  function play() {
    currentTrack.volume = 1;

    currentTrack.play();
  }

  function hello() {
    // setDuration(currentTrack.duration / 60);
    console.log("hello hayley");
  }

  function pause() {
    currentTrack.volume = 1;

    currentTrack.pause();
  }
  console.log(duration);
  return (
    <Router>
      <div className="app">
        <Header
          value={value}
          changeVolume={changeVolume}
          setValue={setValue}
          info={info}
          pause={pause}
        />
        <Switch>
          <Route path="/" exact>
            <Main
              value={value}
              setInfo={setInfo}
              setIsPlaying={setIsPlaying}
              play={play}
            />
          </Route>
          <Route path="/player" exact>
            <Player play={play} pause={pause} tyme={tyme} hello={hello} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
