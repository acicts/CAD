import React from "react";
import classes from "../../../styles/AnalytIQ/Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <div className={classes.title}>
          <h1>Contact</h1>
        </div>

        <div className={classes.description}>
          <p>
            Join Our{" "}
            <a
              href="https://discord.gg/ZSGwAMyf"
              rel="noreferrer"
              target="_blank"
            >
              Discord Server
            </a>
          </p>
          <p>
            Manula Thejan - <span>071 123 4567</span>
          </p>
          <p>
            Manula Thejan - <span>071 123 4567</span>
          </p>
          <p>
            Manula Thejan - <span>071 123 4567</span>
          </p>
        </div>

        {/* <footer className={classes.footer}>
            <p>A Project By <a href='#'>ACICTS</a></p>
            <p>© Copyright reserved 2022 </p>
        </footer> */}
      </div>
    </div>
  );
};

export default Contact;
