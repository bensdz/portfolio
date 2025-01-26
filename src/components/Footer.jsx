import React from "react";
import logo from "../assets/code.png";
import { github, linkedin, twitter } from "../assets";

function Footer() {
  return (
    <div className="bg-[#151030] py-5 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />

          <p className="cursor-pointer bg-gradient-to-r from-[#8673f3] via-[#a083f6] to-[#cd9ffc] inline-block text-transparent bg-clip-text font-bold text-xl">
            &nbsp; FarSWE
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="
            https://www.linkedin.com/in/farouk-benslimane"
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium mr-4"
          >
            <img
              src={linkedin}
              alt="github"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="
            https://www.X.com/itisbens"
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium mr-4"
          >
            <img
              src={twitter}
              alt="github"
              className="w-6 h-6 object-contain"
            />
          </a>
          <a
            href="https://github.com/bensdz"
            target="_blank"
            rel="noreferrer"
            className="text-white font-medium"
          >
            <img src={github} alt="github" className="w-6 h-6 object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
