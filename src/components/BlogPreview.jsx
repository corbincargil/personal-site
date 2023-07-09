import React from "react";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledBlogPreview } from "./styles/BlogStyles";
import dayjs from "dayjs";

export default function BlogPreview({
  image,
  title,
  slug,
  date,
  excerpt,
  readTime,
}) {
  let featuredImg = getImage(image);
  const datePosted = dayjs(date).format("MMM DD, YYYY");
  return (
    <StyledBlogPreview onClick={() => navigate(`/blogs/${slug}`)}>
      <GatsbyImage
        id="blog-image"
        image={featuredImg}
        className="preview-image"
        alt={`${title} featured image`}
        loading="lazy"
      />
      <h2>{title}</h2>
      <p className="date-posted">{`${datePosted} - ${readTime} min. read`}</p>
      <p>{excerpt}</p>
      <div className="divider" />
    </StyledBlogPreview>
  );
}
