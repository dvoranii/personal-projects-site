import ProjectTemplate from "../../components/ProjectTemplate";
import GitRepoLink from "../../components/GitRepo";

const Project2 = () => {
  return (
    <ProjectTemplate>
      <h1>Project 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        laudantium soluta facere architecto impedit doloremque provident sint,
        ipsam accusamus, beatae error incidunt, excepturi dicta velit animi
        eveniet tempora dolores omnis.
      </p>
      <br />
      <GitRepoLink url="http://www.google.ca" />
    </ProjectTemplate>
  );
};

export default Project2;
