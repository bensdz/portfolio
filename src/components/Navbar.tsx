import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.js";
import logo from "../assets/code.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants/index.js";

/* fix: paddings and styling */

const Navbar = ({ mobile }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {}, []);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#000000be]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-8 h-8 object-contain" />

          <p className="cursor-pointer bg-gradient-to-r from-[#8673f3] via-[#a083f6] to-[#cd9ffc] inline-block text-transparent bg-clip-text font-bold text-xl">
            FarSWE
          </p>
        </Link>
        <ul className="list-none hidden sm:flex gap-10 flex-row justify-end ">
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className={`${
                active === nav.title ? "text-white" : "text-gray-300"
              } hover:text-white text-[18px] font-medium cursor-pointer font-montserrat uppercase`}
              onClick={() => {
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="list-none flex justify-end items-start flex-col gap-4 sm:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => {
              setActive("menu");
            }}
          >
            <img
              src={!toggle ? menu : close}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              style={{
                paddingLeft: mobile ? "10px" : "54px",
                paddingRight: mobile ? "10px" : "64px",
                paddingTop: mobile ? "10px" : "10px",
                paddingBottom: mobile ? "10px" : "10px",
              }}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[15px] ml-2 ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
