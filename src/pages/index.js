import * as React from "react";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { SEO } from "../components/seo";
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Credits from "../components/Credits";

const IndexPage = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <main>
      <ParallaxProvider>
        <GlobalStyles />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer setShowCredits={setShowCredits} />
        <Contact />
        {showCredits && <Credits setShowCredits={setShowCredits} />}
      </ParallaxProvider>
    </main>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Corbin Cargil - Portfolio" />;
