import React from 'react'
import SectionTopic from '../SectionTopic'
import classes from "../../../styles/CodeFLow/About.module.css";

const About = () => {
  return (
    <section className={classes.Container} id="about">
    	<SectionTopic
    		title={"What is CodeFLow?"}
    		color={"white"}
    		pendulamColor={"white"}
    	>
    		<p className={classes.Para}>
    			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut. Quis vel eros donec ac odio tempor orci dapibus. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Quis blandit turpis cursus in. Aenean vel elit scelerisque mauris. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Arcu risus quis varius quam quisque id diam. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Cras adipiscing enim eu turpis egestas pretium. Tincidunt praesent semper feugiat nibh. Tellus id interdum velit laoreet id donec ultrices tincidunt.
    		</p>
    		<p className={classes.Para}>
    			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut. Quis vel eros donec ac odio tempor orci dapibus. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Quis blandit turpis cursus in. Aenean vel elit scelerisque mauris. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Arcu risus quis varius quam quisque id diam. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Cras adipiscing enim eu turpis egestas pretium. Tincidunt praesent semper feugiat nibh. Tellus id interdum velit laoreet id donec ultrices tincidunt.
    		</p>
    	</SectionTopic>
    </section>
  )
}

export default About