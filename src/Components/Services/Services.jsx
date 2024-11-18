import React, { useEffect } from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="services-container">
      <h1>
        <span className="redtxt">Services</span> I Provide
      </h1>
      <div className="services-cards">
        <div className="service-card" data-aos="flip-up"   data-aos-duration="900">
          <div className="icon">&#60;&#47;&#62;</div>
          <h2>Web Development</h2>
          <p>
            Crafting captivating, responsive websites. Whether it's a new site
            or a redesign, I turn your digital vision into reality.
          </p>
        </div>
        <div className="service-card" data-aos="flip-down"   data-aos-duration="1000">
          <div className="icon">📝</div>
          <h2>WordPress Development</h2>
          <p>
            Specializing in WordPress development, I create user-friendly,
            customizable, and SEO-optimized websites tailored to your brand’s
            needs.
          </p>
        </div>
        <div className="service-card" data-aos="flip-up"   data-aos-duration="1100">
          <div className="icon">🌐</div>
          <h2>Hosting Websites</h2>
          <p>
            Secure your online presence with my one-stop solution. Register your
            ideal domain, and I'll handle hosting for an always accessible,
            secure, and fast website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
