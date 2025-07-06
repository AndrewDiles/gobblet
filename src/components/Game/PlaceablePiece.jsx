import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import PIECE_SIZE_CHART from "../../constants/piece_size_chart";

const PlaceablePiece = ({ id, size, activePlayer, disabled, scale }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
	const transformToUse = transform;
	if (transformToUse) {
		transformToUse.x *= 1/scale;
		transformToUse.y *= 1/scale;
	}
  const style = disabled ? {} : {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transformToUse),
  };

  return (
    <button
      ref={setNodeRef}
      disabled={disabled || false}
      style={style}
      {...listeners}
      {...attributes}
      className="cell row"
    >
      <div
        style={{
          height: PIECE_SIZE_CHART[size],
          width: PIECE_SIZE_CHART[size],
          backgroundColor:
            activePlayer === 1 ? "var(--p1-color)" : "var(--p2-color)",
        }}
      ></div>
    </button>
  );
};

export default PlaceablePiece;
