import styled from "styled-components";
import PlaceablePiece from "./PlaceablePiece";

const Stock = ({
  sizes,
  opponentSizes,
  flexDirection,
  scale,
  activePlayer,
  allDisabled,
}) => {
  return (
    <Container
      id="stock"
      $flexDirection={flexDirection === "row" ? "column" : "row"}
    >
      {sizes.map((size, index) =>
        size > 0 ? (
          <PieceContainer key={`p${activePlayer}-s${index + 1}-n${size}`}>
            <PlaceablePiece
              activePlayer={activePlayer}
              size={index + 1}
              disabled={allDisabled}
              id={`p${activePlayer}-s${index + 1}-n${size === 2 ? 1 : 2}`}
              scale={scale}
            />
            {size === 2 && <MultiplicityIndicator>x2</MultiplicityIndicator>}
          </PieceContainer>
        ) : (
          <div
            key={`p${activePlayer}-s${index + 1}-n${size}`}
            className="cell no-border"
          ></div>
        )
      )}
      {opponentSizes.map((size, index) => {
        if (!size) return;
        const style = {
          backgroundColor:
            activePlayer === 2 ? "var(--p1-color)" : "var(--p2-color)",
        };
        const secondDotStyle = { ...style };
        if (flexDirection === "row") {
          style.right = "1px";
          secondDotStyle.right = "1px";
          style.top = 39 + index * 100 + "px";
          secondDotStyle.top = 53 + index * 100 + "px";
        } else {
          style.bottom = "1px";
          secondDotStyle.bottom = "1px";
          style.left = 39 + index * 100 + "px";
          secondDotStyle.left = 53 + index * 100 + "px";
        }
        return (
          <div key={`mini-s${index + 1}-n${size}`}>
            <MiniOpponentPiece style={style} />
            {size === 2 && (
              <MiniOpponentPiece
                key={`mini-s${index + 1}-n${size}`}
                style={secondDotStyle}
              />
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Stock;

const Container = styled.section`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  outline: 10px solid black;
  outline-offset: -10px;
  position: relative;
`;

const MultiplicityIndicator = styled.span`
  position: absolute;
  right: 10px;
  top: 75px;
  font-size: 20px;
  line-height: 0;
  letter-spacing: 1px;
`;
const PieceContainer = styled.div`
  position: relative;
`;

const MiniOpponentPiece = styled.div`
  height: 8px;
  width: 8px;
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
`;
