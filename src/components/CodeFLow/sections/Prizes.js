import React from "react";
import classes from "../../../styles/CodeFLow/Prizes.module.css";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";
function Prizes() {
  return (
    <section className={classes.container}>
      <SectionTopic
        title={"Prizes"}
        color={"#07253a"}
        pendulamColor={"#07253a"}
      >
        <div className={classes.textContainer}>
          <span className={classes.title}>{"Prizes announcing soon !!"}</span>
          <span className={classes.question}>?</span>
        </div>
      </SectionTopic>
    </section>
  );
}
export default Prizes;
