import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [value, setValue] = useState(0.99);
  const changeVolume = (event, newValue) => {
    setValue(newValue);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const [info, setInfo] = useState("");

  console.log(isPlaying);

  return (
    <div className="app">
      <Header
        value={value}
        changeVolume={changeVolume}
        setValue={setValue}
        info={info}
      />
      <Main value={value} setInfo={setInfo} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
