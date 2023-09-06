import "./styles.css";
import { useState } from "react";
import ProjectTemplate from "../../components/ProjectTemplate";
import Truck from "./components/Truck";
import GitRepoLink from "../../components/GitRepo";

const Project1 = () => {
  const [isNight, setIsNight] = useState(false);

  const handleToggleNight = () => {
    setIsNight((prevIsNight) => !prevIsNight);
  };

  return (
    <ProjectTemplate>
      <h1 className="project--title">
        Truck Scrolling Animation with basicScroll.js
      </h1>
      <p className="project--intro">
        The project leverages basicScroll.js to drive a truck&apos;s horizontal
        movement across a backdrop, created with HTML canvas. As users scroll,
        the truck progresses and its wheels, designed as individual React
        components, rotate. All animations are encapsulated within a React
        framework, promoting component reusability and a structured codebase.
        This initiative showcases the effective union of scroll-driven events
        with web animations.
      </p>
      <br />

      <div className="git--wrapper__outer">
        <div className="git--wrapper__inner">
          <div>Vanilla JS version:</div>
          <GitRepoLink url="https://github.com/dvoranii/basicScroll-truck-GSAP" />
        </div>
        |
        <div className="git--wrapper__inner">
          <div>React version:</div>
          <GitRepoLink url="https://github.com/dvoranii/personal-projects-site/tree/main/src/views/Project1" />
        </div>
      </div>

      <br />
      <div className="set-night-wrapper">
        <label htmlFor="setScene">Set night</label>
        <input
          name="setScene"
          type="checkbox"
          checked={isNight}
          onChange={handleToggleNight}
        />
      </div>
      <div className="truck--wrapper">
        <div className="truck--spacer__1"></div>
        <Truck isNight={isNight}></Truck>
        <div className="truck--spacer__2"></div>
      </div>
    </ProjectTemplate>
  );
};

export default Project1;
