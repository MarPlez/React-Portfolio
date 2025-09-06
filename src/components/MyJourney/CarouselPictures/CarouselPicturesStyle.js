import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 500px;
  height: 250px;
  padding-bottom: 36px;
  margin: 40px 0 60px 0;

  @media (max-width: 1000px) {
  height: 200px;
  }

  @media (max-width: 768px) {
  width: 400px;
  margin: 20px 0 10px 0;
  }

  .swiper-pagination {
    bottom: 0px !important;
    left: 0;
    right: 0;
  }

  .swiper-pagination-bullet,
  .swiper-pagination-bullet-active {
    background: black;
  }

  .nav-btn {
    display: flex;  
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateY(-50%);
    z-index: 6;
    width: 36px;
    height: 36px;
    border-radius: 50px;
    border: 1px solid #d08300;
    background: #fff;
    color: black;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s, transform 0.2s;

    @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
    }
  }

  .nav-btn:hover {
    background: #d08300;
    color: white;
  }
    
  .nav-prev {
    left: 100px;

    @media (max-width: 1000px) {
    left: 60px;
    }
  }

  .nav-next {
    right: 100px;

    @media (max-width: 1000px) {
    right: 60px;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  overflow: hidden;
`;
