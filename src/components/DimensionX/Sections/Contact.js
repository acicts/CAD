import React from "react";
import classes from "../../../styles/DimensionX/Contact.module.css";
import AboutImage from "../../../images/DimensionX/banner3.png";

const Contact = () => {
	return (
		<div className={classes.aboutSection}>
			<div className={classes.aboutContainer}>
				<div className={classes.title}>
					<p>Contact our</p>
					<h1>Team</h1>
				</div>

				<div className={classes.description}>
					<p>
						Join Our{" "}
						<a
							href="https://discord.gg/ZSGwAMyf"
							rel="noreferrer"
							target="_blank"
						>
							Discord Server
						</a>
					</p>
					<p>
						Thisuka - <span>077 366 6043</span>
					</p>
					<p>
						Manula - <span>077 976 1567 (WhatsApp only)</span>
					</p>
					<p>
						Janiru - <span>077 725 9574 (WhatsApp only)</span>
					</p>
					<p>
						Pasindu - <span>071 848 8275 (WhatsApp only)</span>
					</p>
				</div>

				<footer className={classes.footer}>
					<p>
						A Project By{" "}
						<a
							href="https://github.com/acicts/"
							target={"_blank"}
							rel="noreferrer"
						>
							ACICTS
						</a>
					</p>
					<p>© Copyright reserved 2022 </p>
				</footer>
			</div>

			<img src={AboutImage} className={classes.image} alt="dimx-cover" />
		</div>
	);
};

export default Contact;
