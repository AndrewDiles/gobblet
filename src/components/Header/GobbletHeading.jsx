import { memo } from "react";

const LETTERS = "Gobblet".split("");
const COLORS = [
	"#f94144",
	"#f3722c",
	"#f9c74f",
	"#90be6d",
	"#43aa8b",
	"#577590",
];

const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const GobbletHeading = () => {
  return (
    <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}>
      {LETTERS.map((letter, index) => (
        <span
          key={index}
          style={{
            transform: `rotate(${index % 2 === 0 ? -15 : 15}deg)`,
            color: randomColor()
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default memo(GobbletHeading);
