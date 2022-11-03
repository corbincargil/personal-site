import React, { useState, useRef, useEffect, startTransition } from "react";
import { StyledHero, Logo } from "./styles/Hero.styled";
import Navbar from "./Navbar";
import logo from "../images/corbin-logo-white-cropped.png";
import { Parallax } from "react-scroll-parallax";

import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CELLS({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x108c,
          color2: 0x160a37,
          size: 2.5,
          speed: 2.5,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <StyledHero>
      <div id="animation" ref={myRef} onScroll={startTransition}>
        <Navbar />
        <Parallax speed={15}>
          <Logo id="banner">
            <img src={logo} alt="Corbin Cargil logo" />
          </Logo>
        </Parallax>
        <p>
          <a href="https://www.pexels.com/photo/blue-and-white-starry-night-sky-4644812/">
            Photo by Felix Mittermeier:
          </a>
        </p>
      </div>
    </StyledHero>
  );
}
