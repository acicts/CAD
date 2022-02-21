import React from "react";
import classes from "../../../styles/DimensionX/Rules.module.css";
import AboutImage from "../../../images/DimensionX/banner2.svg";
import data from "../../../data.json";

const Rules = () => {
  return (
    <div className={classes.rulesSection} id={"rules"}>
      <img src={AboutImage} className={classes.image} alt="Dimx-cover" />
      <div className={classes.rulesContainer}>
        <div className={classes.title}>
          <p>Rules and</p>
          <h1>Regulations</h1>
        </div>

        <div className={classes.description}>
          <div className={classes.singleCategory}>
            <h1>3D</h1>
            <ul className={classes.rules}>
              {data.DimensionX.rules.threeD.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ul>
          </div>

          <div className={classes.singleCategory}>
            <h1>Photo Manipulation</h1>
            <ul className={classes.rules}>
              {data.DimensionX.rules.twoD.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ul>
          </div>

          <div className={classes.singleCategory}>
            <h1>Logo Designing</h1>
            <ul className={classes.rules}>
              {data.DimensionX.rules.logo.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ul>
          </div>
          <div className={classes.singleCategory}>
            <h1>Poster Design</h1>
            <ul className={classes.rules}>
              {data.DimensionX.rules.poster.map((rule) => {
                return <li>{rule}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
