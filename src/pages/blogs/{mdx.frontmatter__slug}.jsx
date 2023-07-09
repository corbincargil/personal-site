import React, { useState } from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledBlog } from "../../components/styles/BlogStyles";
import GlobalStyles from "../../components/styles/Global";
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
      <GlobalStyles />
      <Navbar />
      <StyledBlog>
        <div className="title-container">
          <h1 className="blog-title">{data.mdx.frontmatter.title}</h1>
          <h3 className="blog-subheading">
            {data.mdx.frontmatter.date} -{" "}
            {Math.ceil(data.mdx.frontmatter.wordCount / 200)} min. read
          </h3>
        </div>
        {featuredImg && (
          <div className="image-container">
            <GatsbyImage
              className="featured-image"
              image={featuredImg}
              alt={`${data.mdx.frontmatter.title} featured image`}
            />
            <span className="image-credit">
              Image by:{" "}
              <a
                className="image-credit-link"
                href={data.mdx.frontmatter.imageUrl}
              >
                {data.mdx.frontmatter.photographer}
              </a>
            </span>
          </div>
        )}
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
        imageUrl
        photographer
        wordCount
      }
    }
  }
`;
export default BlogPost;

export const Head = ({ data }) => <Seo title={`Corbin Cargil - Blogs`} />;
