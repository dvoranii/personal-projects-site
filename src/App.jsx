import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Project1 from "./views/Project1";
import Project2 from "./views/Project2";
import Project3 from "./views/Project3";
import "./global.css";
// import { Helmet } from "react-helmet";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
