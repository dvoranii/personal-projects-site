// src/data/projectData.js
import project1Thumb from "/assets/project1-thumb.png";
import project2Thumb from "/assets/video-component-screenshot.png";
import project3Thumb from "/assets/dendritic-branching-thumb.png";

const projectData = [
  {
    title: "Truck Scrolling Animation with basicScroll.js",
    titleURL: "project1",
    thumbnail: project1Thumb,
    description:
      "This project leverages basicScroll.js to drive a truck’s horizontal movement across a canvas-rendered backdrop. As users scroll, the truck progresses, and its wheels, designed as individual React components, rotate. A checkbox allows users to switch the backdrop between a cloud-filled sky and a starry night, both created using HTML canvas. All animations are encapsulated within a React framework, promoting component reusability and a structured codebase. This initiative showcases the effective union of scroll-driven events with web animations.",
  },
  {
    title: `Custom Web Component - Video Player`,
    titleURL: "project2",
    thumbnail: project2Thumb,
    description: `This video player is a custom-built web component crafted using vanilla JavaScript and the lit-html library, which offers efficient, expressive, and extensible templates. Instead of relying on out-of-the-box solutions, I took the challenge to build a video player from scratch to understand the intricacies and nuances of media playback in web browsers.`,
  },
  {
    title: "Dendritic Branching Visualizer: Nature's Pattern at Play",
    titleURL: "project3",
    thumbnail: project3Thumb,
    description:
      "Ever wonder about the magic behind lightning bolts, brain cell networks, plant roots, or mycelial connections? They all share a mesmerizing pattern - dendritic branching. Here's a closer look at how our visualizer brings this pattern to life:",
  },
];

export default projectData;
