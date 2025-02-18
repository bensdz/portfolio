import React from "react";
import { motion } from "framer-motion";

function MotionBtn() {
  return (
    <div className="absolute xs:bottom-20  bottom-1 w-full flex justify-center items-center ">
      <a href="#about">
        <div className="w-[25px] h-[38px] rounded-3xl border-4 border-gray-300 flex justify-center items-start p-2">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className=" bg-gray-300 border-4"
            style={{
              height: "3px",
              width: "3px",
              borderRadius: "50%",
              backgroundColor: "#D1D5DC",
              size: "3px",
            }}
          />
        </div>
      </a>
    </div>
  );
}

export default MotionBtn;
