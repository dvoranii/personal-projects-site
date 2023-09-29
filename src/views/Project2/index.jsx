import ProjectTemplate from "../../components/ProjectTemplate";
import GitRepoLink from "../../components/GitRepo";
import projectData from "../../data/projectData.js";

const Project2 = () => {
  const project = projectData.find((p) => p.titleURL === "project2");
  return (
    <ProjectTemplate>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <br />
      <GitRepoLink url="https://github.com/dvoranii/video-player-component-v2" />

      <iframe src="https://outpost379.com/" width="1200" height="600"></iframe>
    </ProjectTemplate>
  );
};

export default Project2;
