import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";

function Example() {
  const [parent, setParent] = useState(null);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent && <Draggable id="draggable">Go ahead, drag me.</Draggable>}
      <Droppable id="droppable">
        {parent === "droppable" ? (
          <Draggable id="draggable">Go ahead, drag me.</Draggable>
        ) : (
          "Drop here"
        )}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default Example;
