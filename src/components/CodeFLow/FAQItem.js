import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { motion } from "framer-motion";
import classes from "../../styles/CodeFLow/FAQItem.module.css";

const FAQItem = ({
	title,
	body,
	index,
	currIndex,
	changeIndexHandler,
	link,
}) => {
	const animationVariants = {
		clicked: {
			transform: "rotateZ(45deg)",
			display: "inline-block",
		},
		notClicked: {
			display: "inline-block",
			transform: "rotateZ(0deg)",
		},
	};
	return (
		<div className={classes.Container}>
			<div
				className={classes.TopContainer}
				onClick={() => {
					changeIndexHandler(index);
				}}
			>
				<motion.span
					variants={animationVariants}
					animate={index === currIndex ? "clicked" : "notClicked"}
				>
					<ArrowRightIcon />
				</motion.span>
				<span className={classes.Title}>{title}</span>
			</div>
			{currIndex === index && (
				<div className={classes.BottomContainer}>
					<div className={classes.Bar}>
						<div></div>
					</div>
					<div className={classes.Text}>
						<p>
							{body} {link && <a href={link.ref}>{link.text}</a>}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default FAQItem;
