import SelectNameAndColors from "./SelectNameAndColors";
import BeginGameButton from "./BeginGameButton";

const MainMenu = ({game, setGame}) => {
  return (
    <menu>
      <SelectNameAndColors game={game} setGame={setGame} />
      <BeginGameButton game={game} setGame={setGame} />
      <a
				className="menu-button"
        href="https://themindcafe.com.sg/wp-content/uploads/2018/07/Gobblet-Gobblers.pdf"
        target="_blank"
      >
        RULES
      </a>
    </menu>
  );
};

export default MainMenu