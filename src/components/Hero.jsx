import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";
import MotionBtn from "./MotionBtn";

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
          <h1 className={styles.heroHeadText}>
            This is <span className="text-[#915eff]">Farouk</span>
            &apos;s Portfolio
          </h1>
          <p className={styles.heroSubText}>
            I am a Full Stack Developer, entrepreneur, and a tech enthusiast.
          </p>
        </div>
      </div>

      <ComputerCanvas mobile={isMobile} />

      <MotionBtn />
    </section>
  );
};

export default Hero;
