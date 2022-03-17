import React from "react";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";
import classes from "../../../styles/CodeFLow/LeaderBoard.module.css";

const LeaderBoard = () => {
	return (
		<section className={classes.Container}>
			<SectionTopic
				title={"Leaderboard"}
				color={textColor}
				pendulamColor={pendulamColor}
			>
				<div className={classes.ProjectContainer}>
					{data.codeflow.leaders.map((leader) => {
						return (
							<div className={classes.LeaderItem}>
								<div
									style={{ background: `url(${leader.image})` }}
									className={classes.Image}
								></div>
								<h3>{leader.title}</h3>
								<div className={classes.BottomBar}>
									<span>By {leader.team_name}</span>
									<a href={leader.github}>GitHub Repo</a>
								</div>
							</div>
						);
					})}
				</div>
			</SectionTopic>
		</section>
	);
};

export default LeaderBoard;
