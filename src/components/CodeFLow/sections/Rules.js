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
				</ol>
			</SectionTopic>
		</section>
	);
};

export default Rules;
