import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from "@material-ui/icons/Menu";
import classes from "../../styles/CodeFLow/Layout.module.css";
import data from "../../data.json";

const Layout = ({ children }) => {
	const [isNav, setIsNav] = useState(false);
	const hamburgerVariants = {
		clicked: {
			left: "40%",
			color: "#07253a",
			zIndex: 20,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		notClicked: {
			left: "0%",
			color: "white",
			zIndex: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const navbarVariants = {
		clicked: {
			scale: 1,
			opacity: 1,
			left: 0,
			top: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		notClicked: {
			scale: 0,
			opacity: 0,
			left: "-20%",
			top: "-100vh",
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<div
			className={classes.Container}
			style={{ overflowY: isNav ? "hidden" : "scroll" }}
		>
			<nav className={classes.NavBar}>
				<div className={classes.TempBox}></div>
				<div className="navbar-menu">
					<motion.div
						onClick={() => {
							setIsNav((curr) => !curr);
						}}
						variants={hamburgerVariants}
						animate={isNav ? "clicked" : "notClicked"}
					>
						<Menu />
					</motion.div>
				</div>

				<ul className={classes.PcNavbar}>
					{data.codeflow.navbar.map((navItem) => {
						return (
							<li>
								<a href={navItem.link}>{navItem.text}</a>
							</li>
						);
					})}
				</ul>
				<div className="responsive-navbar">
					<motion.ul
						variants={navbarVariants}
						animate={isNav ? "clicked" : "notClicked"}
					>
						{data.codeflow.navbar.map((navItem) => {
							return (
								<li>
									<a href={navItem.link}>{navItem.text}</a>
								</li>
							);
						})}
					</motion.ul>
				</div>
			</nav>
			<main>{children}</main>
			<footer className={classes.Footer}>
				<div className={classes.BottomContainer}>
					<div className={classes.Ball}></div>
					<div className={classes.Bar}></div>
					<div className={classes.Ball}></div>
				</div>
				<div>
					<p className={classes.FooterTopic}>A Project by ACICTS</p>
					<p>Copyright reserved 2022</p>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
