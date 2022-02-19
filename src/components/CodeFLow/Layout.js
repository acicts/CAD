import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import classes from "../../styles/CodeFLow/Layout.module.css";
import data from "../../data.json";
import { Close } from "@material-ui/icons";

const Layout = ({ children }) => {
	const [isNav, setIsNav] = useState(false);
	const hamburgerVariants = {
		clicked: {
			left: "65%",
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

	const scrollVariatns = {
		scrolled: {
			background: "#074f83b2",
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
		},
		notScrolled: {
			background: "#074f8300",
			position: "static",
			top: 0,
			left: 0,
			width: "100%",
		},
	};

	const [isScrolled, setIsScrolled] = useState(false);
	return (
		<div
			className={classes.Container}
			onScroll={(e) => {
				if (e.target.scrollTop >= 20) {
					setIsScrolled(true);
				} else {
					setIsScrolled(false);
				}
			}}
		>
			<motion.nav
				className={classes.NavBar}
				variants={scrollVariatns}
				animate={isScrolled ? "scrolled" : "notScrolled"}
				initial={"notScrolled"}
			>
				<div className={classes.TempBox}>
					<Link to="/">../Back</Link>
				</div>
				<div className={classes.NavBarMenu}>
					<motion.div
						onClick={() => {
							setIsNav((curr) => !curr);
						}}
						style={{ position: "relative" }}
						variants={hamburgerVariants}
						animate={isNav ? "clicked" : "notClicked"}
						initial={"notClicked"}
					>
						{isNav ? (
							<Close color="#595959" />
						) : (
							<Menu className={classes.menuContainer} color="#595959" />
						)}
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
				<div className={classes.RespNav}>
					<motion.ul
						variants={navbarVariants}
						animate={isNav ? "clicked" : "notClicked"}
						initial={"notClicked"}
					>
						{data.codeflow.navbar.map((navItem) => {
							return (
								<li>
									<a
										onClick={() => {
											setIsNav(false);
										}}
										href={navItem.link}
									>
										{navItem.text}
									</a>
								</li>
							);
						})}
					</motion.ul>
				</div>
			</motion.nav>
			<main
				onClick={() => {
					if (isNav) setIsNav(false);
				}}
			>
				{children}
			</main>
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
