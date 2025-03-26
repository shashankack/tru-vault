import "./ProductsSection.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoHeartOutline, IoCart } from "react-icons/io5";

const ProductsSection = ({ products }) => {
  return (
    <section className="products-section">
      <h3 className="title">SHOP</h3>
      <Swiper
        pagination={true}
        navigation={true}
        loop
        slidesPerView={4}
        spaceBetween={30}
        modules={[Navigation]}
        className="swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          501: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 5000,
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index} className="card">
              <div className="inner-card">
                <img src={product.image} alt="cat" />
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
          );
        })}
      </Swiper>
    </section>
  );
};

export default ProductsSection;
