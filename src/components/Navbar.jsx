import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  return (
    <nav
      className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    ></nav>
  );
};

export default Navbar;
