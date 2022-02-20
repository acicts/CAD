import React from "react";
import classes from "../../../styles/DimensionX/Home.module.css";

const Home = () => {
	return (
		<div className={classes.homeContainer} id={"home"}>
			<div className={classes.mainTitleWrapper}>
				<div className={classes.titleContainer}>
					<h1 className={classes.title}>DIMENSION</h1>
				</div>
			</div>

			<div className={classes.subTextContainer}>
				<p>An Inter-School</p>
				<p>
					2D & 3D <br /> Graphic Design Competition
				</p>
				<p>Organized by</p>
				<p>The ICT Society of Ananda College</p>
			</div>

			<div className={classes.buttonContainer}>
				<div className={classes.button}>
					<a href="#faq">
						Start <br></br> Creating
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
