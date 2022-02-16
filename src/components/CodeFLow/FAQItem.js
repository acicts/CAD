import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import classes from "../../styles/CodeFLow/FAQItem.module.css";


const FAQItem = ({ title, body, index, currIndex, changeIndexHandler }) => {
	return (
		<div>
			<div className={classes.TopContainer} onClick={() => { changeIndexHandler(index); }}>
				<span><ArrowRightIcon /></span>
				<span className={classes.Title}>{ title }</span>
			</div>
			{
				currIndex === index && <div className={classes.BottomContainer}>
					<div className={classes.Bar}><div></div></div>
					<div className={classes.Text}><p>{ body }</p></div>
				</div>
			}
		</div>
	)
}

export default FAQItem;