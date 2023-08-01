import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      className="about-section"
      id="About"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="title">about me</h2>
      <div className="underline"></div>
      <div className="subsection">
        <p>
          I'm A
          <span className="text-animation">
            React JS Developer <br /> Seeking a challenging opportunity as a
            Developer in a well reputed firm, using latest technologies and
            skills so as to be qualified for a leading position, where I can
            further upgrade and develop my experience and knowledge in a
            mutually beneficial relationship.
          </span>
        </p>
        <button type="button" className="btn2">
          <a href="https://drive.google.com/file/d/1BmAaNYFrU0prcXbHI_a8P2deT0e6Ogpr/view">
            My CV
          </a>
        </button>
      </div>
    </section>
  );
};
export default About;
