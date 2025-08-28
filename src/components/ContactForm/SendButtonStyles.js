import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const pop = keyframes`
  0%   { transform: scale(0.6); opacity: 0; }
  60%  { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
`;

export const AnimatedButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s;

  &:hover:not(:disabled) {
    background-color: #a85700;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export const Loader = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const Check = styled.span`
  font-size: 30px;
  animation: ${pop} 0.4s ease forwards;
`;
