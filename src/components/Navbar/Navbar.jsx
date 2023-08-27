import React, { useState } from 'react';  // Import React and useState only once
import "./Navbar.css"

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });  // Corrected scrolling behavior
  };

  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const scrollToSection = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setHamburger(false);
    }
  };

  return (
    <>
      <div className={`navbar ${hamburger ? "open-menu" : ""}`} >
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" checked={hamburger} onChange={() => setHamburger(!hamburger)} />
          <div className="hamburger-lines" onClick={() => setHamburger(!hamburger)}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items" style={{ cursor: 'pointer' }}>
            {navlinks.map((item) => (
              <li key={item.name}><a onClick={(e) => scrollToSection(e, item.link)}>{item.name}</a></li>
            ))}
          </ul>
          <h1 onClick={pageUp} className="logo">Mohit.dev</h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
