import styled from "styled-components";
import SingleNameAndColorInputs from "./SingleNameAndColorInputs";

const playerNumbers = [1, 2];

const SelectNameAndColors = ({game, setGame}) => {
  return (
    <Container>
      {playerNumbers.map((playerNumber) => (
        <SingleNameAndColorInputs key={playerNumber} game={game} setGame={setGame} playerNumber={playerNumber} />
      ))}
    </Container>
  );
};

export default SelectNameAndColors;

const Container = styled.section`
  display: grid;
  margin: 0 auto 1em;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
	max-width: 600px;
	@media only screen and (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
