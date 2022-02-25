import React from "react";
import classes from "../../../styles/DimensionX/Prizes.module.css";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";

import Confetti from "react-confetti";

function Prizes() {
  const { innerWidth: width, innerHeight: height } = window;
  return (
    <div className={classes.container} id={"prizes"}>
      <SectionTopic title={"Prizes"} color={"46dd9a"} pendulamColor={"#46dd9a"}>
        <div className={classes.textContainer}>
          <p className={classes.title}>{data.DimensionX.prizes.prize}</p>
        </div>
        <div className={classes.imageContainer}></div>
      </SectionTopic>
      <Confetti
        width={width}
        height={height}
        colors={["#1cd49f"]}
        numberOfPieces={"160"}
      />
    </div>
  );
}
export default Prizes;
