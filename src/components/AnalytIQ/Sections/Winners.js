import React from "react";
import classes from "../../../styles/AnalytIQ/Winners.module.css";
import data from "../../../data.json";
import Confetti from "react-confetti";

const Winners = () => {
  const { innerWidth: width, innerHeight: height } = window;

  const culumn = [
    {
      title: "Schoul",
      field: "name",
    },
    {
      title: "Marks",
      field: "marks",
    },
  ];
  return (
    <div className={classes.winnersSection} id={"qualifiers"}>
      <div className={classes.winnersContainer}>
        <Confetti
          width={width}
          height={height}
          colors={["#ff9431", "#971f06"]}
          numberOfPieces={"160"}
        />
        <div className={classes.title}>
          <h1>{"Teams Qualified For 2nd Round"}</h1>
        </div>
        <div className={classes.schoolList}>
          <ul className={classes.list}>
            {data.AnalytIQ.secondRound.one.map((school) => {
              return <li>{school}</li>;
            })}
          </ul>
          <ul className={classes.list}>
            {data.AnalytIQ.secondRound.two.map((schoul) => {
              return <li>{schoul}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Winners;
