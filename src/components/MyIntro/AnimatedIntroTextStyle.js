import styled, { keyframes } from 'styled-components';

export const typing = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
`;

export const underline = keyframes`
  to {
    transform: scaleX(1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TypingText = styled.p`
  position: relative;
  font-size: 16px;
  color: #8a7d72;
  padding-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;

&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f2f0eb;
  border-left: 1px solid #8a7d72;
  animation: ${typing} 1.5s steps(30) forwards;
}

&::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom: 2px solid #cf8536;
  transform: scaleX(0);
  transform-origin: left;
  animation: ${underline} 0.3s ease forwards;
  animation-delay: 1.5s; 
}
`;




