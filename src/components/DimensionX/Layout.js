import React from "react";
import classes from "../../styles/DimensionX/Layout.module.css";
import data from "../../DimensionXData.json";
import '../../pages/DimensionX.css'

const Layout = ({ children }) => {
	return (
		<div className="appContainer">
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
			
		</div>
	);
};

export default Layout;
