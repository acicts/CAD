import React from "react";
import classes from "../styles/Loading.module.css";
// import { motion, AnimatePresence } from 'framer-motion'

const Loading = () => {
	return (
		<section className={classes.Container}>
			<div class={classes.Loader}></div>
		</section>
	);
};

export default Loading;
