import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const Carousel = ({
  slides,
  slidesPerView,
  spaceBetween,
  coverflowEffect,
  swiperStyles,
}) => {
  
  /* SLIDER SETTINGS  */

  const options = {
    slidesPerView,
    grabCursor: true,
    spaceBetween,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    coverflowEffect,
    modules: [Autoplay, EffectCoverflow],
  };
  return (
    <Swiper {...options} style={swiperStyles}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
