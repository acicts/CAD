import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/CodeFLow/Layout.module.css";
import data from "../../data.json";

const Layout = ({ children }) => {
	return (
		<>
			<nav className={classes.NavBar}>
				<div></div>
				<ul>
					{data.navbar.map((navItem) => {
						return (
							<li>
								<Link to={navItem.link}>{navItem.text}</Link>
							</li>
						);
					})}
				</ul>
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
		</>
	);
};

export default Layout;
