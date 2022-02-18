import React from 'react'
import classes from '../../../styles/AnalytIQ/Rules.module.css'
import data from '../../../data.json'

const Rules = () => {
    console.log(data.AnalytIQ.rules)
  return (
    <div className={classes.rulesSection}>
      <div className={classes.rulesContainer}>
        <div className={classes.title}>
         <h1>Rules and Regulations</h1>  
        </div>

        <div className={classes.description}>
            <div className={classes.singleCategory}>
                <ol className={classes.rules}>
                    {data.AnalytIQ.rules.map((rule) => {
                        return (
                            <li>{rule}</li>
                        )
                    })}
                </ol>
            </div>
          
        </div>

      </div>

      

    </div>
  )
}

export default Rules