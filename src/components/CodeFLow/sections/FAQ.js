import React, { useState } from "react";
import SectionTopic from "../SectionTopic";
import FAQItem from "../FAQItem";
import classes from "../../../styles/CodeFLow/FAQ.module.css";
import data from "../../../data.json";

const FAQ = () => {
  const textColor = "#07253a";
  const pendulamColor = "#07253a";
  const [currIndex, setCurrIndex] = useState(null);

  const changeIndexHandler = (index) => {
    console.log(index);
    if (index === currIndex) {
      setCurrIndex(null);
    } else setCurrIndex(index);
  };
  return (
    <section className={classes.Container} id="faq">
      <SectionTopic
        title={"Frequently Asked Questions"}
        color={textColor}
        pendulamColor={pendulamColor}
      >
        <div className={classes.QuestionContainer}>
          {data.codeflow.faq.map((item, i) => {
            return (
              <FAQItem
                title={item.question}
                body={item.Answer}
                index={i}
                currIndex={currIndex}
                link={item.link}
                changeIndexHandler={changeIndexHandler}
                target={item.target}
              />
            );
          })}
        </div>
      </SectionTopic>
    </section>
  );
};

export default FAQ;
