import ProjectCard from "../../components/ProjectCard";
import projectData from "../../data/projectData";
import "./styles.css";

const Home = () => {
  return (
    <div className="home--wrapper">
      <h1 className="home--title">Projects</h1>
      <div className="home--project-grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            url={`/${project.titleURL}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
