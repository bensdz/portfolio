import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion.js";

function SectionWrapper(Component: React.ComponentType, idName: string) {
  return function Wrapper() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={` max-w-7xl mx-auto relative z-0`}
        style={{
          padding: "2.5rem 1.5rem",
          "@media (minWidth: 640px)": { padding: "4rem 1.5rem" },
        }}
      >
        <div id={idName} />
        <Component />
      </motion.section>
    );
  };
}

export default SectionWrapper;
