import "./MobileProductSection.scss";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { IoHeartOutline, IoCart } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);
const MobileProductSection = ({ products }) => {
  useEffect(() => {
    gsap.fromTo(
      ".swiper-products",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".title",
      { color: "white" },
      {
        backgroundPosition: "0% 0",
        ease: "none",
        scrollTrigger: {
          trigger: ".title",
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  });

  return (
    <section className="products-section">
      <h3 className="title">OUR PRODUCTS</h3>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper-products"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="card">
            <div className="inner-card">
              <img src={product.image} alt={product.title} />
              <div className="wishlist-heart">
                <IoHeartOutline />
              </div>
            </div>
            <div className="info">
              <div className="top">
                <h3>{product.title}</h3>
              </div>
              <div className="bottom">
                <p>Rs.{product.price}</p>
                <button>
                  <IoCart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MobileProductSection;
