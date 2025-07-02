import { useState } from "react";
import "./App.css";

// components
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";

// helpers
import initialGameState from "./helpers/initialGameState.js";

function App() {
  const [game, setGame] = useState(initialGameState());
console.log(game);

  return (
    <>
      <Header/>
      {game.status === "off" && <MainMenu game={game} setGame={setGame} />}
    </>
  );
}

export default App;

const ItemTypes = {
  BOX: "box",
};

function DraggableComponent() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name: "MyItem" },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: "lightblue",
        padding: "10px",
        width: "100px",
        textAlign: "center",
        cursor: "move",
      }}
    >
      Drag me
    </div>
  );
}

function DropTargetComponent({ onDropCustom }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item, monitor) => {
      onDropCustom(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: "150px",
        width: "150px",
        border: "2px dashed black",
        backgroundColor: isOver ? "lightgreen" : "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Drop here
    </div>
  );
}
