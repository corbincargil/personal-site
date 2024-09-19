import * as React from "react";
import { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Seo } from "../components/seo";
import GlobalStyles from "../components/styles/Global";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Credits from "../components/Credits";
import ScrollToTop from "../components/ScrollToTop";

const IndexPage = () => {
  const [showCredits, setShowCredits] = useState(false);

  React.useEffect(() => {
    const userData = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: document.referrer,
    };

    fetch("/.netlify/functions/send-email", {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <main>
      <ParallaxProvider>
        <GlobalStyles />
        <Hero />
        <About />
        <Projects />
        <ScrollToTop />
        <Skills />
        <Footer setShowCredits={setShowCredits} />
        <Contact />
        {showCredits && <Credits setShowCredits={setShowCredits} />}
      </ParallaxProvider>
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Corbin Cargil - Portfolio" />;
