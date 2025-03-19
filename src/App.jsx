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
import { heroBg } from "./assets";

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
      <div
        className="relative bg-black-400 z-0 bg-repeat-y scrollbar-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div
        //className="bg-cover bg-center bg-no-repeat "
        //style={{ backgroundImage: `url(${heroBg})` }}
        >
          <Navbar mobile={isMobile} />
          <Hero isMobile={isMobile} />
        </div>
        <About />
        <Experience />
        <Tech mobile={isMobile} />
        <Works />

        <div className="relative z-10">
          <StarsCanvas />
          <Contact mobile={isMobile} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
