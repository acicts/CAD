import React from "react";
import classes from "../../../styles/DimensionX/Prizes.module.css";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";



function Prizes() {
  return (
    <div className={classes.container} id={"prizes"}>
      <SectionTopic title={"Prizes"} color={"46dd9a"} pendulamColor={"#46dd9a"}>
        <div className={classes.textContainer}>
          <p className={classes.title}>{data.DimensionX.prizes.prize}</p>
        </div>
        <div className={classes.imageContainer}></div>
      </SectionTopic>
     
    </div>
  );
}
export default Prizes;
