import "./ProductsSection.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { IoHeartOutline, IoCart } from "react-icons/io5";

import product1 from "../../assets/product_1.png";
import product2 from "../../assets/product_2.png";
import product3 from "../../assets/product_3.png";
import product4 from "../../assets/product_4.png";
import product5 from "../../assets/product_5.png";
import product6 from "../../assets/product_6.png";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      image: product1,
      title: "ITEM ONE",
      price: 1000,
    },
    {
      id: 2,
      image: product2,
      title: "Item 2",
      price: 1000,
    },
    {
      id: 3,
      image: product3,
      title: "Item 3",
      price: 1000,
    },
    {
      id: 4,
      image: product4,
      title: "Item 4",
      price: 1000,
    },
    {
      id: 5,
      image: product5,
      title: "Item 5",
      price: 1000,
    },
    {
      id: 6,
      image: product6,
      title: "Item 6",
      price: 1000,
    },
  ];

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
          500: {
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
