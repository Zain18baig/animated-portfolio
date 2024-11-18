import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNode,
  FaWordpress,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import "./header.css";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeveloperVisible, setIsDeveloperVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIsDeveloperVisible((prev) => !prev); // Toggle between true and false
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const skillsContainer = document.querySelector(".skills-container");
      const rect = skillsContainer.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo">ZB</div>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-container ${isMenuOpen ? "active" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>
            &#10005;
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <span className="search-icon">🔍</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="Hero-2">
        <div className="hero-text">
          <h1>
            Hi, from <span>Zain Baig</span>
          </h1>
          <h2>
            I'm a &nbsp;
            <span
              className={`fade-text ${
                isDeveloperVisible ? "visible" : "hidden"
              }`}
            >
              Web Developer
            </span>
            <span
              className={`fade-text ${
                !isDeveloperVisible ? "visible" : "hidden"
              }`}
            >
              UI/UX Designer
            </span>
          </h2>
          <p className="para">
            Proficient in React.js, Firebase, JavaScript, CSS, Tailwind,
            Bootstrap, and WordPress, with a strong understanding of design
            principles and user experience.
          </p>
          <div className="download-cv">
            <a
              href="/assets/resume.pdf"
              download="Zain-CV.pdf"
              className="cv-download-button"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="photo">
          <img src="/assets/rb_1325.png" alt="Photo" className="png" />
        </div>
      </div>

      <div className="skills-container">
        <div className="section">
          <h3>Find Me In</h3>
          <div className="icons">
            <div className={`icon ${isInView ? "show" : ""}`}>
              <a
                href="https://www.linkedin.com/in/mirza-zain-ul-hassan-baig-4836a52a6/"
                target="_blank"
              >
                <FaLinkedin style={{ color: "#0077b5" }} />
              </a>
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <a href="https://github.com/Zain18baig" target="_blank">
                <FaGithub style={{ color: "#333" }} />
              </a>
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <a href="https://twitter.com/Zain18baig" target="_blank">
                <FaTwitter style={{ color: "#1DA1F2" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Best Skill On</h3>
          <div className="icons">
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaHtml5 style={{ color: "#E34F26" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaCss3Alt style={{ color: "#1572B6" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaJs style={{ color: "#F7DF1E" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaBootstrap style={{ color: "#7952B3" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <SiTailwindcss style={{ color: "#06B6D4" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaReact style={{ color: "#61DAFB" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaNode style={{ color: "#339933" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <SiNextdotjs style={{ color: "#000000" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <FaWordpress style={{ color: "#21759b" }} />
            </div>
            <div className={`icon ${isInView ? "show" : ""}`}>
              <SiMysql style={{ color: "#4479a1" }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Hero;
