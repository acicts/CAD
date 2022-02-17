import React from "react";
import SectionTopic from "../SectionTopic";
import classes from "../../../styles/CodeFLow/Contact.module.css";

const Contact = () => {
	return (
		<section className={classes.Container} id="contact">
			<SectionTopic
				title={"Contact"}
				color={"white"}
				pendulamColor={"white"}
				barStyle={{ height: "40vh" }}
				containerStyles={{ height: "50vh" }}
				childrenStyle={{ height: "30vh" }}
			>
				<p>
					Join Our{" "}
					<a href="https://github.com" rel="noreferrer" target="_blank">
						Whatsapp Group
					</a>
				</p>
				<p>
					Join Our{" "}
					<a href="https://github.com" rel="noreferrer" target="_blank">
						Discord Server
					</a>
				</p>
				<ul>
					<li>
						Manula Thejan: <a href="https://github.com">071 234 5678</a>
					</li>
					<li>
						Manula Thejan: <a href="https://github.com">071 234 5678</a>
					</li>
					<li>
						Manula Thejan: <a href="https://github.com">071 234 5678</a>
					</li>
				</ul>
			</SectionTopic>
		</section>
	);
};

export default Contact;
