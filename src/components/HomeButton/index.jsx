import { Link } from "react-router-dom";
import "./styles.css";

const HomeButton = () => {
  return (
    <div className="home--btn__wrapper">
      <Link to="/" className="home--btn">
        HOME
      </Link>
    </div>
  );
};

export default HomeButton;
