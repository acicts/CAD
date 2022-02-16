import React from 'react';
import classes from "../../styles/CodeFLow/SectionTopic.module.css";

const SectionTopic = (props) => {
	window.addEventListener('scroll', () => {
		console.log(window.scrollTop)
	})
	return (
		<div className={`${classes.Container} ${props.className}`}>
			<h1><span>#</span> <span style={{ color: props.color }}>{ props.title }</span></h1>
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