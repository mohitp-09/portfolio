import React, { useState } from "react";

function ProBox({
  title,
  img,
  description,
  techno1,
  techno2,
  techno3,
  techno4,
  code,
  demo,
  scrollY,
  cName,
  icon,
}) {
  const [scroll, setScroll] = useState(false);

  return (
    <div className={`pro pro__1 ${cName}`}>
      <div className="pro__img">
        <a target="_blank" href={demo} rel="noreferrer">
          <img
            src={img}
            alt="website"
            style={{
              transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
              transition: "transform 5s ease-in-out",
            }}
            onMouseEnter={() => setScroll(true)}
            onMouseLeave={() => setScroll(false)}
          />
        </a>
      </div>
      <div className="pro__text">
        <h3>
          {title} {icon}
        </h3>
        <p>{description}</p>
        <div className="stack">
          {techno1 && <p>{techno1}</p>}
          {techno2 && <p>{techno2}</p>}
          {techno3 && <p>{techno3}</p>}
          {techno4 && <p>{techno4}</p>}
        </div>
        <div className="links">
          <a target="_blank" href={code} rel="noreferrer">
            Code <i className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href={demo} rel="noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProBox;
