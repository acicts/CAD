import React from "react";
import classes from "../../styles/AnalytIQ/Layout.module.css";
import data from "../../data.json";
import '../../pages/DimensionX.css'

const Layout = ({ children }) => {
	return (
		<div className={classes.Container}>
			<nav className={classes.NavBar}>
				<div></div>
				<ul>
					{data.DimensionX.navbar.map((navItem) => {
						return (
							<li>
								<a href={navItem.link}>{navItem.text}</a>
							</li>
						);
					})}
				</ul>
			</nav>
			<main>{children}</main>
			
		</div>
	);
};

export default Layout;
