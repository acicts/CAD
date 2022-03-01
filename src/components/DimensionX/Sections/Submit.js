import { Button } from "@material-ui/core";
import classes from "../../../styles/DimensionX/Submit.module.css"
import { createTheme } from '@mui/material/styles';
import data from "../../../data.json"
import { useState,useEffect } from "react";
function Submit(){
    const calculateTimeLeft = () => {
		let year = new Date().getFullYear();
		let difference = +new Date(2022, 2, 11) - +new Date();
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
    const theme = createTheme({
        palette: {
            
            secondary: {
              main: '#11cb5f',
            },
          },
      });
      function click(){
          window.open(data.DimensionX.submit.link)
      }
    return(
        <div className={classes.Container} id="submit">
            <h1 className={classes.header}>Project Submission
			
            <Button className={classes.submit} color="secondary" variant="outlined" size="large" onClick={click}>Submit</Button>
            </h1>
            <div className={classes.TimeContainer}>
						<h1>Project Submission Ends In</h1>
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
        </div>
    )
}
export default Submit;