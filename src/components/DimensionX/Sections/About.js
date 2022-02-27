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
						01.02.2011.
					</p>

					<p>
						3. The registrations will be closed on 3rd March at 23:59.
					</p>
					<p>
						4. The competition will start on 1st March 2022 and the participants who register after the competition has started will have the same deadline as the early registrants.		
					</p>
					<p>
						5. There are 4 fields (Photo Manipulation, Logo design, Poster
						design and 3D still renders).
					</p>
					<p>
						6. Contestants should upload their submissions, 10 days after the
						opening ceremony.
					</p>
					<p>
						7. Further rules & regulations about the competition are listed on
						the website.
					</p>
				</div>
				<a
					className={classes.registerButton}
					href={data.DimensionX.navbar[4].link}
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
