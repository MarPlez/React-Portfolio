import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 400px; 
  height: 80px;   
  padding-bottom: 0;       
  position: relative;
  border-radius: 16px;

  @media (max-width: 1000px) {
  height: 60px;
  }

  @media (max-width: 768px) {
  margin-top: 10px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`         
  height: 80px;  
  border-radius: 16px;
  background-size: cover;
  background-position: 50% 50%;

  @media (max-width: 1000px) {
  height: 60px;
  }  
`;
