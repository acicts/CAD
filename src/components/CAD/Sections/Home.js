import React from "react";
import classes from "../../../styles/CAD/Home.module.css";
import logo from "../../../images/AnalytIQ/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.imageContainer}>
        <div className={classes.linkContainer}>
          <Link to="/codeflow">
            <div href="#" className={classes.codeflow}></div>
          </Link>

          <Link to="/analytiq">
            <div href="#" className={classes.analytiq}></div>
          </Link>

          <Link to="/dimensionx">
            <div href="#" className={classes.dimensionx}></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
