import React, { useState } from "react";
import { graphql } from "gatsby";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Credits from "../../components/Credits";
import { Seo } from "../../components/seo";

//todo: add a back <-- button to go back to blog list (remove nav bar? include bread crumbs?)

const BlogPost = ({ data, children }) => {
  const [showCredits, setShowCredits] = useState(false);

  return (
    <main>
      <Navbar />
      <h1>{data.mdx.frontmatter.title}</h1>
      <h3>{data.mdx.frontmatter.date}</h3>
      {children}
      <Footer setShowCredits={setShowCredits} />
      <Contact />
      {showCredits && <Credits setShowCredits={setShowCredits} />}
    </main>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "dddd DD MMMM YYYY")
      }
    }
  }
`;
export default BlogPost;

export const Head = ({ data }) => <Seo title={`Corbin Cargil - Blogs`} />;
