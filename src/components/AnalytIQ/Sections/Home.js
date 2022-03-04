import React from "react";
import classes from "../../../styles/AnalytIQ/Home.module.css";

import logo from "../../../images/AnalytIQ/logo.svg";
import data from "../../../data.json";

const Home = () => {
	return (
		<div className={classes.homeContainer} id={"home"}>
			<div className={classes.logoContainer}>
				<img src={logo} className={classes.logo} alt="logo" />
			</div>

			<div className={classes.subTextContainer}>
				<p>Premier Inter-School Online Quiz</p>
				<p>Hosted By The ICT Society Of Ananda College</p>

				<div className={classes.buttonContainer}>
				
					<div className={classes.moreButton}>
						<a href="#about">More Details</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
