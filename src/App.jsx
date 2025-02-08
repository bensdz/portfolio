import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import StarsCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <BrowserRouter>
      <div className="relative bg-black-400">
        <div className="bg-cover bg-center bg-no-repeat bg-hero-pattern">
          <Navbar mobile={isMobile} />
          <Hero isMobile={isMobile} />
        </div>
        <About />
        <Experience />
        <Tech mobile={isMobile} />
        <Works />
        <div className="relative z-0">
          <Contact mobile={isMobile} />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
