import React from "react";
import { StyledFeaturedProjectsDisplay } from "./styles/Projects.styled";
import { useState, useEffect } from "react";
import shoppingCart from "../images/shopping-cart.png";
import waldo from "../images/waldo.png";
import etchASketch from "../images/etch-a-sketch.png";
import left from "../images/left.png";
import right from "../images/right.png";

export default function FeaturedProjectsDisplay() {
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
      <div id="main-display">
        <h3>{project.name}</h3>
        <div id="preview-container">
          <img src={left} className="button" onClick={previousImage} />
          <div id="image-container">
            <a id="live-link" href={project.liveLink}>
              <img
                src={project.image}
                className="project-image"
                alt="Featured project image"
              />
            </a>
          </div>
          <img src={right} className="button" onClick={nextImage} />
        </div>
      </div>
      <div id="tag-container">
        <ul>
          {project.tags.map((tag) => {
            return (
              <li className="tag" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
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
    id: 1,
  },
  {
    name: "Shopping Cart",
    image: shoppingCart,
    tags: ["React", "State management", "ES6", "Hooks"],
    liveLink: "corbincargil.github.io/shopping-cart/",
    repoLink: "https://github.com/corbincargil/shopping-cart",
    id: 2,
  },
  {
    name: "Etch-a-Sketch",
    image: etchASketch,
    tags: ["DOM-manipulation", "ES6", "HTML & CSS"],
    liveLink: "corbincargil.github.io/etch-a-sketch/",
    repoLink: "https://github.com/corbincargil/etch-a-sketch",
    id: 3,
  },
];
