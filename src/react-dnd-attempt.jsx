import { useState } from "react";
import "./App.css";

// dnd-multi-backend": "^9.0.0",
//     "react-dnd": "^16.0.1",
//     "react-dnd-html5-backend": "^16.0.1",
//     "react-dnd-multi-backend": "^9.0.0",
//     "react-dnd-touch-backend

import { DndProvider, useDrag, useDrop } from "react-dnd";
// import MultiBackend from 'react-dnd-multi-backend';
// import MultiBackend, { HTML5toTouch } from 'dnd-multi-backend';
// import { HTML5toTouch } from 'dnd-multi-backend';
// import { MultiBackend} from "react-dnd-multi-backend";
// import { MultiBackend, HTML5toTouch } from "react-dnd-multi-backend";
// import { TouchBackend } from 'react-dnd-touch-backend'
// import { MultiBackend, HTML5toTouch } from 'react-dnd-multi-backend';
import { TouchBackend } from 'react-dnd-touch-backend'

function App() {
  const [count, setCount] = useState(0);


	const handleDrop = (item) => {
    console.log("Dropped item:", item);
    // 🔥 Your custom function logic here

  };

  return (
    <>
      <main>
        <h1>Hello World</h1>
        <p>{count}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
				<DndProvider backend={TouchBackend}>
				<DraggableComponent />
        <DropTargetComponent onDropCustom={handleDrop} />
				</DndProvider>
      </main>
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