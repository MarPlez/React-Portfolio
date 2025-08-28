import styled, { keyframes } from "styled-components";

export const RoleChange = keyframes`
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-50px); }
  50%  { transform: translateY(-100px); }
  75%  { transform: translateY(-150px); }
  100% { transform: translateY(-200px); }
`;

export const TextChanger = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
display: flex;
color: black;
font-size: 36px;
`;

export const IntroText = styled.p`
  font-weight: bold;
  margin: 0;
  padding: 0;
  line-height: 1.2;
`;

export const RolesContainer = styled.div`
  overflow: hidden;
  height: 50px; 
  position: relative;
`;

export const RolesInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 380px;
  animation: ${RoleChange} 4.5s infinite;
  animation-delay: 3s; 
`;

export const Role = styled.span`
  height: 50px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #a85700;
  margin: 0;
  padding: 0;
`;


