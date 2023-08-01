import React from 'react'

const Home = () => {
  return (
    <div className="section home" id="Home">
    <div className="overlay ">
        <div className="brief  section-center">
          <h2>
            Hi, my name is <br />
            <span className="special"> Waleed salah </span> <br /> I'm A
            Front-End Developer
          </h2>
          <button type="button" className="btn">
            <a href="#About" spy={true} smooth={true} duration={500}>
              Know More
            </a>
          </button>
        </div>
        </div>
      </div>
  )
}

export default Home