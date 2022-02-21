import React from "react";
import classes from "../../../styles/DimensionX/About.module.css";
import AboutImage from "../../../images/DimensionX/banner2.png";
import data from "../../../data.json";
const About = () => {
	return (
		<div className={classes.aboutSection} id={"faq"}>
			<div className={classes.aboutContainer}>
				<div className={classes.title}>
					<p>What is</p>
					<h1>DimensionX</h1>
				</div>

				<div className={classes.description}>
					<p>
						1. DimensionX is an inter-school graphic designing competition
						organized by the ICT Society of Ananda College.
					</p>
					<p>
						2. All the registrants should be born after 31.01.2003 and before
						01.02.2007.
					</p>
					<p>
						3. There are 4 fields (Photo Manipulation, Logo design, Poster
						design and 3D still renders).
					</p>
					<p>
						4. Contestants should upload there submissions in 10 days after the
						opening ceremony.
					</p>
					<p>
						5. Further rules & regulations about the competition are listed on
						the website.
					</p>
				</div>
				<a
					className={classes.registerButton}
					href={data.DimensionX.navbar[3].link}
					target={"_blank"}
					rel="noreferrer"
				>
					Register
				</a>
			</div>

			<img src={AboutImage} className={classes.image} alt="dimx-cover" />
		</div>
	);
};

export default About;
