import React from "react";
import classes from "../../../styles/AnalytIQ/About.module.css";

const About = () => {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <div className={classes.title}>
          <h1>What is AnalytIQ</h1>
        </div>

        <div className={classes.description}>
          <p>
            AnalytIQ is an online inter-school team quiz competition organized
            by the ICT Society of Ananda College.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
