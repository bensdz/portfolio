/* eslint-disable react/no-unknown-property */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import SectionWrapper from "./hoc/SectionWrapper.js";

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <Tilt className="xs:w-[250px] w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        style={{ padding: 1 }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] leading-8 max-w-3xl"
      >
        I am a full-stack web developer with a passion for creating beautiful,
        responsive, and user-friendly websites. I am a self-taught developer
        with a background in Software Engineering. I&apos;m a quick learner and
        I am always looking for new technologies to learn and implement in my
        work.
      </motion.p>

      <div
        className={`mt-30 flex flex-wrap gap-${
          services.length > 3 ? 10 : 5
        } justify-center items-center`}
        style={{ marginTop: 30 }}
      >
        {services.map((service: any, index: number) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
