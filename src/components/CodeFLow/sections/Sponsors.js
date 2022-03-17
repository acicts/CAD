import React from "react";
import Sponsor1Logo from "../../../images/CodeFlow/sponsor-1.png";
import Sponsor2Logo from "../../../images/CodeFlow/sponsor-2.png";
import SectionTopic from "../SectionTopic";
import data from "../../../data.json";
import classes from "../../../styles/CodeFLow/Sponsors.module.css";

const Sponsors = () => {
	return (
		<section>
			<SectionTopic title={"Sponsors"} color={"white"} pendulamColor={"white"}>
				<div className={classes.LogoContainer}>
					<img src={Sponsor1Logo} alt="99x-logo" />
					<img src={Sponsor2Logo} alt="24x7-logo" />
				</div>
			</SectionTopic>
		</section>
	);
};

export default Sponsors;
