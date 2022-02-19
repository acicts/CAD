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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            morbi vestibulum morbi sapien amet etiam euismod.
          </p>
          <p>
            Vitae ipsum vulputate nec nec dui urna, nec neque. Volutpat
            vulputate vestibulum mauris mauris sed fermentum. Habitasse sem
            facilisi semper bibendum quam nunc in. Nulla nec porttitor morbi
            faucibus felis, et, tincidunt donec id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
