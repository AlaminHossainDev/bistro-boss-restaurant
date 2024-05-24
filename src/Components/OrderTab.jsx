import MenuCard from "./MenuCard";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// Function to chunk the items array
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Chunk the items array into chunks of 6
  const chunks = chunkArray(items, 8);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunks.map((chunk, index) => (
          <div className="">
            <SwiperSlide key={index}>
              <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 mb-20">
                {chunk.map((item) => (
                  <MenuCard key={item._id} item={item}></MenuCard>
                ))}
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
