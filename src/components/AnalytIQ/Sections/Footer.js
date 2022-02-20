import React from "react";
import classes from "../../../styles/AnalytIQ/Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <div className={classes.description}>
          <p>
            A Project By{" "}
            <a href="https://github.com/acicts/" target={"_blank"}>
              ACICTS
            </a>
          </p>
          <p>Copyright reserved 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
