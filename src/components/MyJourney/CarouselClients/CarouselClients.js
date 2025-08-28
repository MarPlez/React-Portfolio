import { useRef } from "react";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import image7 from "./images/7.jpg";
import image8 from "./images/8.jpg";
import image9 from "./images/9.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";

import { StyledSwiper, StyledSwiperSlide } from "./CarouselClientsStyle";

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
  { image: image15 },
  { image: image16 },
];

export const CarouselClients = () => {
  return (
    <StyledSwiper
      slidesPerView={5}
      spaceBetween={10}
      loop
      modules={[Autoplay]}
      freeModeMomentum={false}
      autoplay={{
        delay: 0,  
        pauseOnMouseEnter: true,    
      }}
      speed={1600}                   
    >
      {slides.map((slide) => (
        <StyledSwiperSlide
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
    </StyledSwiper>
  );
};