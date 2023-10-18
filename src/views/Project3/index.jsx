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

        <div className="git--wrapper__outer">
          <div className="git--wrapper__inner">
            <div>Vanilla JS version:</div>
            <GitRepoLink url="https://github.com/dvoranii/DendriticBranching-02" />
          </div>
          |
          <div className="git--wrapper__inner">
            <div>React version:</div>
            <GitRepoLink url="https://github.com/dvoranii/personal-projects-site/tree/main/src/views/Project1" />
          </div>
        </div>
        <DendriticVisualizer></DendriticVisualizer>
      </ProjectTemplate>
      <GitRepoLink url="https://github.com/dvoranii/DendriticBranching-02"></GitRepoLink>
    </div>
  );
}

export default Project3;
