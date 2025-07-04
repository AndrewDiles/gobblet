import { useState, useEffect } from "react";

const useBoardScale = () => {
  const [scale, setScale] = useState(1);
  const [flexDirection, setFlexDirection] = useState("row");

  useEffect(() => {
    const baseBoardWidth = board.offsetWidth;
    const baseBoardHeight = board.offsetHeight;
    const handleSizeChange = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      let heightModifier = 0;
      const header = document.querySelector("header");
      if (
        header &&
        header.checkVisibility &&
        header.checkVisibility({ checkDisplayNone: true })
      ) {
        const possibleTitle = document.querySelector("h1");
        if (possibleTitle) {
          heightModifier = possibleTitle.offsetHeight;
        }
      }
      const indicator = document.getElementById("indicator");
      if (indicator) {
        heightModifier += 2 * indicator.offsetHeight;
      }
      const availableHeight = windowHeight - heightModifier;
      if (availableHeight > windowWidth) {
        setFlexDirection("column");
        const maxXScale = windowWidth / baseBoardWidth;
        const maxYScale = availableHeight / (baseBoardHeight*1.35);
        setScale(0.9 * Math.min(maxXScale, maxYScale));
      } else {
        setFlexDirection("row");
        const maxXScale = windowWidth / (baseBoardWidth*1.35);
        const maxYScale = availableHeight / baseBoardHeight;
        setScale(0.9 * Math.min(maxXScale, maxYScale));
      }
    };
    handleSizeChange();
    window.addEventListener("resize", handleSizeChange);
    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return {scale, flexDirection};
};

export default useBoardScale;
