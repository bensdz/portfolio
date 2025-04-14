import { Suspense, lazy } from "react";
import SectionWrapper from "./hoc/SectionWrapper";
import { technologies } from "../constants";
const BallCanvas = lazy(() => import("./canvas/Ball"));
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import PropTypes from "prop-types"; // Import PropTypes

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
            <Suspense fallback={null}>
              {" "}
              {/* Or a simple loader */}
              <BallCanvas mobile={mobile} icon={tech.icon} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

// Add prop type validation
Tech.propTypes = {
  mobile: PropTypes.bool,
};

export default SectionWrapper(Tech, "tech");
