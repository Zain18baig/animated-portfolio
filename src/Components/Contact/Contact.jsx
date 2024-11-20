import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Contact.css";
import React, { useEffect } from "react"; // Make sure to import useEffect
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="contact-section">
      <h2 className="contact-title">
        <span className="con">Contact</span> With Me
      </h2>
      <div className="contact-container">
        {/* Left Section */}
        <div
          className="contact-info"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <img src="/assets/dd.jpeg" alt="Profile" className="profile-img" />
          <h3 className="name">Mirza Zain Baig</h3>
          <p className="role">MERN Stack Developer</p>
          <p className="description">
            Hello! I'm Zain, a passionate Full Stack Web Developer skilled in
            building dynamic and responsive web applications. My expertise
            includes modern technologies like HTML5, CSS3, JavaScript, React.js,
            Node.js, Express.js, MongoDB, and Firebase.
          </p>
          <p className="contact-detail">Phone: +92 3072799542</p>
          <p className="contact-detail">
            Email:{" "}
            <a href="mailto:zainulhassa5151@gmail.com" className="email-link">
              zainulhassan5151@gmail.com
            </a>
          </p>
          <div className="social-icons">
            <a href="#facebook" className="icon facebook" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="#linkedin" className="icon linkedin" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#github" className="icon github" title="GitHub">
              <FaGithub />
            </a>
          </div>
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

        {/* Right Section */}
        <form
          className="contact-form"
          data-aos="flip-left"
          data-aos-duration="1000"
        >
          <div className="form-row">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
            />
          </div>
          <input type="email" placeholder="Email" className="form-input" />
          <input type="text" placeholder="Subject" className="form-input" />
          <textarea
            placeholder="Message"
            rows="5"
            className="form-input textarea"
          ></textarea>
          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
