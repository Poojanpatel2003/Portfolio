import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <nav className="resume-nav">
        <ul>
          <li>
            <a href="/Resume.pdf" download>
              <i className="fa-solid fa-download"></i> Download CV
            </a>
          </li>
        </ul>
      </nav>

      <div className="resumecontainer">
        <div>
          <img src="/resume1.png" alt="Resume Page 1" />
        </div>
        <div>
          <img src="/resume2.png" alt="Resume Page 2" />
        </div>
      </div>
    </section>
    
  );
};

export default Resume;
