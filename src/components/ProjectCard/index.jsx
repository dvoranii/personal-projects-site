import "./styles.css";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, thumbnail, description, onClick }) => {
  return (
    <div className="project--card" onClick={onClick}>
      <h3 className="project--card__title">{title}</h3>
      <img src={thumbnail} alt={title} />
      <p className="project--card__description">{description}</p>
    </div>
  );
};

export default ProjectCard;
