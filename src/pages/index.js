import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <main>
      <ParallaxProvider>
        <GlobalStyles />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
        <Contact />
      </ParallaxProvider>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Corbin Cargil</title>;
