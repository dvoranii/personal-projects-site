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
            each node, coupled with random angles, every &qot;New Branch&qot;
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
