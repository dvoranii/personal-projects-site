import ProjectCard from "../../components/ProjectCard";
import project1Thumb from "../../assets/project1-thumb.jpg";
import project2Thumb from "../../assets/project2-thumb.png";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const navigate = useNavigate();
  const projects = [
    {
      title: "Project 1",
      thumbnail: project1Thumb,
      description: "some text",
    },
    {
      title: "Project 2",
      thumbnail: project2Thumb,
      description: "some more text",
    },
  ];

  const handleProjectClick = (title) => {
    const route = title.toLowerCase().replace(" ", "");
    navigate(`/${route}`);
  };

  return (
    <div className="home--wrapper">
      <h1 className="home--title">My Projects</h1>
      <div className="home--project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            thumbnail={project.thumbnail}
            description={project.description}
            onClick={() => handleProjectClick(project.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
