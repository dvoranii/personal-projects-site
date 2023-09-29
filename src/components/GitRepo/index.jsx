import "./styles.css";
import GithubLogo from "/assets/github-logo.png";
// eslint-disable-next-line react/prop-types
const GitRepoLink = ({ url }) => {
  return (
    <div className="git-repo">
      <img src={GithubLogo} alt="" />
      <a href={url} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default GitRepoLink;
