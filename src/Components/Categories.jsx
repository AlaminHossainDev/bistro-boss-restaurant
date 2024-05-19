import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../custom.css";

// Import image
import slide1 from '../../src/assets/catgories/slide1.jpg'
import slide2 from '../../src/assets/catgories/slide2.jpg'
import slide3 from '../../src/assets/catgories/slide3.jpg'
import slide4 from '../../src/assets/catgories/slide4.jpg'
import slide5 from '../../src/assets/catgories/slide5.jpg'

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "./SectionTitle";
const Categories = () => {
  return (
    <div className="relative mb-40">
        <SectionTitle 
        heading= {"ORDER ONLINE"}
        subHeading= {`---From 11:00am to 10:00pm---`} >
        </SectionTitle>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="Salad" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Salad" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Soup" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Soup</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="Pizza" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Salad</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="Salad" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Cake</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Pizza" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="Salad" />
          <p className="text-3xl text-white -mt-10 text-center flex justify-center">Salad</p>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination-custom"></div>
    </div>
  );
};

export default Categories;
