import "./HeroSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from "../../assets/slide_1.png";
import slide2 from "../../assets/slide_2.png";
import slide3 from "../../assets/slide_3.png";

import mobileSlide1 from "../../assets/slide_1_mobile.png";
import mobileSlide2 from "../../assets/slide_2_mobile.png";
import mobileSlide3 from "../../assets/slide_3_mobile.png";

import { useState, useEffect } from "react";

const images = [slide1, slide2, slide3];
const mobileImages = [mobileSlide1, mobileSlide2, mobileSlide3];

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileImages : images;

  return (
    <section className="hero-section">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Navigation, Autoplay]}
        style={{ height: "100%" }}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={image} alt={`slide-${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
