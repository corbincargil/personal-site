import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledBlog } from "../../components/styles/Blog.styled";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Credits from "../../components/Credits";
import { Seo } from "../../components/seo";

//todo: add a back <-- button to go back to blog list (remove nav bar? include bread crumbs?)
//todo: get better idea of how the queries and children work
//todo: use prism-react-renderer library (or similar) to display code blocks

const BlogPost = ({ data, children }) => {
  const [showCredits, setShowCredits] = useState(false);

  let featuredImg = getImage(
    data.mdx.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
  );

  return (
    //? do I need this main tag?
    <main>
      <Navbar />
      <StyledBlog>
        <h1 className="blog-title">{data.mdx.frontmatter.title}</h1>
        {featuredImg && <GatsbyImage image={featuredImg} />}
        <h3 className="blog-subheading">{data.mdx.frontmatter.date}</h3>
        <div className="blog-body">{children}</div>
      </StyledBlog>
      <Footer setShowCredits={setShowCredits} />
      <Contact />
      {showCredits && <Credits setShowCredits={setShowCredits} />}
    </main>
  );
};

//! set loading state (is there a way to make this async?)
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "dddd DD MMMM YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
    }
  }
`;
export default BlogPost;

export const Head = ({ data }) => <Seo title={`Corbin Cargil - Blogs`} />;
