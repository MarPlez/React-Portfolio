import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 500px; 
  height: 100px;       
  padding-bottom: 0;       
  position: relative;
  border-radius: 16px;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100px;           
  border-radius: 16px;
  background-size: cover;
  background-position: 50% 50%;
`;
