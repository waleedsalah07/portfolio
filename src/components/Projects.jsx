import { useEffect } from "react";
import { projects } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="section section-fit" id="Projects">
      <h2 className="title">Projects</h2>
      <div className="underline"></div>
      <div className="all-projects">
        {projects.map((project) => {
          const { id, title, webUrl, githubUrl, description, techniques, img } = project;
          return (
            <div className="project" key={id}>
              <div className="info" data-aos="fade-right">
                <h3 className="project-title">{title}</h3>
                <p className="desc">
                  {description} <br /> <br />
                  <p className="tech">{techniques}</p>
                </p>

                <div className="btns">
                  <button type="button" className="btn2">
                    <a  target="blank"  href={webUrl}>See Live</a>
                  </button>
                  <button type="button" className="btn2">
                    <a  target="blank"  href={githubUrl}>Source Code</a>
                  </button>
                </div>
              </div>
              <div className="projectImg" data-aos="fade-left">
                <a href={webUrl} >
                  <img   target="blank" src={img} alt=""  className="img" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
