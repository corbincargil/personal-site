import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Credits from "../../components/Credits";
import { Seo } from "../../components/seo";

//todo: setup breadcrumbs
//todo: set up loading state

const IndexPage = () => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <main>
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
