import HomeButton from "../HomeButton";
import "./styles.css";

// eslint-disable-next-line react/prop-types
const ProjectTemplate = ({ children }) => {
  return (
    <div className="project--template__outer">
      <HomeButton />
      <div className="project--content">{children}</div>
    </div>
  );
};

export default ProjectTemplate;
