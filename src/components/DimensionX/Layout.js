import React, { useEffect, useState } from "react";
import Menu from "@material-ui/icons/Menu";
import { motion } from "framer-motion";
import classes from "../../styles/DimensionX/Layout.module.css";
import data from "../../data.json";
import "../../pages/DimensionX.css";
import { Close } from "@material-ui/icons";

const Layout = ({ children }) => {
	const [isNav, setIsNav] = useState(false);

	useEffect(() => {
		console.log(isNav);
	}, [isNav]);
	const hamburgerVariants = {
		clicked: {
			left: "35vw",
			marginTop: "-20px",
			color: "#33b161",
			zIndex: 20,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		notClicked: {
			left: "0%",
			color: "#595959",
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
		<div className={classes.Container}>
			<nav className={classes.NavBar}>
				<div className={classes.TempBox}></div>
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
						{ isNav ? <Close color="#595959" /> : < Menu className={classes.menuContainer} color="#595959" /> }
					</motion.div>
				</div>

				<ul className={classes.PcNavbar}>
					{data.DimensionX.navbar.map((navItem) => {
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
						{data.DimensionX.navbar.map((navItem) => {
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
			</nav>
			<main
				onClick={() => {
					if (isNav) setIsNav(false);
				}}
			>
				{children}
			</main>
		</div>
	);
};

export default Layout;
