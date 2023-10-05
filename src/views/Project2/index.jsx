import ProjectTemplate from "../../components/ProjectTemplate";
import GitRepoLink from "../../components/GitRepo";
import projectData from "../../data/projectData.js";
import VercelLogo from "/assets/Vercel_logo_black.svg.png";
import "./styles.css";

const Project2 = () => {
  const project = projectData.find((p) => p.titleURL === "project2");
  return (
    <ProjectTemplate>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Extended */}
      <p className={`description--subtitle`}>Features and Highlights:</p>
      <ul className={`features-list`}>
        <li>
          <b>Shadow DOM:</b> Utilizing the power of Web Components, the video
          player encapsulates its functionality using the Shadow DOM, ensuring
          style and behavior isolation from the rest of the webpage.
        </li>
        <li>
          <b>Custom Controls:</b> From play/pause functionality and volume
          adjustments to tooltips for seeking, the video player offers a range
          of customizable controls that enhance the user experience.
        </li>
        <li>
          <b>Responsive UI:</b> The player adjusts and responds to various user
          interactions, such as play, pause, volume change, and seeking, by
          updating its UI elements in real-time.
        </li>
        <li>
          <b>External CSS Loading:</b> The player fetches and integrates
          external styles, making it easy to update and maintain the look and
          feel without touching the core functionality.
        </li>
      </ul>
      <p className={`description--subtitle`}>Integration in Portfolio:</p>
      <p>
        To seamlessly integrate this custom video player into my main portfolio,
        which is built using React and Vite, I deployed the video player as a
        standalone application on Vercel. I then embedded this deployed
        application within my React portfolio using an iframe, ensuring visitors
        can interact and experience the video player&apos;s functionality
        directly. While the{" "}
        <span className="full-screen-text">
          full-screen feature is <u>not directly available</u>
        </span>{" "}
        through the iframe due to browser security constraints, users can access
        the full standalone player by clicking on the link below where they can
        experience the full-screen mode.
      </p>
      <br />

      <div className="links--wrapper">
        <GitRepoLink url="https://github.com/dvoranii/video-player-component-v2" />{" "}
        |
        <div className="vercel--wrapper">
          <img src={VercelLogo} alt="" />
          <a href="">Full deployment</a>
        </div>
      </div>

      <iframe
        width="100%"
        height="700"
        style={{ border: "none" }}
        className="video-iframe"
        src="https://video-player-component-v2-81gg.vercel.app/"
      ></iframe>
    </ProjectTemplate>
  );
};

export default Project2;
