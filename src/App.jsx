import { useState } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import SelectPlayMode from "./components/SelectPlayMode/index.jsx";
import Game from "./components/Game/index.jsx";
import MuteFooter from "./components/MuteFooter";

// helpers
import initialGameState from "./helpers/initialGameState.js";

function App() {
  const [game, setGame] = useState(initialGameState());
	
  return (
    <>
      <Header gameOn={game.status === "on"}/>
      {game.status === "off" && <MainMenu game={game} setGame={setGame} />}
			{game.status === "select-mode" && (
        <SelectPlayMode game={game} setGame={setGame} />
      )}
			{game.status === "on" && <Game game={game} setGame={setGame} />}
			<MuteFooter game={game} setGame={setGame}/>
    </>
  );
}

export default App;