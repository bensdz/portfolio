import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import ComputerCanvas from "./canvas/Computers";
import MotionBtn from "./MotionBtn";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 450) {
      setIsMobile(true);
    }
  }, []);
  return (
    <section className="relative w-full h-screen mx-auto justify-center items-center bg-[url(./6173954.jpg)] bg-cover bg-center bg-no-repeat">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
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
          {/* <div className="flex flex-row gap-3 mt-5">
            <button className="btn-primary">Get Started</button>
          </div> */}
        </div>
      </div>

      <ComputerCanvas mobile={isMobile} />

      <MotionBtn />
    </section>
  );
};

export default Hero;
