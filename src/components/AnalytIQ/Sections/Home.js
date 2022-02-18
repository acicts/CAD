import React from 'react'
import classes from '../../../styles/AnalytIQ/Home.module.css'
import logo from '../../../images/AnalytIQ/logo.svg'

const Home = () => {
  return (
    <div className={classes.homeContainer}>

    <div className={classes.logoContainer}>
      <img src={logo} className={classes.logo}/>
    </div>

      <div className={classes.subTextContainer}>
        <p>Premier Inter-School Online Quiz</p>
        <p>Hosted By The ICT Society Of Ananda College</p>

        <div className={classes.buttonContainer}>
        <div className={classes.registerButton}>
          <a href='#'>
          Register Now
        </a>
        </div>

        <div className={classes.moreButton}>
          <a href='#'>
          More Details
        </a>
        </div>
        
      </div>
      </div>

      
    </div>
  )
}

export default Home