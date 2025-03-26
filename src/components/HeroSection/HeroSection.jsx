import "./HeroSection.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSection = ({ sliderImages }) => {
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
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={image} alt={`slide-${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
