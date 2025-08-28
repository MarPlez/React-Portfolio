import styled, { css } from "styled-components";

export const Intro = styled.div`
  position: fixed;
  z-index: 10000;   
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #f2f0eb;
  transition: 1s;   
  will-change: top;

  ${({ slideUp }) =>
    slideUp &&
    css`
      top: -101vh;  
    `}
`;

export const LogoHeader = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: d08300;
  margin: 0;
`;

export const Logo = styled.span`
  position: relative;
  display: inline-block; 
  bottom: -20px;
  opacity: 0;
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;

  &.active {
    bottom: 0;
    opacity: 1;
    transition: ease-in-out 0.5s;
  }

  &.fade {
    bottom: 150px;
    opacity: 0;
    transition: ease-in-out 0.5s;
  }
`;
