import React from "react";
import classes from "../../../styles/DimensionX/Contact.module.css";
import AboutImage from "../../../images/DimensionX/banner3.png";

const Contact = () => {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <div className={classes.title}>
          <p>Contact out</p>
          <h1>Team</h1>
        </div>

        <div className={classes.description}>
          <p>
            Join our <span>WhatsApp Group</span>
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

        <footer className={classes.footer}>
          <p>
            A Project By <a href="#">ACICTS</a>
          </p>
          <p>© Copyright reserved 2022 </p>
        </footer>
      </div>

      <img src={AboutImage} className={classes.image} />
    </div>
  );
};

export default Contact;
