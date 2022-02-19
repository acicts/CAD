import React from "react";
import SectionTopic from "../SectionTopic";
import classes from "../../../styles/CodeFLow/About.module.css";

const About = () => {
	return (
		<section className={classes.Container} id="about">
			<SectionTopic
				title={"What is CodeFLow?"}
				color={"white"}
				pendulamColor={"white"}
			>
				<div className={classes.ParaContainer}>
					<p className={classes.Para}>
						CodeFlow is a week-long hackathon conducted by Ananda College ICT
						Society that provides a platform for students to come up with
						innovative solutions to real-world issues using programming.
						CodeFlow also targets your collaborative skills as well, which is a
						demanding skill in the ICT industry.
					</p>
					<p className={classes.Para}>
						It's a learning experience for pupils of all ability levels and all
						age groups. There are two divisions, one for grades 6-9 (Junior) and
						one for grades 10-13 (Senior) students, and only two teams from each
						school are allowed to compete in this event. And each team is
						limited to developing one project (Desktop application, Website,
						Mobile Application, etc...) on a particular topic from the given
						topic list.
					</p>
				</div>
			</SectionTopic>
		</section>
	);
};

export default About;
