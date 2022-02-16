import React from 'react'
import SectionTopic from '../SectionTopic'
import SubSectionTopic from '../SubSectionTopic'
import classes from "../../../styles/CodeFLow/Themes.module.css";

const Themes = () => {
	const textColor = "#07253a";
	const pendulamColor = "#07253a";
  return (
    <section className={classes.Container} id="themes">
    	<SectionTopic
    		title={"Themes"}
    		color={textColor}
    		pendulamColor={pendulamColor}
    	>
    		<div className={classes.SubContainer}>
    			<SubSectionTopic 
    				title={"Senior Category"}
    				color={textColor}
    				pendulamColor={pendulamColor}
    			>
    				<ul>
    					<li>Senior Theme ABCDE</li>
    					<li>Senior Theme ABCDE</li>
    					<li>Senior Theme ABCDE</li>
    					<li>Senior Theme ABCDE</li>
    					<li>Senior Theme ABCDE</li>
    				</ul>
    			</SubSectionTopic>
    			<SubSectionTopic 
    				title={"Junior Category"}
    				color={textColor}
    				pendulamColor={pendulamColor}
    			>
    				<ul>
    					<li>Junior Theme ABCDE</li>
    					<li>Junior Theme ABCDE</li>
    					<li>Junior Theme ABCDE</li>
    				</ul>
    			</SubSectionTopic>
    		</div>
    	</SectionTopic>
    </section>
  )
}

export default Themes