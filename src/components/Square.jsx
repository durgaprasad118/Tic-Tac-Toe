import React, { useState } from "react";
import Cross from "../asset/image/Cross.png";
import Circle from "../asset/image/Circle.png";

const Square = () => {
  let user = "x";

  const image = user === "x" ? Cross : Circle;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const showCase = isHovered ? <img src={image} alt="User" draggable="false" /> : '';

  return (
    <div className="gameSquares flex">
      <div
        className="square flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showCase}
      </div>
    </div>
  );
};

export default Square;
