import React from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import { technologies } from "../constants";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = ({ mobile }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I usually use</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {technologies.map((tech, index) => (
          <div key={index} className="w-28 h-28">
            <BallCanvas mobile={mobile} icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
