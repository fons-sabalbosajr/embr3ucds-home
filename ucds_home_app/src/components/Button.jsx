import React, { useState } from "react";

const Button = ({ styles }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open("https://embr3-ucds.netlify.app", "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseLeave={() => setClicked(false)}
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none transition-all duration-300 ease-in-out transform ${
        clicked ? "bg-red-500 scale-110" : "bg-blue-gradient hover:bg-yellow-500 hover:scale-105"
      } ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
