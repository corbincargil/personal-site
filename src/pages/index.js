import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <main>
      <ParallaxProvider>
        <GlobalStyles />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </ParallaxProvider>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Corbin Cargil</title>;
