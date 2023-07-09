import React, { useState } from "react";
import GlobalStyles from "../../components/styles/Global";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Credits from "../../components/Credits";
import { Seo } from "../../components/seo";

//todo: setup breadcrumbs
//todo: set up loading state
//todo: update the about on the landing page to include "i like talking about anything theology (my  faith), tech, or somethign" or similar

const IndexPage = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <main>
      <GlobalStyles />
      <Navbar />
      <BlogList />
      <Footer setShowCredits={setShowCredits} />
      <Contact />
      {showCredits && <Credits setShowCredits={setShowCredits} />}
    </main>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Corbin Cargil - Blogs" />;

//todo: Write a blog about this: I believe that the reason we were created with minds that can think critically, solve problems, and express our creativity is because we have a creator that does the same, and I consider myself blessed that I found an outlet to do just that while getting to connect with great communities of people in the tech world.
