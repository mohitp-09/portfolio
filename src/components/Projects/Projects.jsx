import "./Projects.css";
import ProBox from "../Probox/ProBox";
const demo1 =
  "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383440/screenzaa_e4obkt.png";
const demo2 =
  "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383433/demo2_gblwos.png";
const demo3 =
  "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752395100/screencapture-taste-bite-pi-vercel-app-2025-07-13-13_54_30_l6tihz.png";

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
                techno3="TMDB API"
                code="https://github.com/mohitpatidardev/ScreenZaa"
                demo="https://screenzaa.vercel.app/"
                scrollY="-61%"
                icon="🎬"
              />

              <ProBox
                title="Razepay Clone"
                img={demo2}
                description="A responsive Razorpay homepage clone built using HTML and Tailwind CSS. This project replicates the look and feel of the official Razorpay website, showcasing modern UI design and layout alignment techniques."
                techno1="HTML"
                techno2="Tailwind"
                code="https://github.com/mohitpatidardev"
                demo="https://razorpay-clone-three.vercel.app/"
                scrollY="-80%"
                icon="🪙"
                cName="reversed-proj"
              />

              <ProBox
                title="TasteBite"
                img={demo3}
                description="TasteBite is a modern food-ordering platform with secure sign-up/login, Stripe payment integration, and a smooth user experience. Users can browse meals, add them to their cart, place orders, and view their previous orders."
                techno1="MERN"
                techno2="Stripe"
                techno3="Bootstrap"
                techno4="Tailwind"
                code="https://github.com/mohitp-09/TasteBite"
                demo="https://taste-bite-pi.vercel.app/"
                scrollY="-48%"
                icon="🍽️"
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
