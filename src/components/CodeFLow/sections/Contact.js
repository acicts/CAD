import React from "react";
import SectionTopic from "../SectionTopic";
import classes from "../../../styles/CodeFLow/Contact.module.css";

const Contact = () => {
  return (
    <section className={classes.Container} id="contact">
      <SectionTopic
        title={"Contact"}
        color={"white"}
        pendulamColor={"white"}
        barStyle={{ height: "40vh" }}
        containerStyles={{ height: "50vh" }}
        childrenStyle={{ height: "30vh" }}
      >
        <p>
          Join Our{" "}
          <a
            href="https://discord.gg/3RRevZHevY"
            rel="noreferrer"
            target="_blank"
          >
            Discord Server
          </a>
        </p>
        <ul>
          <li>
            Chamindu Amarasinghe:{" "}
            <a
              href="https://web.whatsapp.com/send?phone=94711436311"
              rel="noreferrer"
              target="_blank"
            >
              071 143 6311
            </a>
          </li>
          <li>
            Bihandu De Silva:{" "}
            <a
              href="https://web.whatsapp.com/send?phone=94716071187"
              rel="noreferrer"
              target="_blank"
            >
              071 607 1187
            </a>
          </li>
        </ul>
      </SectionTopic>
    </section>
  );
};

export default Contact;
