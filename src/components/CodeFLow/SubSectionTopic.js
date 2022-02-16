import React from 'react';
import classes from "../../styles/CodeFLow/SubSectionTopic.module.css";

const SectionTopic = (props) => {
	window.addEventListener('scroll', () => {
		console.log(window.scrollTop)
	})
	return (
		<div className={`${classes.Container} ${props.className}`}>
			<h2><span style={{ color: props.color }}>{ props.title }</span></h2>
			<div className={classes.TextContainer}>
				<div className={classes.PendContainer}>
					<div style={{ backgroundColor: props.pendulamColor }} className={classes.Bar}></div>
					<div style={{ backgroundColor: props.pendulamColor }} className={classes.Box}></div>
				</div>
				<div className={classes.children}>{ props.children }</div>
			</div>
		</div>
	)
}

export default SectionTopic;