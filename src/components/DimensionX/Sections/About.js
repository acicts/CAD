import React from 'react'
import classes from '../../../styles/DimensionX/About.module.css'
import AboutImage from '../../../images/DimensionX/banner2.png'

const About = () => {
  return (
    <div className={classes.aboutSection}>
      <div className={classes.aboutContainer}>
        <div className={classes.title}>
         <p>What is</p>
         <h1>DimensionX</h1>  
        </div>

        <div className={classes.description}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque morbi vestibulum morbi sapien amet etiam euismod.
          </p>
          <p>
          Vitae ipsum vulputate nec nec dui urna, nec neque. Volutpat vulputate vestibulum mauris mauris sed fermentum. Habitasse sem facilisi semper bibendum quam nunc in. Nulla nec porttitor morbi faucibus felis, et, tincidunt donec id. 

          </p>
        </div>

        <button className={classes.registerButton}>Register</button>
      </div>

      <img src={AboutImage} className={classes.image}/>

    </div>
  )
}

export default About