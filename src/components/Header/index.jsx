import { memo } from "react";
import GobbletHeading from "./GobbletHeading";
import styled from "styled-components";

const Header = ({gameOn}) => {
  return (
    <VanishingHeader $gameOn={gameOn}>
      <GobbletHeading />
    </VanishingHeader>
  );
};

export default memo(Header);


const VanishingHeader = styled.header`
  @media only screen and (orientation: landscape) and (max-height: 750px) {
    & {
      display: ${({ $gameOn }) => $gameOn && "none"};
    }
  }
`;
