import React from "react";
import { StyledFeaturedProjectsDisplay } from "./styles/Projects.styled";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import shoppingCart from "../images/shopping-cart.png";
import waldo from "../images/waldo.png";
import etchASketch from "../images/etch-a-sketch.png";
import left from "../images/left.png";
import right from "../images/right.png";

export default function FeaturedProjectsDisplay() {
  const contentRef = useRef(null);
  const contentIsInView = useInView(contentRef, { once: true });
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const [num, setNum] = useState(0);
  const [project, setProject] = useState(featuredProjects[num]);

  useEffect(() => {}, []);

  useEffect(() => {
    setProject(featuredProjects[num]);
  }, [num]);

  function previousImage() {
    if (num > 0) {
      setNum((prevNum) => prevNum - 1);
    } else if (num === 0) {
      setNum(featuredProjects.length - 1);
    }
  }

  function nextImage() {
    if (num < featuredProjects.length - 1) {
      setNum((prevNum) => prevNum + 1);
    } else if (num === featuredProjects.length - 1) {
      setNum(0);
    }
  }

  return (
    <StyledFeaturedProjectsDisplay>
      <motion.div
        id="main-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* <motion.h3 variants={item}>{project.name}</motion.h3> */}
        <motion.div variants={item} id="preview-container">
          <motion.img
            src={left}
            className="button"
            onClick={previousImage}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div
            id="image-container"
            ref={contentRef}
            animate={
              contentIsInView
                ? {
                    animationDelay: 3000,
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 5, -5, 0],
                  }
                : 0
            }
            transition={{
              delay: 1,
            }}
          >
            <a id="live-link" href={project.liveLink}>
              <img
                src={project.image}
                className="project-image"
                alt="Featured project image"
              />
            </a>
          </motion.div>
          <motion.img
            src={right}
            className="button"
            onClick={nextImage}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      </motion.div>
      <div id="secondary-content">
        <motion.h3 id="project-name" variants={item}>
          {project.name}
        </motion.h3>
        <div id="description-container">
          <h3 id="description-heading">Description:</h3>

          <p>{project.description}</p>
        </div>
        <div id="tag-container">
          <motion.ul variants={container} initial="hidden" animate="visible">
            {project.tags.map((tag) => {
              return (
                <motion.li className="tag" key={tag} variants={item}>
                  {tag}
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </StyledFeaturedProjectsDisplay>
  );
}

const featuredProjects = [
  {
    name: "Where's Waldo",
    image: waldo,
    tags: ["Firebase", "React", "State management", "Firestore"],
    liveLink: "corbincargil.github.io/waldo/",
    repoLink: "https://github.com/corbincargil/waldo",
    description:
      "This photo-tagging app is based on the game Where's Waldo. It was buit using React for the front end and Firebase for the back end. Users can start by selecting an image to play, then search for and select each of the characters for that image. A timer will start once the game begins to track the user's score.",
    id: 1,
  },
  {
    name: "Shopping Cart",
    image: shoppingCart,
    tags: ["React", "State management", "ES6", "Hooks"],
    liveLink: "corbincargil.github.io/shopping-cart/",
    repoLink: "https://github.com/corbincargil/shopping-cart",
    description:
      "This is a mock online shopping website based on skatewarehouse.com that was built using React. Users can navigate the website, shop for different products based on brand or product type, add items to the cart, and 'checkout' to submit their order. The primary goals of this project were to 1) practice using React Router to navigate to different pages on the site and 2) practice using hooks to manipulate state accross components (for example, allowing a user to add a product to their cart from the Shop page and have the added product and all its info appear on the Cart page).",
    id: 2,
  },
  {
    name: "Etch-a-Sketch",
    image: etchASketch,
    tags: ["DOM-manipulation", "ES6", "HTML & CSS"],
    liveLink: "corbincargil.github.io/etch-a-sketch/",
    repoLink: "https://github.com/corbincargil/etch-a-sketch",
    description:
      "This etch-a-sketch project is a simple sketching interface that allows the user to make pixel art by clicking and dragging their mouse through the grid. The grid can be reset and the number of rows & columns on the grid adjusted as well. The primary goal of this project was to practice using advanced DOM manipulation to make an interactive web page.",
    id: 3,
  },
];
