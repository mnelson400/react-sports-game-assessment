import React from "react";
import FHKimage from "./assets/images/fhk_logo.png";
import BHKimage from "./assets/images/bhk_logo.png";
import FHDimage from "./assets/images/fhd_logo.png";
import BHDimage from "./assets/images/bhd_logo.png";
import visitShoot from "./assets/images/basket_ball1.png";
import homeShoot from "./assets/images/basket_ball2.png";
import Game from "./components/game/Game";
import "./App.css";

function App(props) {
  const FHK = {
    name: "Front-Half Kenzie",
    logoSrc: FHKimage,
    shootButton: visitShoot,
  };

  const BHK = {
    name: "Back-Half Kenzie",
    logoSrc: BHKimage,
    shootButton: homeShoot,
  };

  const FHD = {
    name: "Front-Half Days",
    logoSrc: FHDimage,
    shootButton: visitShoot,
  };

  const BHD = {
    name: "Back-Half Days",
    logoSrc: BHDimage,
    shootButton: homeShoot,
  };

  return (
    <div className="App">
      <Game venue="Kenzie Stadium" homeTeam={FHK} visitingTeam={BHK} />
      <Game venue="Amazon Center" homeTeam={FHD} visitingTeam={BHD} />
    </div>
  );
}

export default App;
