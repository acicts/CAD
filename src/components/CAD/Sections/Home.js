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
          <Link to="/analytiq">
            <div className={classes.diagramarm1}>
              <div className={classes.arrortxt}>
                PREMIER
                <br />
                INTER-SCHOOL
                <br />
                ONLINE ICT QUIZ
              </div>
              <svg
                width="102"
                height="110"
                viewBox="0 0 102 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 1.5H95.5V103.5"
                  stroke="#D67A41"
                  stroke-width="3"
                />
                <circle
                  className={classes.circle}
                  cx="95.5"
                  cy="103.5"
                  r="6.5"
                  fill="#D67A41"
                />
              </svg>
            </div>
          </Link>
          <Link to="/codeflow">
            <div className={classes.diagramarm2}>
              <svg
                width="102"
                height="110"
                viewBox="0 0 102 110"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 108.5H95V6.5" stroke="#083987" stroke-width="3" />
                <circle
                  className={classes.circle}
                  r="6.5"
                  transform="matrix(1 0 0 -1 95 6.50006)"
                  fill="#103D80"
                />
              </svg>
              <div className={classes.arrortxt}>
                A WEEK-LONG
                <br />
                INTER-SCHOOL
                <br />
                HACKATHON
              </div>
            </div>
          </Link>
          <Link to="/dimensionx">
            <div className={classes.diagramarm3}>
              <svg
                width="110"
                height="102"
                viewBox="0 0 110 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M108.5 101.5L108.5 6.5L6.5 6.5"
                  stroke="#005233"
                  stroke-width="3"
                />
                <circle
                  className={classes.circle}
                  r="6.5"
                  transform="matrix(0 -1 -1 0 6.5 6.5)"
                  fill="#005233"
                />
              </svg>

              <div className={classes.arrortxt}>
                AN INTER-SCHOOL
                <br />
                2D & 3D
                <br />
                GRAPHIC DESIGN
                <br />
                COMPETITION
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
