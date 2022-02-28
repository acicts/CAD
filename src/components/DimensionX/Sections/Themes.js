import React, { useState, useEffect } from "react";
import SectionTopic from "../../DimensionX/SectionTopic";
import SubSectionTopic from "./SubSectionTopic";
import classes from "../../../styles/DimensionX/Themes.module.css";
import data from "../../../data.json"

let init = false;

const Themes = () => {
	const click = (props)=>{
		window.open(props)

	}
	const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference = +new Date(2022, 1, 1) - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 23),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const textColor = "#07253a";
	const pendulamColor = "#07253a";
	const [time, setTime] = useState(null);
	const [mins, setMins] = useState(null);
	const [hours, setHours] = useState(null);
	const [days, setDays] = useState(null);
	const [eventStarted, setEventStarted] = useState(false);
	useEffect(() => {
		const timeLeft = calculateTimeLeft();
		if (time === null) {
			if (timeLeft.seconds >= 0) {
				setTime(timeLeft.seconds);
				setHours(timeLeft.hours);
				setMins(timeLeft.minutes);
				setDays(timeLeft.days);
			} else {
				setEventStarted(true);
			}
		} else if (!eventStarted) {
			const timer = setTimeout(() => {
				if (days === 0 && hours === 0 && mins === 0 && time === 0) {
					setEventStarted(true);
				} else {
					if (hours === 0) {
						if (days > 0) {
							setDays((curr) => curr - 1);
							setHours(24);
						}
					}
					if (mins === 0) {
						if (hours > 0) {
							setHours((curr) => curr - 1);
							setMins(60);
						}
					}
					if (time === 0) {
						if (mins > 0) {
							setMins((curr) => curr - 1);
							setTime(60);
						}
					} else {
						setTime((curr) => curr - 1);
					}
				}
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [eventStarted, days, hours, mins, time]);
	return (
		<section className={classes.Container} id="themes">
			<SectionTopic
				title={"Themes"}
				color={textColor}
				pendulamColor={"#46dd9a"}
				height={"150vh"}
				barStyle={{
					height:"142vh"
				}}
			>
				{!eventStarted ? (
					<div className={classes.TimeContainer}>
						<h1>Themes Will Be Revealed In!</h1>
						<div className={classes.TimeBar}>
							<div>
								<p>{days}</p>
								<p>Days</p>
							</div>
							<div className={classes.Dots}>:</div>
							<div>
								<p>{hours}</p>
								<p>Hours</p>
							</div>
							<div className={classes.Dots}>:</div>
							<div>
								<p>{mins}</p>
								<p>Mins</p>
							</div>
							<div className={classes.Dots}>:</div>
							<div>
								<p>{time}</p>
								<p>Seconds</p>
							</div>
						</div>
					</div>
				) : (
					<div className={classes.SubContainer}>
						<div className={classes.threeD}>
						<SubSectionTopic
							title={"3D Category"}
							color={textColor}
							pendulamColor={pendulamColor}
						>
							<ul>
								<li>{data.DimensionX.themes.threeD.title}</li>
								{data.DimensionX.themes.threeD.themes.map((rule) => {
                					return <li>{rule}</li>;
              					})}
							</ul>
						</SubSectionTopic>
						</div>
						<div className={classes.photo}>
						<SubSectionTopic
							title={"Photo Manipulation"}
							color={textColor}
							pendulamColor={pendulamColor}
						>
							<ul>
								<li>Use all of the stock images below to create a composition</li>
								<li onClick={()=>{click("https://drive.google.com/drive/folders/13_TIXLhVWmppqH8vm5d6JPprVaRDsXed?usp=sharing")}}>Stock Images</li>
							</ul>
						</SubSectionTopic>
						</div>
					
						<div className={classes.photo}>
						<SubSectionTopic
							title={"Logo Design"}
							color={textColor}
							pendulamColor={pendulamColor}
						>
							<ul>
								<li className={classes.logotitle}>{data.DimensionX.themes.logo.details}</li>
								<li onClick={()=>{click("https://drive.google.com/drive/folders/1PLBZkCeO0xiKILWb_Lb5Lc3tkYXI0Zc2?usp=sharing")}}>Resources</li>
							</ul>
						</SubSectionTopic>
						</div>	
						<div className={classes.photo}>
						<SubSectionTopic
							title={"Poster Design"}
							color={textColor}
							pendulamColor={pendulamColor}
						>
							<ul>
								<li className={classes.postertitle}>{data.DimensionX.themes.poster.details}</li>
								<li onClick={()=>{click("https://drive.google.com/drive/folders/1NFHP4o76JnPZm-cbwDJZOnKSL46o6hbA?usp=sharing")}}>Resources</li>
							</ul>
						</SubSectionTopic>
						</div>
					</div>
				)}
			</SectionTopic>
		</section>
	);
};

export default Themes;
