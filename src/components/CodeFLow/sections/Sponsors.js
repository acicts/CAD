import React from 'react';
import Sponsor1Logo from '../../../images/CodeFlow/sponsor-1.png';
import Sponsor2Logo from '../../../images/CodeFlow/sponsor-2.png';
import SectionTopic from '../SectionTopic';
import data from '../../../data.json';
import classes from '../../../styles/CodeFLow/Sponsors.module.css';

const Sponsors = () => {
  return (
    <section className={classes.Container} id="sponsors">
      <SectionTopic title={'Sponsors'} color={'white'} pendulamColor={'white'}>
        <div className={classes.LogoContainer}>
          <a href="https://99x.io/" target="_blank">
            <img src={Sponsor1Logo} alt="99x-logo" />
            <p>Educational Sponsor</p>
          </a>
          <a href="https://zone24x7.com/" target="_blank">
            <img src={Sponsor2Logo} alt="24x7-logo" />
            <p>Financial Sponsor</p>
          </a>
        </div>
      </SectionTopic>
    </section>
  );
};

export default Sponsors;
