import React from "react";
import classes from "../../../styles/DimensionX/Prizes.module.css";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";
function Prizes() {
  return (
    <section className={classes.container}>
      <SectionTopic title={"Prizes"} color={"46dd9a"} pendulamColor={"#46dd9a"}>
        <div className={classes.textContainer}>
          <span className={classes.title}>{data.DimensionX.prizes.prize}</span>
          <span className={classes.question}>?</span>
        </div>
      </SectionTopic>
    </section>
  );
}
export default Prizes;
