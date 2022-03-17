import React from 'react';
import SectionTopic from '../SectionTopic';
import data from '../../../data.json';
import classes from '../../../styles/CodeFLow/LeaderBoard.module.css';
import { GitHub } from '@material-ui/icons';

const LeaderBoard = () => {
  const textColor = '#07253a';
  const pendulamColor = '#07253a';
  return (
    <section className={classes.Container} id="standing">
      <SectionTopic
        title={'Leaderboard'}
        color={textColor}
        pendulamColor={pendulamColor}
        childrenStyle={{ height: 'max-content' }}
        containerStyles={{ height: 'max-content' }}
      >
        <div className={classes.SubContainer}>
          <h2>Senior Category</h2>
          <div className={classes.ProjectContainer}>
            {data.codeflow.leaders.senior.map((leader) => {
              return (
                <div className={classes.LeaderItem}>
                  <div
                    style={{
                      background: `url(${leader.image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                    className={classes.Image}
                  ></div>
                  <div className={classes.BottomBar}>
                    <div>
                      <h3>{leader.title}</h3>

                      <span>By {leader.team_name}</span>
                    </div>

                    <a href={leader.github} rel="noreferrer" target="_blank">
                      <GitHub />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <h2>Junior Category</h2>
          <div className={classes.ProjectContainer}>
            {data.codeflow.leaders.junior.map((leader) => {
              return (
                <div className={classes.LeaderItem}>
                  <div
                    style={{
                      background: `url(${leader.image})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                    className={classes.Image}
                  ></div>
                  <h3>{leader.title}</h3>
                  <div className={classes.BottomBar}>
                    <span>By {leader.team_name}</span>
                    <a href={leader.github} rel="noreferrer" target="_blank">
                      <GitHub />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionTopic>
    </section>
  );
};

export default LeaderBoard;
