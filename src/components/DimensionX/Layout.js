import React from "react";
import classes from "../../styles/DimensionX/Layout.module.css";
import data from "../../DimensionXData.json";

const Layout = ({ children }) => {
	return (
		<>
			<nav className={classes.NavBar}>
				<div></div>
				<ul>
					{data.navbar.map((navItem) => {
						return (
							<li>
								<a href={navItem.link}>{navItem.text}</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<main>{children}</main>
			{/* <footer className={classes.Footer}>
				<div className={classes.BottomContainer}>
					<div className={classes.Ball}></div>
					<div className={classes.Bar}></div>
					<div className={classes.Ball}></div>
				</div>
				<div>
					<p className={classes.FooterTopic}>A Project by ACICTS</p>
					<p>Copyright reserved 2022</p>
				</div>
			</footer> */}
		</>
	);
};

export default Layout;
