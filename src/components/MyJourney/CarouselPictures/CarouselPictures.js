import { useRef } from "react";
import { Swiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; 

import image1 from "./images/01.jpg";
import image2 from "./images/02.jpg";
import image3 from "./images/03.jpg";
import image4 from "./images/04.jpg";
import image5 from "./images/05.jpg";
import image6 from "./images/06.jpg";
import image7 from "./images/07.jpg";
import image8 from "./images/08.jpg";
import image9 from "./images/09.jpg";
import image10 from "./images/10.jpg";
import image11 from "./images/11.jpg";
import image12 from "./images/12.jpg";
import image13 from "./images/13.jpg";
import image14 from "./images/14.jpg";
import image15 from "./images/15.jpg";
import image16 from "./images/16.jpg";

import { StyledSwiper, StyledSwiperSlide } from "./CarouselPicturesStyle";

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

export const CarouselPictures = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    
    <StyledSwiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView={2.75}
      speed={600}
      loop
      spaceBetween={20}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}

      onBeforeInit={(swiper) => {
        swiper.params.navigation = {
          ...(swiper.params.navigation || {}),
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        };
      }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
    >
      {slides.map((slide) => (
        <StyledSwiperSlide
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      <button ref={prevRef} className="nav-btn nav-prev cursor-hover-target" >
        ‹
      </button>
      <button ref={nextRef} className="nav-btn nav-next cursor-hover-target" >
        ›
      </button>
    </StyledSwiper>
  );
};
