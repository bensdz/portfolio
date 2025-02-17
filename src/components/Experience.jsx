import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import SectionWrapper from "./hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
import { experiences } from "../constants";

const ExperienceCard = ({ experience, index }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1a1a1a", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #1a1a1a" }}
      date={experience.date}
      iconStyle={{
        background: "#1a1a1a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      icon={
        <img
          src={experience.icon}
          alt="icon"
          className="w-[60%] h-[60%] mx-auto"
        />
      }
      key={index}
    >
      <motion.h3
        className="vertical-timeline-element-title font-bold text-lg"
        variants={textVariant()}
      >
        {experience.title}
      </motion.h3>
      <motion.h4
        className="vertical-timeline-element-subtitle"
        variants={textVariant()}
      >
        {experience.company_name}
      </motion.h4>
      <motion.p className="mt-4" variants={textVariant()}>
        {experience.points.map((point, index) => (
          <span key={index} className="block">
            • {point}
          </span>
        ))}
      </motion.p>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> What I&apos;ve done</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
