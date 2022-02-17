import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "../../styles/CodeFLow/SectionTopic.module.css";

const SectionTopic = (props) => {
	const animationVariants = {
		visible: {
			height:
				props.barStyle && props.barStyle.height
					? props.barStyle.height
					: "75vh",
			opacity: 1,
			transition: { duration: 1, ease: "easeIn", type: "spring" },
		},
		hidden: {
			height: "0vh",
			opacity: 0,
		},
	};

	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start("visible");
			console.log(props.title + ": Is in view");
		}
	}, [inView, controls, props.title]);
	return (
		<div
			className={`${classes.Container} ${props.className}`}
			style={{ ...props.containerStyles }}
		>
			<h1>
				<span>#</span> <span style={{ color: props.color }}>{props.title}</span>
			</h1>
			<div className={classes.TextContainer}>
				<div className={classes.PendContainer}>
					<motion.div
						style={{ backgroundColor: props.pendulamColor, ...props.barStyle }}
						className={classes.Bar}
						variants={animationVariants}
						initial="hidden"
						animate={controls}
						ref={ref}
					></motion.div>
					<div
						style={{ backgroundColor: props.pendulamColor }}
						className={classes.Box}
					></div>
				</div>
				<div className={classes.children} style={props.childrenStyle}>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default SectionTopic;
