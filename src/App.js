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

  // play functionality

  const currentTrack = new Audio(info);

  function play() {
    currentTrack.volume = 1;
    console.log(
      `length of track: ${Math.ceil(currentTrack.duration / 100)} mins`
    );
    currentTrack.play();
  }
  function pause() {
    currentTrack.volume = 1;

    currentTrack.pause();
  }

  console.log(currentTrack);
  return (
    <Router>
      <div className="app">
        <Header
          value={value}
          changeVolume={changeVolume}
          setValue={setValue}
          info={info}
          play={play}
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
            <Player play={play} pause={pause} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
