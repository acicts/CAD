import React from "react";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";
import classes from "../../../styles/CodeFLow/Rules.module.css";

const Rules = () => {
	return (
		<section className={classes.Container} id="rules">
			<SectionTopic
				title={"Rules & Regulations"}
				color={"white"}
				pendulamColor={"white"}
				childrenStyle={{ height: "max-content" }}
				containerStyles={{ height: "max-content" }}
			>
				<ol>
					{data.codeflow.rules.map((rule) => (
						<li>{rule}</li>
					))}
					<li>
						You should make a video that is no longer than 5 minutes about your
						project. If you are not sure what to include in the video, read
						<a
							href="https://drive.google.com/file/d/1h6MJs39Rxi15sxlVvXp3YurzDTDmzQGr/view?usp=sharing"
							target="_blank"
						>
							{" this"}
						</a>
					</li>
				</ol>
			</SectionTopic>
		</section>
	);
};

export default Rules;
