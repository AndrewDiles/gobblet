import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableCell = ({ cellId, style, board, allDisabled, children }) => {
  const { isOver, active, setNodeRef } = useDroppable({
    id: cellId,
  });

  let valid = false;

  if (isOver) {
    const cellContents = board[Number(cellId[5])];
    const { id: pieceId } = active;
    const pieceSize = Number(pieceId[4]);
    valid = cellContents === 0 || (cellContents * 10) % 10 < pieceSize;
  }

  style = {
    ...style,
    borderColor: "black",
    backgroundColor: "transparent",
  };

  if (!allDisabled && isOver) {
    if (valid) {
      style.borderColor = "lime";
      style.backgroundColor = "rgba(255,255,255,.3)";
    } else {
      style.borderColor = "red";
    }
  }

  return (
    <div
      id={cellId}
      ref={setNodeRef}
      style={style}
      className="cell half-border row"
    >
      {children}
    </div>
  );
};

export default DroppableCell;
