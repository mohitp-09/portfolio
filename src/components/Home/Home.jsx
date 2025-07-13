
// import "./Home.css";
import "./Home.css";
const Html = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383412/html_khk3jv.svg";
const Css = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383412/css_gfpuiv.svg";
const Js = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383413/js_twit44.svg";
const React = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383413/react_wsz9xr.svg";
const Tailwind = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383413/tailwind_wodyo8.svg";
const Waving = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383414/waving._zzubaq.png";
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
                    href="https://www.linkedin.com/in/mohitp09/"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/mohitp-09"
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
