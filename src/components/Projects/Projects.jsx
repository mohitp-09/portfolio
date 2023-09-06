
import "./Projects.css"
import ProBox from "../Probox/ProBox";
import demo1 from "./images/screenzaa.png";
import demo2 from "./images/demo2.png";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              
            <ProBox
                title="ScreenZaa"
                img={demo1}
                description="ScreenZaa: Your ultimate online destination for all things movies, offering easy exploration, comparison, and reservation of top-notch cinematic experiences."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/mohitpatidardev/ScreenZaa"
                demo="https://screenzaa.vercel.app/"
                scrollY="-61%"
                icon="🎬"
              />


              

              <ProBox
                title="Razepay Clone"
                img={demo2}
                description="This is not a project it is just added for alignment"
                techno1="HTML"
                techno2="Tailwind"
                code="https://github.com/mohitpatidardev"
                demo="https://razorpay-clone-three.vercel.app/"
                scrollY="-80%"
                icon="🪙"
                cName="reversed-proj"
              />
  
            </div>
          </div>
          <h2 className="new-projects">New projects coming soon.. 🤠</h2>
        </div>
      </section>
    </>
  );
}

export default Projects;
