import React, { useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StyledHero } from "./styles/Hero.styled";
import Navbar from "./Navbar";
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
      {myRef ? (
        <div id="animation" ref={myRef}>
          <Navbar />
          <Parallax speed={25}>
            <StaticImage
              id="banner"
              src="../images/corbin-logo-white-cropped.png"
              alt="Corbin Cargil logo (white)"
              placeholder="none"
              style={{
                top: "50vh",
              }}
              draggable="false"
              loading="lazy"
            />
          </Parallax>
        </div>
      ) : (
        <div id="animation">
          <Navbar />
          <Parallax speed={25}>
            <StaticImage
              id="banner"
              src="../images/corbin-logo-white-cropped.png"
              alt="Corbin Cargil logo (white)"
              placeholder="none"
              style={{
                top: "50vh",
              }}
              draggable="false"
              loading="lazy"
            />
          </Parallax>
        </div>
      )}
    </StyledHero>
  );
}
