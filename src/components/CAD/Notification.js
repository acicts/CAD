import React, { useEffect } from "react";
import Close from "@material-ui/icons/Close";
import classes from "../../styles/CAD/Notification.module.css";
import { motion, useAnimation } from "framer-motion";
const Notification = () => {
	const animationVariants = {
		initial: {
			left: "2%",
			opacity: 1,
		},
		close: {
			left: "-60%",
			opacity: 0,
		},
	};
	const controller = useAnimation();
	useEffect(() => {
		controller.start("initial");
	}, []);
	return (
		<motion.div
			animate={controller}
			variants={animationVariants}
			initial={"close"}
			className={classes.Container}
		>
			<span
				onClick={() => {
					controller.start("close");
				}}
			>
				<Close />
			</span>
			<p>Anyone can participate in more than one compeition.</p>
		</motion.div>
	);
};

export default Notification;
