
// import "./Home.css";
import "./Home.css";
import Html from "./image/html.svg"
import Css from "./image/css.svg"
import Js from "./image/js.svg"
import React from "./image/react.svg"
import Tailwind from "./image/tailwind.svg"
import Waving from "./image/waving..png"
import cv from "./image/mohit_patidar_cv.pdf"


const Home = () => {

  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Tailwind,
      title: "Tailwind CSS",
    }
  ];


    return (
        <>
          <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img className="img" src={Waving} alt="waving_hand" />
                <p>
                Hi, I'm Mohit Patidar. A passionate Front-end React
                  Developer from Indore. 
                </p>
                <a href={cv} class="btn" download><i class="fa fa-download"></i> Resume</a>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/mohitpatidardev/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/mohitpatidardev"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </span>
              </div>
              <div className="hero-img"></div>
            </div>
            
          </div>
          <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      </section>
        </>
    )
}

export default Home;






