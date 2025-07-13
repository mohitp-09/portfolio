const AboutImg = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383376/about-img_yqzt7s.jpg";
const RoundedText = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383375/text2_g8fpkf.svg";
const WorkingEmoji = "https://res.cloudinary.com/dhm1rjve5/image/upload/v1752383375/working-emoji_utek6b.png";



import "./About.css";

function AboutMe() {
  return (
    <>
      <div className="container">
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <div className="img-side">
                <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                <img src={AboutImg} alt="mee" className="img-side__main-img" />
                <span>
                  <img src={RoundedText} alt="text" />
                </span>
              </div>
              <div className="text-side">
                <h3>About me</h3>
                <h4>
                  A dedicated Front-end Developer

                </h4>
                {/* <p>
                  Hello, I'm Mohit patidar, a passionate and creative Front-End React Developer with a keen eye for design and a strong desire to craft beautiful, user-friendly experiences. My skills include <strong> HTML, CSS, SCSS, JS, React, Tailwind, Bootstrap, Git & GitHub, and UI/UX.</strong> Let's craft remarkable digital solutions together.
                </p> */}
                <p>
                  Hello, I'm Mohit Patidar, a passionate and creative Front-End React Developer with a keen eye for design and a strong desire to craft beautiful, user-friendly experiences. My skills include <strong>HTML, CSS, SCSS, JS, React, Tailwind, Bootstrap, Git & GitHub, and UI/UX. </strong> Let's craft remarkable digital solutions together.
                </p>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
