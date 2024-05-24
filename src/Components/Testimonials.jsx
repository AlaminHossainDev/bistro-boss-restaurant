import SectionTitle from "./SectionTitle";
// import icon from "../assets/icon/"

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-16">
      <SectionTitle
        heading={"Testimonials"}
        subHeading={`---What Our Clients Say---`}
      ></SectionTitle>
      <div className="flex justify-center items-center md:m-24">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="flex flex-col items-center p-8">
              <div className="flex flex-col items-center">
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review.rating}
                  readOnly
                />
                <img src="https://cdn-icons-png.freepik.com/512/0/897.png" className="w-32" alt="" />
                <p className="text-center my-4">{review.details}</p>
                <span className="text-3xl font-bold text-amber-500 mt-2">{review.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
