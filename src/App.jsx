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
import calcActiveBoard from "./helpers/calcActiveBoard.js";
import calculateResult from "./helpers/calculateResult.js";

function App() {
  const [game, setGame] = useState(initialGameState());
	const activeBoard = calcActiveBoard(game.moves, game.moveIndex);
  const result = activeBoard ? calculateResult(activeBoard, game.moveIndex === 12) : 4;
	
  return (
    <>
      <Header gameOn={game.status === "on"}/>
      {game.status === "off" && <MainMenu game={game} setGame={setGame} />}
			{game.status === "select-mode" && (
        <SelectPlayMode game={game} setGame={setGame} />
      )}
			{game.status === "on" && <Game game={game} setGame={setGame} activeBoard={activeBoard} result={result}/>}
			{ result === 0 && <MuteFooter game={game} setGame={setGame}/>}
    </>
  );
}

export default App;