import React, { useState } from "react";
import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    window.open("https://66541ef030bad92ab9e61793--lucent-scone-fc55bd.netlify.app/", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseLeave={() => setClicked(false)}
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer transition-all duration-300 ease-in-out transform ${
        clicked ? "bg-red-500 scale-110" : "bg-blue-gradient hover:bg-green-500 hover:scale-105"
      }`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </button>
  );
};

export default GetStarted;
