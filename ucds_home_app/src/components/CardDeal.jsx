import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  const handleButtonClick = () => {
    window.open("https://embr3-ucds.netlify.app", "_blank");
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Track firm compliance easily with our database.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Streamline the process of searching for monitored firms to verify
          compliance and monitor permits with our comprehensive database system,
          reducing time and effort while ensuring regulatory adherence and risk
          management.
        </p>

        <Button onClick={handleButtonClick} styles={`mt-10`} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
