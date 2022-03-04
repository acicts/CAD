import React from "react";
import classes from "../../../styles/CodeFLow/Home.module.css";
import DoubleArrow from "@material-ui/icons/DoubleArrow";
//import json file
import data from "../../../data.json";

const Home = () => {
  return (
    <div className={classes.Container} id="home">
      <div className={classes.LeftContainer}>
        <div className={classes.TextContainer}>
          <div>
            <p className={classes.Present}>
              Ananda College ICT Society <br /> Proudly Presents
            </p>
            <p className={classes.Heading}>CodeFlow</p>
            <p className={classes.SubHeading}>
              A week-long Inter-School Hackathon
            </p>
          </div>
          <div>
            <p>
              <a
                className={classes.Link}
                href={"#submit"}
              >
                Submit Your Projects!
              </a>
            </p>
            {/* <p>
              <Link className={classes.Link} to="/submit">
                Submit Your Project!
              </Link>
            </p> */}
          </div>
        </div>
        <a href="#about" className={classes.Button}>
          <span>More Info</span>
          <span>
            <DoubleArrow />
          </span>
        </a>
      </div>
      <div className={classes.RightContainer}>
        <div className={classes.Img}></div>
      </div>
    </div>
  );
};

export default Home;
