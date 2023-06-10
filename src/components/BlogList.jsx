import React from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { StyledBlogList } from "./styles/BlogList.styled";

export default function BlogList() {
  const blogList = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
            date
            slug
            excerpt
          }
          id
        }
      }
    }
  `);

  return (
    <StyledBlogList>
      <h1>These are my blogs:</h1>
      <ul>
        {blogList.allMdx.nodes.map((b) => {
          return (
            <li key={b.frontmatter.title}>
              <h2 onClick={() => navigate(`/blogs/${b.frontmatter.slug}`)}>
                {b.frontmatter.title}
              </h2>
              <p className="date-posted">{`Posted: ${b.frontmatter.date}`}</p>
              <p>{b.frontmatter.excerpt}</p>
              <div className="divider" />
            </li>
          );
        })}
      </ul>
    </StyledBlogList>
  );
}
