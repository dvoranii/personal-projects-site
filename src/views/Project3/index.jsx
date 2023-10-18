// https://express-routing-kgob067qi-dvoranii.vercel.app/
import "./styles.css";
import ProjectTemplate from "../../components/ProjectTemplate";
import GitRepoLink from "../../components/GitRepo";
import projectData from "../../data/projectData.js";
import DendriticVisualizer from "./Components/DendriticVisualizer";

function Project3() {
  const project = projectData.find((p) => p.titleURL === "project3");

  return (
    <div>
      <ProjectTemplate>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <br />
        <div className="additional-description-wrapper">
          <ul className={`outer-list`}>
            <li>
              <b>Starting Point:</b> It all begins with a solitary vertical line
              on an HTML canvas, setting the stage for nature&apos;s art.
            </li>
            <li>
              <b>Branching Probability:</b> At each end node, there&apos;s an
              80% chance (arbitrarily set) that branching will occur. If
              branching is decided, it&apos;s applied across a maximum of two
              branches per end node.
            </li>
            <li>
              <b>Branching Angles:</b> When the moment of forking arrives, the
              left branch veers off at a -22.5° angle, while the right one takes
              a +22.5° turn.
            </li>
            <li>
              <b>Math Behind the Magic:</b> Wondering how the new endpoints are
              found after each branch? <br></br>The formulas are:
              <ul className={`inner-list`}>
                <li>
                  x<sub>2</sub> = x<sub>1</sub> - L * cos(θ)
                </li>
                <li>
                  y<sub>2</sub> = y<sub>1</sub> - L * sin(θ)
                </li>
              </ul>
              <p> ( L is the length, and θ is the angle in radians.)</p>
            </li>
            <li>
              <b>Orientation Matters:</b> The parent line segment&apos;s
              orientation in relation to the initial vertical line plays a
              crucial role. It determines the recalculations for branching so
              that the angle remains consistent at each subsequent fork.
            </li>
            <li>
              <b>The Role of Recursion:</b> To maintain the complexity and
              beauty of these patterns, recursion is used, ensuring that the
              branching process continues from every new end node, creating
              intricate designs reminiscent of the wonders in nature.
            </li>
          </ul>
        </div>

        <h2 className="features-title">Features and Highlights:</h2>
        <ul className={`features-list`}>
          <li>
            <b>Canvas Rendering:</b> The visualizer employs HTML5 canvas to
            render intricate branching patterns, offering smooth transitions and
            clear visualization of each branch.
          </li>
          <li>
            <b>Interactive Controls:</b> Users have the ability to specify the
            minimum and maximum number of branches, providing a hands-on
            experience and facilitating a deeper understanding of how varying
            parameters influence the resulting structures.
          </li>
          <li>
            <b>Real-time Feedback:</b> The visualizer provides instant feedback
            on invalid input ranges, ensuring users remain within the bounds of
            the algorithm&apos;s requirements. This assists in preventing
            erroneous outputs and enhances the overall user experience.
          </li>
          <li>
            <b>Dynamic Branching:</b> With an 80% probability of branching at
            each node, coupled with random angles, every &quot;New Branch&quot;
            action offers a unique pattern, demonstrating the varied and
            unpredictable nature of dendritic growth.
          </li>
          <li>
            <b>Responsive and Clear UI:</b> The design prioritizes
            user-friendliness, with clearly demarcated areas for the canvas,
            input controls, and branching action. This ensures that even those
            unfamiliar with dendritic branching can engage with the tool
            effortlessly.
          </li>
        </ul>
        <br></br>
        <p>
          For a hands-on experience, set the minimum branch value between 0, 1,
          or 2, and max it at 10. But keep in mind, nearing 10 will mean more
          computations, slowing things down a notch. Now, dive in and let nature
          inspire you. Happy branching!
        </p>
        <br></br>
        <div className="git--wrapper__outer">
          <div className="git--wrapper__inner">
            <div>Vanilla JS version:</div>
            <GitRepoLink url="https://github.com/dvoranii/DendriticBranching-02" />
          </div>
          |
          <div className="git--wrapper__inner">
            <div>React version:</div>
            <GitRepoLink url="https://github.com/dvoranii/personal-projects-site/tree/main/src/views/Project3" />
          </div>
        </div>
        <DendriticVisualizer></DendriticVisualizer>
      </ProjectTemplate>
      <GitRepoLink url="https://github.com/dvoranii/DendriticBranching-02"></GitRepoLink>
    </div>
  );
}

export default Project3;
