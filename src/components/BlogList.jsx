import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StyledBlogList } from "./styles/BlogStyles";
import BlogPreview from "./BlogPreview";

export default function BlogList() {
  //! set loading state (is there a way to make this async?)
  const blogList = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            date
            slug
            excerpt
            live
            wordCount
          }
          id
        }
      }
    }
  `);

  return (
    <StyledBlogList>
      <h1>My posts:</h1>
      <ul className="blog-container">
        {blogList.allMdx.nodes
          .filter((b) => b.frontmatter.live)
          .map((b) => {
            return (
              <BlogPreview
                image={b.frontmatter.featuredImage}
                title={b.frontmatter.title}
                date={b.frontmatter.date}
                slug={b.frontmatter.slug}
                excerpt={b.frontmatter.excerpt}
                readTime={Math.ceil(b.frontmatter.wordCount / 200)}
                key={b.frontmatter.title}
              />
            );
          })}
      </ul>
    </StyledBlogList>
  );
}
