import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./hoc/SectionWrapper";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#1a1a1a] rounded-2xl sm:w-[360px] w-full"
        style={{ padding: "20px" }}
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div
            className="absolute inset-0 flex justify-end card-img_hover"
            style={{ margin: "10px" }}
          >
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p
            className=" text-secondary text-[14px]"
            style={{ marginTop: "10px" }}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2" style={{ marginTop: "10px" }}>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This is a collection of some of the projects I have worked on. Some of
          them are personal projects, while others are freelance work. I have
          worked on a variety of projects, ranging from web development to
          mobile app development. Each project is linked to its source code on
          GitHub.
        </motion.p>
      </div>

      <div
        className="flex flex-wrap gap-15 justify-center items-center"
        style={{ marginTop: "50px" }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
