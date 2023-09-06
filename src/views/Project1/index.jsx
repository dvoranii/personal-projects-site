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
        Truck Scrolling Animation with basicScroll.js and GSAP
      </h1>
      <p className="project--intro">
        This project integrates the functionality of basicScroll.js with the
        animation capabilities of GSAP to render a truck moving across a
        backdrop of clouds. As the user scrolls, basicScroll.js triggers the
        animation sequences: the truck moves horizontally, and the wheels, each
        being a separate React component, exhibit a rotation effect. The cloud
        canvas creates a static background to highlight the truck&apos;s motion.
        The entire animation is embedded within a React-based structure,
        ensuring component reusability and a clean separation of concerns. The
        project demonstrates an efficient way to combine scrolling events with
        intricate animations in a web environment.
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
          <GitRepoLink url="https://github.com/yourusername/yourrepository" />
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
