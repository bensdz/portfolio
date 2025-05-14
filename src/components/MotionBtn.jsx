import React from "react";
import { motion } from "framer-motion";

function MotionBtn() {
  const arrowVariants = {
    animate: (i) => ({
      y: [0, 10, 0],
      opacity: [1, 0.7, 1],
      transition: {
        delay: i * 0.2, // Stagger the animation
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center ">
      <a href="#about">
        <div className="flex flex-col items-center">
          <motion.div
            variants={arrowVariants}
            animate="animate"
            className="w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-full h-full text-gray-200"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.div>
        </div>
      </a>
    </div>
  );
}

export default MotionBtn;
