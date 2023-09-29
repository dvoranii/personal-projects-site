/* eslint-disable react/prop-types */
import "./styles.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, thumbnail, description, url }) => {
  return (
    <div className="project--card">
      <h3 className="project--card__title">{title}</h3>
      <Link to={url}>
        <img src={thumbnail} alt={title} />
      </Link>

      <p className="project--card__description">
        {description.substring(0, 200)}...
        <Link to={url} className="project--card__see-more">
          see more
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;
