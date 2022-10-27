import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import GlobalStyles from "../components/styles/Global";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import hero from "../images/hero.jpg";

const IndexPage = () => {
  return (
    <main>
      <GlobalStyles />
      <Parallax
        pages={2}
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <ParallaxLayer speed={1}>
          <Hero />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9999} speed={2} factor={1}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Corbin Cargil</title>;
