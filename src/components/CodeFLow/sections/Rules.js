import React from 'react'
import SectionTopic from '../SectionTopic'
import classes from "../../../styles/CodeFLow/Rules.module.css";

const Rules = () => {
  return (
    <section className={classes.Container} id="rules">
    	<SectionTopic
    		title={"Rules & Regulations"}
    		color={"white"}
    		pendulamColor={"white"}
    	>
    		<ol>
    			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    			<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
    		</ol>
    	</SectionTopic>
    </section>
  )
}

export default Rules;