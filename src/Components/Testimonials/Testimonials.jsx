import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules"; // Updated import path for Swiper 8+
import "./Testimonials.css";

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: "Zain helped bring our website vision to life. His technical expertise and creative input made all the difference. He communicated clearly throughout the process, and the end result exceeded our expectations.",
      name: "John Doe",
      designation: "Senior Software Engineer - 10Pearls",
      image: "/assets/person.png",
    },
    {
      text: "Zain built us a fantastic website. His work was creative, efficient, and exactly what we needed. He communicated well throughout the process. I’m thrilled with the results.",
      name: "Peter",
      designation: "Project Manager - XYZ",
      image: "/assets/person.png",
    },
    {
      text: "Zain is reliable and skilled in WordPress. He solves problems quickly and always keeps projects on track.",
      name: "Neha",
      designation: "Project Manager - XYZ",
      image: "/assets/person.png",
    },
    {
      text: "Zain is a great communicator and always brings fresh ideas to the table. It’s been a pleasure collaborating with him.",
      name: "Eddie",
      designation: "Project Manager - XYZ",
      image: "/assets/person.png",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex); // Track active slide
  };

  return (
    <div className="testimonial-container">
      <h1>
        Words That Are <span>Trustable</span>
      </h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        style={{ padding: "20px 0" }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`testimonial-card   ${
                activeSlide === index ? "fade-in" : ""
              }`}
            >
              <img
                className="testi-img"
                src={item.image}
                alt={`${item.name}'s profile`}
              />
              <p>{item.text}</p>
              <h3>{item.name}</h3>
              <p className="designation">{item.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-navigation">
        <button ref={prevRef} className="swiper-button custom-prev">
          &lt;
        </button>
        <button ref={nextRef} className="swiper-button custom-next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
