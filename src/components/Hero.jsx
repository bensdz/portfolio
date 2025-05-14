import React from "react";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";
import MotionBtn from "./MotionBtn";
import BlurText from "./animations/BlurText/BlurText";

const Hero = ({ isMobile }) => {
  return (
    <section className="relative w-full  h-screen mx-auto justify-center items-center ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:top-[90px]`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#ffffff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <div className={styles.heroHeadText}>
            <BlurText
              text="Hey There! This is "
              delay={150}
              animateBy="words"
              direction="top"
              className="inline"
            />
            <BlurText
              text="Farouk."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[#915eff] inline"
            />
          </div>

          <BlurText
            text="I build innovative web solutions and digital experiences."
            delay={250}
            animateBy="words"
            direction="top"
            className={styles.heroSubText}
          />
        </div>
      </div>

      <ComputerCanvas mobile={isMobile} />

      <MotionBtn />
    </section>
  );
};

export default Hero;
