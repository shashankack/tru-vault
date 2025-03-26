import { useState, useEffect } from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import MobileProductSection from "../components/ProductsSection/MobileProductSection";

import slide1 from "../assets/slide_1.png";
import slide2 from "../assets/slide_2.png";
import slide3 from "../assets/slide_3.png";

import mobileSlide1 from "../assets/slide_1_mobile.png";
import mobileSlide2 from "../assets/slide_2_mobile.png";
import mobileSlide3 from "../assets/slide_3_mobile.png";

import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
import product5 from "../assets/product_5.png";
import product6 from "../assets/product_6.png";

const images = [slide1, slide2, slide3];
const mobileImages = [mobileSlide1, mobileSlide2, mobileSlide3];

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

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
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
    <>
      <HeroSection sliderImages={slides} />
      {isMobile ? (
        <MobileProductSection products={products}/>
      ) : (
        <ProductsSection products={products} />
      )}
    </>
  );
};

export default Home;
